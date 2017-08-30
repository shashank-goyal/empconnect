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
    Tab,Label
} from 'semantic-ui-react'

export default class HomepageLayout extends Component {

    panes = [
        { menuItem: 'Activities', render: () => <Tab.Pane attached={false}>Recent Activities</Tab.Pane> },
        { menuItem: 'Bithdays', render: () => <Tab.Pane attached={false}>Recent Bithdays</Tab.Pane> },
        { menuItem: 'Holidays', render: () => <Tab.Pane attached={false}>Recent Holidays</Tab.Pane> },
    ]

    handleClick(e){
        console.log('clicked')
    }

    render() {
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Grid container stackable verticalAlign='middle'>
                                    <Grid.Row>
                                        <a href="javascript:void(0);" onClick={this.handleClick}><Icon size="large" color="blue" name='add square' />Click here to add new item</a>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Segment raised color='blue' style={{ width: '100%' }}>
                                            <Header as='h3' style={{ fontSize: '2em' }}>Recent Achievements</Header>
                                            Here we will se ethe latest 5 achievements.
                                        </Segment>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Segment raised color='blue' style={{ width: '100%' }}>
                                            <Header as='h3' style={{ fontSize: '2em' }}>Recent Classifieds</Header>
                                            Here we will se ethe latest 5 classifieds.
                                        </Segment>

                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Grid container stackable verticalAlign='top'>
                                    <Grid.Row>
                                            <Segment raised color='blue' style={{ width: '100%' }}>
                                                <Header as='h3' style={{ fontSize: '2em' }}>Upcoming Events</Header>
                                                <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
                                            </Segment>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Segment raised color='blue' style={{ width: '100%' }}>
                                            <Header as='h3' style={{ fontSize: '2em' }}>Important Links</Header>
                                            You will see important links here
                                        </Segment>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </div>
        )
    }
}