import React, { Component } from 'react'
import {
    Button,
    Checkbox,
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
    Tab,Label,Modal,Form,Sticky
} from 'semantic-ui-react'
import ClassifiedsWidget from './classifieds/ClassifiedsWidget';
import AchievementWidget from './achievements/AchievementWidget';
import EventWidget from './events/EventWidget'
import SimpleSlider from './achievements/SimpleSlider';
export default class HomepageLayout extends Component {
    state = {
        activeItem : "none",
        openModal1: false,
        openModal2: false,
        openModal3:false,
        openModal4:false,
        openModal5: false,
        activeClassifiedItem:'none',
        classifiedsData : {
            category: '',
            purpose: '',
            brand:'',
            model: '',
            year: '',
            price:'',
            location: '',
            description: '',
            fileUpload: ''
        },
        personalDetails: {
            email: 'test@123.com',
            phone: '9876543210',
            acceptTnc : false
        },
        isFormValid: false,
        isFileUploadValid: false,
        isPersonalDetailsValid: false,
        isTnCChecked: false,
        imageSrc: undefined
    }
    panes = [
        { menuItem: 'Activities', render: () => <Tab.Pane attached={false}><EventWidget option="Activities"/></Tab.Pane> },
        { menuItem: 'Bithdays', render: () => <Tab.Pane attached={false}><EventWidget option="Bithdays"/></Tab.Pane> },
        { menuItem: 'Holidays', render: () => <Tab.Pane attached={false}><EventWidget option="Holidays"/></Tab.Pane> },
    ]

    optionsAll = [
        { key: 's', text: 'Sell', value: 'S' },
        { key: 'r', text: 'Rent', value: 'R' },
        { key: 'sh', text: 'Share', value: 'SH' }
    ]
    optionSell = [
        { key: 's', text: 'Sell', value: 'S' }
    ]

    initialize() {
        console.log('###############################inside')
        if( document.getElementById('location')){
            console.log("found##############################")
            var input = document.getElementById('location');
            var autocomplete = new google.maps.places.Autocomplete(input);
        }
    }


    handleClick = (e, { name }) => this.setState({ activeItem: name })
    handleClassifiedsClick= (e, { name }) => {
        var classifiedsData = this.state.classifiedsData;
        classifiedsData.category = name;
        this.setState({ activeClassifiedItem: name , classifiedsData : classifiedsData})
    }

    handleNewItemClick = (e) => this.setState({ openModal1: true,openModal2: false,  openModal3: false, openModal4:false})
    handleNextClick = (e, { name }) => {
        if(name === 'modal1next'){
            if(this.state.activeItem === 'Classifieds'){
                this.setState({ openModal2: false , openModal1: false, openModal3: true, openModal4:false, openModal5:false})
            } else{
                this.setState({ openModal2: true , openModal1: false, openModal3: false, openModal4:false, openModal5:false})
            }
        } else if(name === 'modal3next'){
            this.setState({ openModal2: false , openModal1: false, openModal3: false, openModal4: true, openModal5:false})
        } else if(name === 'modal4next'){
            this.setState({ openModal2: false , openModal1: false, openModal3: false, openModal4: false, openModal5: true})
        }

    }
    handleBackClick = (e, { name }) => {
        if(name === 'modal3back' || name ==='modal2back'){
            this.setState({ openModal2: false , openModal1: true, openModal3: false, activeClassifiedItem:'none', openModal5:false})
        } else if(name === 'modal4back'){
            this.setState({ openModal2: false , openModal1: false, openModal3: true, openModal4:false, openModal5:false})
        } else if(name === 'modal5back'){
            this.setState({ openModal2: false , openModal1: false, openModal3: false, openModal4:true, openModal5:false})
        }
    }

    handleFormChange = (e, { name, value }) => {
        const classifiedsData = this.state.classifiedsData;
        classifiedsData[name] = value;
        var isFormValid = true;
        var keys = Object.keys(classifiedsData);
        keys.forEach(function(field){
            if(classifiedsData[field] === "" && field !== 'fileUpload'){
                isFormValid = false;
            }
        })
        this.setState({classifiedsData, isFormValid});
    }

    handlePersonalDetailsChange = (e, { name, value }) => {
        const personalDetails = this.state.personalDetails;
        personalDetails[name] = value;
        var isPersonalDetailsValid = true;
        var keys = Object.keys(personalDetails);
        keys.forEach(function(field){
            if(field !== 'acceptTnc' && personalDetails[field] === ""){
                isPersonalDetailsValid = false;
            }
        })
        this.setState({personalDetails, isPersonalDetailsValid});
    }

