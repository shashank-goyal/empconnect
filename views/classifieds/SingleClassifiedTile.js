import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment,Modal,Header,Message,Form } from 'semantic-ui-react'
import axios from 'axios'
class SingleClassifiedTile extends React.Component{
   constructor(props){
       super(props);
       this.state = {
        visible: false,
        contactData:{
            email:"",
            phone:"",
           
            contactFlag:false
        },
        acceptTnC:false,
        formError:false,
        formLoading:false,
        errorText:""
        
       }
       this.handleOpen = this.handleOpen.bind(this)
       this.handleClose = this.handleClose.bind(this)
       this.handleOpenSmall = this.handleOpenSmall.bind(this)
       this.handleCloseSmall = this.handleCloseSmall.bind(this)
       this.toggleDescription = this.toggleDescription.bind(this);
       this.requestDetails = this.requestDetails.bind(this)
       this.handleContactData = this.handleContactData.bind(this);
       this.handleCheckBox = this.handleCheckBox.bind(this);
       this.validateEmail = this.validateEmail.bind(this)
       this.phonenumber = this.phonenumber.bind(this)
   } 
  handleContactData(e,{name,value}){
      debugger
      const {contactData,acceptTnC} = this.state;
      contactData[name] = value;
      contactData.contactFlag = true;
      var keys = Object.keys(contactData);
      for(var i=0;i<keys.length-1;++i){
          if(contactData[keys[i]]== "")
            contactData.contactFlag = false
      }
      if(contactData.contactFlag && !acceptTnC)
        contactData.contactFlag = false

       this.setState({contactData});
  }
  handleCheckBox(e){
      debugger
    const contactData = this.state.contactData; 
   contactData.contactFlag = true;
    var keys = Object.keys(contactData);
    for(var i=0;i<keys.length-1;++i){
        if(contactData[keys[i]]== "")
          contactData.contactFlag = false
    }
    if(contactData.contactFlag && !e.target.checked)
        contactData.contactFlag = false
    this.setState({contactData,acceptTnC:e.target.checked})
  }
  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  handleOpenSmall = () => this.setState({ modalOpenSmall: true })
  
  handleCloseSmall = () => this.setState({ modalOpenSmall: false })
   toggleDescription(event){
       
       var toggle = event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[3].style.display;
      // var toggle = this.state.visible;
       event.target.parentElement.parentElement.getElementsByTagName("button")[0].innerText = toggle==""||toggle=="none" ? "Less <<":"More >>"
       event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("ui small image")[0].style.width = toggle==""||toggle=="none"  ?"300px":"150px"      
       event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[3].style.display = toggle==""||toggle=="none" ? "table":"none"
       //this.setState({ visible: !this.state.visible });
   
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    phonenumber(inputtxt) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneno.test(inputtxt)
    }
    requestDetails(){
        var {contactData} = this.state
        var update = this.setState.bind(this)
        var {title} = this.props
       if(!this.validateEmail(contactData.email)){
          update({errorText:"Enter Valid Email",formError:true}) 
       }
       else if(!this.phonenumber(contactData.phone)){
           update({errorText:"Enter Valid Phone Number",formError:true})
       }
       else{
           update({formError:false,formLoading:true,errorText:""})
           axios.post('/mail', {
                email:contactData.email,
                title:title,
                phone:contactData.phone
            })
            .then(function (response) {
                var contactData = {
                    email:"",
                    phone:"",
                    contactFlag:false
                    
                }

                update({formLoading:false,contactData,acceptTnC:false,modalOpen:false,modalOpenSmall:true})
            })
            .catch(function (error) {
                console.log(error);
            });

       }
    }
    componentWillReceiveProps(){
        
        
    }
    
  render(){
     //find City name 
     const {contactData,acceptTnC,formError,formLoading,errorText} = this.state 
      var {location}  =this.props;
      var array = location.split(",");
      if(array.length == 1)
        location = array[0]
      else{
         var i = array.indexOf(" Bengaluru")
         if(i = -1 || i == 0)
            location = array[0]
         else
            location = array[i-1]
      }
     // var action = this.state.action;
     var purpose = {SH:"For sharing",R:"For Rent"}
    return(
      
         
      <Segment raised>
              <Modal
                
                open={this.state.modalOpen}
                onClose={this.handleClose}
                
                size='small'>
                <Header icon='address card' content='Request contact details' />
                <Modal.Content>
                <Message >
                  Enter Your Contact Details
                </Message>
                <Form error={formError} loading={formLoading}>
                    <Form.Input label='Email' name='email' value={contactData.email}  onChange={this.handleContactData} placeholder='Provide your email id' required/>
                    <Form.Input label='Contact Number' name='phone' value={contactData.phone} onChange={this.handleContactData}  placeholder='Provide your mobile number' required/>
                    <Form.Field required>
                        <input type="checkbox" onChange={this.handleCheckBox}/>
                        <label>I agree to the Terms and Conditions</label>
                    </Form.Field>
                    <Message
                    error
                    header={errorText}
                
                    />
                </Form>
 
                </Modal.Content>
                <Modal.Actions>
                <Button color='green' onClick={this.requestDetails} inverted disabled={!contactData.contactFlag}>
                    <Icon name='phone' /> Request Details
                </Button>    
                <Button color='red' onClick={this.handleClose} inverted>
                    <Icon name='close' />Close
                </Button>
                </Modal.Actions>
            </Modal>
            <Modal
                
                open={this.state.modalOpenSmall}
                onClose={this.handleCloseSmall}
                
                size='small'>
                
                <Modal.Content>
                <h3 >Your request has been sent successfully</h3>
                </Modal.Content>
                <Modal.Actions>
                   
                <Button color='red' onClick={this.handleCloseSmall} inverted>
                    <Icon name='close' />Close
                </Button>
                </Modal.Actions>
            </Modal>
        <Item.Group>
            <Item>
            
               
             <Item.Image size="small"  src={this.props.image}/>
            
            <Item.Content>
                <Item.Header>{this.props.title}</Item.Header>
                <Item.Meta>
                <span className='price'>{this.props.category} >> </span>
                <span className='stay'>{this.props.brand} >> </span> 
                <span className='stay'>{this.props.model}</span>
                <Label as='a' color='green' attached="top right" tag>
                <Icon name='rupee' />    
                    {this.props.price}
                </Label>
                </Item.Meta>
                
                <Item.Description>
                <div>    
                    {this.props.purpose=="S"?<Label as='a' color="orange" tag>{this.props.year} Model</Label>:<Label as='a' color="orange" tag>{purpose[this.props.purpose]}</Label>}
                    <Label as='a' color="blue">
                    <Icon name='location arrow' />
                    {location} 
                    </Label>    
               </div>  
               <br></br> 
               
                       <span id="toggleVisible">{this.props.description}</span>
               
                 
               </Item.Description> 
                <Item.Extra>
                <Button secondary size='mini' onClick={this.toggleDescription}  floated='right'>
                More >> 
                </Button>
                
                <span className='price' style={{float:"left"}}>{this.props.postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
                <Button secondary size='mini' floated='right' onClick={this.handleOpen}>
                <Icon name='phone' />
                    Contact
                    
                </Button>
                </Item.Extra>
            </Item.Content>
            </Item>

        
        </Item.Group>
       </Segment>
       
      )
        }
    }

export default SingleClassifiedTile