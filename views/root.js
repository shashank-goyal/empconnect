import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,Dropdown,
    Tab,Label
} from 'semantic-ui-react'
import HomepageLayout from './HomepageLayout';
import Classifieds from './Classifieds';
import Events from './Events';
import Achievements from './Achievements';

export default class Root extends React.Component {
    constructor(){
        super();
        this.onChange= this.onChange.bind(this)
    }
    onChange(state) {
        this.setState(state);
    }
    componentWillMount= () => {
        var setState = this.onChange;
        function displayLocation(latitude,longitude){
            var request = new XMLHttpRequest();

            var method = 'GET';
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
            var async = true;

            request.open(method, url, async);
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    var data = JSON.parse(request.responseText);
                    var addressComponents = data.results[0].address_components;
                    for(var i=0;i<addressComponents.length;i++){
                        var types = addressComponents[i].types
                        if(types=="locality,political"){
                            var selectedLocation = "Select Location"
                            if(addressComponents[i].long_name.toLowerCase() === 'bengaluru' || addressComponents[i].long_name.toLowerCase() === 'pune'){
                                selectedLocation=addressComponents[i].long_name
                            }
                            setState({ selectedLocation: selectedLocation })
                        }
                    }
                }
            }.bind(this);
            request.send();
        };

        var successCallback = function(position){
            var x = position.coords.latitude;
            var y = position.coords.longitude;
            displayLocation(x,y);
        };


        navigator.geolocation.getCurrentPosition(successCallback);
    }
    state = {activeItem : 'Home', selectedLocation : 'Select Location'}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleLocationChange = (e) => this.setState({ selectedLocation: e.target.value })
    render() {
        const { activeItem, selectedLocation } = this.state
        return (
            <div>
                <Segment
                    inverted
                    textAlign='center'
                    vertical
                >
                    <Menu fixed="top" inverted compact size='large'>
                        <Container>
                            <Menu.Item><span style={{fontSize: '20px', fontWeight: 'bold'}}>Employee Connect</span></Menu.Item>
                            <Menu.Item as='a' name="Home" onClick={this.handleItemClick} active={activeItem === 'Home'}>Home</Menu.Item>
                            <Menu.Item as='a' name="Classifieds" onClick={this.handleItemClick}  active={activeItem === 'Classifieds'}>Classifieds</Menu.Item>
                            <Menu.Item as='a' name="Events" onClick={this.handleItemClick} active={activeItem === 'Events'}>Events</Menu.Item>
                            <Menu.Item as='a' name="Achievements" onClick={this.handleItemClick} active={activeItem === 'Achievements'}>Achievements</Menu.Item>
                            <Menu.Item position='right'>
                                <Menu.Item>Welcome User</Menu.Item>
                                <Dropdown
                                    button
                                    className='icon'
                                    floating
                                    labeled
                                    icon='world'
                                    options={[{ key: 'Bengaluru', text: 'Bengaluru', value: 'Bengaluru' },{ key: 'Pune', text: 'Pune', value: 'Pune' }]}
                                    text={selectedLocation}
                                    placeholder="Select Location"
                                    onChange={this.handleLocationChange}
                                />
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
                { activeItem === 'Home' ?   <HomepageLayout/> : undefined}
                { activeItem === 'Classifieds' ?   <Classifieds/> : undefined}
                { activeItem === 'Events' ?   <Events/> : undefined}
                { activeItem === 'Achievements' ?   <Achievements/> : undefined}
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        );
    }
}