    componentDidUpdate(prevProps, prevState){
        if(document.getElementById("image")){
            if(this.state.imageSrc){
                var reader = new FileReader();
                reader.onload = function (e) {
                    // get loaded data and render thumbnail.
                    document.getElementById("image").src = e.target.result;
                };
                // read the image file as a data URL.
                reader.readAsDataURL(this.state.imageSrc);
            } else {
                document.getElementById("image").src = "";
            }
        }
        if(this.state.openModal4 && !prevState.openModal4){
            var bangaloreBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(12.864162, 77.438610),
                new google.maps.LatLng(13.139807, 77.711895));
            var options = {
                bounds: bangaloreBounds,
                strictBounds: true,
                componentRestrictions: {country: "in"}
            };
            //google.maps.event.addDomListener(window, 'load', this.initialize);
            if( document.getElementById('location')){
                var input = document.getElementById('location');
                var autocomplete = new google.maps.places.Autocomplete(input, options);
            }
        }
    }

    close = () => this.setState({ openModal1: false, openModal2: false,activeItem : "none", openModal3: false, openModal4:false, openModal5:false, activeClassifiedItem:'none'})

    handleFileUpload = (e) => {
        var isFileUploadValid = true;
        var imageSrc;
        if(e.target.files[0]){
            const classifiedsData = this.state.classifiedsData;
            console.log('event.target.files', e.target.files[0], e.target.result)
            classifiedsData[e.target.name] = e.target.files[0];

            var reader = new FileReader();

            // reader.onload = function (e) {
            //     // get loaded data and render thumbnail.
            //     document.getElementById("image").src = e.target.result;
            // };
            imageSrc=e.target.files[0]
            // read the image file as a data URL.
            //reader.readAsDataURL(imageSrc);

            this.setState({classifiedsData, isFileUploadValid, imageSrc});
        } else {
            isFileUploadValid= false;
            //document.getElementById("image").src =""
            imageSrc=undefined
            this.setState({isFileUploadValid, imageSrc});
        }
    }

    handleCheckBox = (e) => {
        console.log('e.target.checked', e.target.checked)
        var personalDetails = this.state.personalDetails
        this.handlePersonalDetailsChange(undefined, {name :'email', value : personalDetails['email']})
        personalDetails.acceptTnc = e.target.checked;
        this.setState({isTnCChecked});
        var isTnCChecked = e.target.checked;
        this.setState({isTnCChecked});
    }

    handleFormSubmit = (e) => {
        var data = new FormData();
        var classifiedsInfo = this.state.classifiedsData;
        var keys = Object.keys(classifiedsInfo);
        keys.forEach(function(field){
            if(field === 'fileUpload'){
                console.log('inside if', data)
                data.append(field.toString(), classifiedsInfo[field], classifiedsInfo[field].name);
            } else {
                console.log('inside else', data)
                data.append(field.toString(), classifiedsInfo[field]);
            }
        })
        var personalDetails = this.state.personalDetails;
        var personalDetailKeys = Object.keys(personalDetails);
        personalDetailKeys.forEach(function(field){
            if(field !== 'acceptTnc'){
                data.append(field.toString(), personalDetails[field]);
            }
        })
        var handleItemClick = this.props.handleItemClick
        var xhr = new XMLHttpRequest();
        // Create a new XMLHttpRequest
        xhr.open('POST', 'insert-classifieds', true);
        // File Location, this is where the data will be posted
        xhr.send(data);
        xhr.onload = function () {
            // On Data send the following works
            if (xhr.status === 200) {
                console.log('success', xhr.response);
                handleItemClick(undefined, {name: "Classifieds"})
            } else {
                console.log('error')
            }
        };
    }

    handleContextRef = contextRef => this.setState({ contextRef })

    render() {
        const {activeItem, openModal1, openModal2, openModal3, openModal4, activeClassifiedItem, classifiedsData, openModal5 , isFormValid,
            isFileUploadValid, personalDetails, isPersonalDetailsValid, isTnCChecked, imageSrc, contextRef} = this.state;
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                <Grid container stackable verticalAlign='middle'>
                                    <Grid.Row>
                                        <a href="javascript:void(0);" onClick={this.handleNewItemClick}><Icon size="large" color="blue" name='add square' />Click here to add new item</a>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Segment raised color='blue' style={{ width: 'inherit' }}>
                                            <Header as='h3' style={{background: "white",border: "0rem" }} block>
                                                Recent Achievements
                                                <Button name="Achievements" onClick={this.props.handleItemClick} animated floated="right" primary>
                                                    <Button.Content visible>Explore achievements</Button.Content>
                                                    <Button.Content hidden>
                                                        <Icon name='right arrow' />
                                                    </Button.Content>
                                                </Button>
                                            </Header>
                                            <SimpleSlider/>
                                        </Segment>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Segment raised color='blue' style={{ width: 'inherit' }}>
                                            <Header as='h3' style={{background: "white",border: "0rem" }} block>
                                                Recent Classifieds
                                                <Button name="Classifieds" onClick={this.props.handleItemClick} animated floated="right" primary>
                                                    <Button.Content visible>Explore classifieds</Button.Content>
                                                    <Button.Content hidden>
                                                        <Icon name='right arrow' />
                                                    </Button.Content>
                                                </Button>
                                            </Header>
                                            <ClassifiedsWidget {...this.props}/>
                                        </Segment>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Sticky context={contextRef} offset={80}>
                                    <Grid container stackable verticalAlign='top'>
                                        <Grid.Row>
                                            <Segment raised color='blue' style={{ width: 'inherit' }}>
                                                <Header as='h3' style={{ fontSize: '2em' }}>Upcoming Events</Header>
                                                <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
                                            </Segment>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Segment raised color='blue' style={{ width: 'inherit' }}>
                                                <Header as='h3' style={{ fontSize: '2em' }}>Important Links</Header>
                                                You will see important links here
                                            </Segment>
                                        </Grid.Row>
                                    </Grid>
                                </Sticky>
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
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                            <Grid stackable>
                                <Grid.Row>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Select label='Purpose' name='purpose' value={classifiedsData.purpose} options={activeClassifiedItem === 'RealEstate' || activeClassifiedItem === 'Books' ?this.optionsAll :this.optionSell} onChange={this.handleFormChange} placeholder={activeClassifiedItem === 'RealEstate' || activeClassifiedItem === 'Books' ? 'Sell/Share/Rent' :'Sell'} required/>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input label='Brand' name='brand' value={classifiedsData.brand} onChange={this.handleFormChange} placeholder='Provide Brand name' required/>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input label='Model' name='model' value={classifiedsData.model} onChange={this.handleFormChange} placeholder='Provide Model name' required/>
                                    </Grid.Column>

                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input label='Year' name='year' value={classifiedsData.year} onChange={this.handleFormChange} placeholder='Provide year of purchase' required/>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input label='Area/Location' name='location' id='location' value={classifiedsData.location} onChange={this.handleFormChange} placeholder='Provide your location' required autoComplete="on"/>
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input label='Price' name='price' value={classifiedsData.price} onChange={this.handleFormChange} placeholder='Provide price details' required/>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                    <Grid.Column width={12}>
                                        <Form.TextArea label='Description' name='description' value={classifiedsData.description} onChange={this.handleFormChange} placeholder='Tell us more...' required/>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Field required>
                                            <label>Upload Image</label>
                                            <input type='file' accept=".png,.gif" name='fileUpload'  onChange={this.handleFileUpload} />
                                        </Form.Field>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <img id="image" style={{width: '200px'}} src={imageSrc}/>
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button name="modal4back" secondary onClick={this.handleBackClick}>
                            Back <Icon name='left chevron' />
                        </Button>
                        <Button name="modal4next" primary onClick={this.handleNextClick} disabled={!isFormValid || !isFileUploadValid}>
                            Next <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                </Modal>


                <Modal open={openModal5} closeOnEscape closeIcon closeOnRootNodeClick={false} onClose={this.close}>
                    <Modal.Header>Step 4<Icon name='angle double right' /> Confirm Your Personal Details</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Grid stackable>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form>
                                            <Form.Input label='Email' name='email' value={personalDetails.email} onChange={this.handlePersonalDetailsChange} placeholder='Provide your email id' required/>
                                            <Form.Input label='Contact Number' name='phone' value={personalDetails.phone} onChange={this.handlePersonalDetailsChange} placeholder='Provide your mobile number' required/>
                                            <Form.Field required>
                                                <input type="checkbox" name='acceptTnC' checked={personalDetails.acceptTnc} onChange={this.handleCheckBox}/>
                                                <label>I agree to the Terms and Conditions</label>
                                            </Form.Field>
                                        </Form>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button name="modal5back" secondary onClick={this.handleBackClick}>
                            Back <Icon name='left chevron' />
                        </Button>
                        <Button primary onClick={this.handleFormSubmit} disabled={!isPersonalDetailsValid || !isTnCChecked}>
                            Create
                        </Button>
                    </Modal.Actions>
                </Modal>

            </div>
        )
    }
}