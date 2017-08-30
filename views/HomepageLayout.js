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
    Tab,Label,Modal
} from 'semantic-ui-react'
import _ from 'lodash'

export default class HomepageLayout extends Component {
    state = {activeItem : "none", openModal1: false, openModal2: false}
    panes = [
        { menuItem: 'Activities', render: () => <Tab.Pane attached={false}>Recent Activities</Tab.Pane> },
        { menuItem: 'Bithdays', render: () => <Tab.Pane attached={false}>Recent Bithdays</Tab.Pane> },
        { menuItem: 'Holidays', render: () => <Tab.Pane attached={false}>Recent Holidays</Tab.Pane> },
    ]

    handleClick = (e, { name }) => this.setState({ activeItem: name })
    handleNewItemClick = (e) => this.setState({ openModal1: true,openModal2: false })
    handleNextClick = (e) => this.setState({ openModal2: true , openModal1: false})
    handleBackClick = (e) => this.setState({ openModal2: false , openModal1: true})
    render() {
        const {activeItem, openModal1, openModal2} = this.state;
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Grid container stackable verticalAlign='middle'>
                                    <Grid.Row>
                                        <a href="javascript:void(0);" onClick={this.handleNewItemClick}><Icon size="large" color="blue" name='add square' />Click here to add new item</a>
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

                <Modal open={openModal1}>
                    <Modal.Header>Step 1: Select type</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Grid stackable centered>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <Button name="Events" toggle active={activeItem === "Events"} onClick={this.handleClick}>
                                            <span><Icon name='add to calendar' size='massive' /><br/><br/>Events</span>
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button name="Classifieds" toggle active={activeItem === "Classifieds"} onClick={this.handleClick}>
                                            <span><Icon name='shopping cart' size='massive' /><br/><br/>Classifieds</span>
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button name="Achievements" toggle active={activeItem === "Achievements"} onClick={this.handleClick}>
                                            <span><Icon name='trophy' size='massive' /><br/><br/>Achievements</span>
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary onClick={this.handleNextClick}>
                            Next <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Modal open={openModal2}>
                    <Modal.Header>Step 2: Add Details</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Grid stackable centered>
                                <Grid.Row>
                                    Form
                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button secondary onClick={this.handleBackClick}>
                            Back <Icon name='left chevron' />
                        </Button>
                        <Button primary>
                            Next <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                </Modal>

            </div>
        )
    }
}