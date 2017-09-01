import React, { Component } from 'react'
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
    Tab,Label,Input
} from 'semantic-ui-react'
import ClassifiedTile from './ClassifiedTile'
import data from './data'
export default class Classifieds extends Component {
   constructor(props){
       super(props);
       this.state = {
           activeItem:"search"
       }
       this.handleItemClick = this.handleItemClick.bind(this);
   }
   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        var activeItem = this.state.activeItem;
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                    <Grid.Row id="clasifiedTile">
                      <Grid.Column width={3}>
                      <Menu vertical>
                        <Menu.Item>
                        <Input placeholder='Search...' />
                        </Menu.Item>

                        <Menu.Item>
                        Home

                        <Menu.Menu>
                            <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                            Search
                            </Menu.Item>
                            <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                            Add
                            </Menu.Item>
                            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                            Remove
                            </Menu.Item>
                        </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                        <Icon name='grid layout' />
                        Browse
                        </Menu.Item>
                        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
                        Messages
                        </Menu.Item>

                        <Dropdown item text='More'>
                        <Dropdown.Menu>
                            <Dropdown.Item icon='edit' text='Edit Profile' />
                            <Dropdown.Item icon='globe' text='Choose Language' />
                            <Dropdown.Item icon='settings' text='Account Settings' />
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                 </Grid.Column>
                <Grid.Column width={12}>
                    <ClassifiedTile data={data}/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>
        )
    }
}