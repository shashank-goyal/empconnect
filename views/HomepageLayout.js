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
    Tab,Label,Modal,Form
} from 'semantic-ui-react'
import _ from 'lodash'

export default class HomepageLayout extends Component {
    state = {activeItem : "none", openModal1: false, openModal2: false, openModal3:false,openModal4:false, activeClassifiedItem:'none'}
    panes = [
        { menuItem: 'Activities', render: () => <Tab.Pane attached={false}>Recent Activities</Tab.Pane> },
        { menuItem: 'Bithdays', render: () => <Tab.Pane attached={false}>Recent Bithdays</Tab.Pane> },
        { menuItem: 'Holidays', render: () => <Tab.Pane attached={false}>Recent Holidays</Tab.Pane> },
    ]

    options = [
        { key: 's', text: 'Sell', value: 'sell' },
        { key: 'r', text: 'Rent', value: 'rent' },
        { key: 'sh', text: 'Share', value: 'share' }
    ]

    handleClick = (e, { name }) => this.setState({ activeItem: name })
    handleClassifiedsClick= (e, { name }) => this.setState({ activeClassifiedItem: name })
    handleNewItemClick = (e) => this.setState({ openModal1: true,openModal2: false,  openModal3: false, openModal4:false})
    handleNextClick = (e, { name }) => {
        console.log('next name', name)
        if(name === 'modal1next'){
            if(this.state.activeItem === 'Classifieds'){
                this.setState({ openModal2: false , openModal1: false, openModal3: true, openModal4:false})
            } else{
                this.setState({ openModal2: true , openModal1: false, openModal3: false, openModal4:false})
            }
        } else if(name === 'modal3next'){
            this.setState({ openModal2: false , openModal1: false, openModal3: false, openModal4: true})
        }

    }
    handleBackClick = (e, { name }) => {
        console.log('back name', name , this.state)
        if(name === 'modal3back' || name ==='modal2back'){
            this.setState({ openModal2: false , openModal1: true, openModal3: false, activeClassifiedItem:'none'})
        } else if(name === 'modal4back'){
            console.log('inside else if')
            this.setState({ openModal2: false , openModal1: false, openModal3: true, openModal4:false})
        }

    }
    close = () => this.setState({ openModal1: false, openModal2: false,activeItem : "none", openModal3: false, openModal4:false, activeClassifiedItem:'none'})
    render() {
        const {activeItem, openModal1, openModal2, openModal3, openModal4, activeClassifiedItem } = this.state;
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

                <Modal open={openModal1} closeOnEscape closeIcon closeOnRootNodeClick={false} onClose={this.close}>
                    <Modal.Header>Step 1<Icon name='angle double right' /> Select type</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Grid stackable centered>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <Button name="Classifieds" toggle active={activeItem === "Classifieds"} onClick={this.handleClick}>
                                            <span><Icon name='newspaper' size='massive' /><br/><br/>Classifieds</span>
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button name="Events" toggle active={activeItem === "Events"} onClick={this.handleClick}>
                                            <span><Icon name='add to calendar' size='massive' /><br/><br/>Events</span>
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
                        <Button secondary onClick={this.close}>
                            Cancel
                        </Button>
                        <Button name="modal1next" primary onClick={this.handleNextClick} disabled={activeItem === 'none'}>
                            Next <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Modal open={openModal2} closeOnEscape closeIcon closeOnRootNodeClick={false} onClose={this.close}>
                    <Modal.Header>Step 2<Icon name='angle double right' /> Provide {activeItem} Details</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Grid stackable centered>
                                <Grid.Row>
                                    {activeItem} Form
                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button name="modal2back" secondary onClick={this.handleBackClick}>
                            Back <Icon name='left chevron' />
                        </Button>
                        <Button primary>
                            Create
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Modal open={openModal3} closeOnEscape closeIcon closeOnRootNodeClick={false} onClose={this.close}>
                    <Modal.Header>Step 2<Icon name='angle double right' /> Select Category</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Grid stackable centered>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <Button name="TwoWheelers" toggle active={activeClassifiedItem === "TwoWheelers"} onClick={this.handleClassifiedsClick}>
                                            <span><Icon name='motorcycle' size='massive' /><br/><br/>2 Wheelers</span>
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button name="FourWheelers" toggle active={activeClassifiedItem === "FourWheelers"} onClick={this.handleClassifiedsClick}>
                                            <span><Icon name='car' size='massive' /><br/><br/>4 Wheelers</span>
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button name="RealEstate" toggle active={activeClassifiedItem === "RealEstate"} onClick={this.handleClassifiedsClick}>
                                            <span><Icon name='building' size='massive' /><br/><br/>Real Estate</span>
                                        </Button>
                                    </Grid.Column>

                                </Grid.Row>

                            </Grid>
                            <Grid stackable centered>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <Button name="Electronics" toggle active={activeClassifiedItem === "Electronics"} onClick={this.handleClassifiedsClick}>
                                            <span><Icon name='laptop' size='massive' /><br/><br/>Electronics</span>
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button name="HomeAppliances" toggle active={activeClassifiedItem === "HomeAppliances"} onClick={this.handleClassifiedsClick}>
                                            <span><Icon name='cocktail' size='massive' /><br/><br/>Home Appliances</span>
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Button name="Books" toggle active={activeClassifiedItem === "Books"} onClick={this.handleClassifiedsClick}>
                                            <span><Icon name='book' size='massive' /><br/><br/>Books</span>
                                        </Button>
                                    </Grid.Column>

                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button name="modal3back" secondary onClick={this.handleBackClick}>
                            Back <Icon name='left chevron' />
                        </Button>
                        <Button name="modal3next" primary onClick={this.handleNextClick} disabled={activeClassifiedItem === 'none'}>
                            Next <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Modal open={openModal4} closeOnEscape closeIcon closeOnRootNodeClick={false} onClose={this.close}>
                    <Modal.Header>Step 3<Icon name='angle double right' /> Provide {activeClassifiedItem} Details</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Grid stackable>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form>
                                            <Form.Select label='Purpose' options={this.options} placeholder='Buy/Sell/Share' required/>
                                            <Form.Input label='Brand/Model' placeholder='Provide Brand/Model name' />
                                            <Form.Input label='Year' placeholder='Provide year of purchase' />
                                            <Form.TextArea label='Description' placeholder='Tell us more...' />
                                            <Form.Checkbox label='I agree to the Terms and Conditions' />
                                            <Form.Button>Submit</Form.Button>
                                        </Form>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button name="modal4back" secondary onClick={this.handleBackClick}>
                            Back <Icon name='left chevron' />
                        </Button>
                        <Button primary>
                            Create
                        </Button>
                    </Modal.Actions>
                </Modal>

            </div>
        )
    }
}