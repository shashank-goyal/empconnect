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
    Visibility,
} from 'semantic-ui-react'

export default class HomepageLayout extends Component {
    state = {activeItem : 'Home'}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
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
                                    </Menu.Item>
                                </Container>
                            </Menu>
                    </Segment>


                <Segment style={{ padding: '50em' }} vertical>
                </Segment>
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}