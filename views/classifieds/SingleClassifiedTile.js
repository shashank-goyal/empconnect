import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment,Modal,Header } from 'semantic-ui-react'

//const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />



class SingleClassifiedTile extends React.Component{
   constructor(props){
       super(props);
       this.state = {
        visible: false
       }
       this.handleOpen = this.handleOpen.bind(this)
       this.handleClose = this.handleClose.bind(this)
       this.handleOpenSmall = this.handleOpenSmall.bind(this)
       this.handleCloseSmall = this.handleCloseSmall.bind(this)
       this.toggleDescription = this.toggleDescription.bind(this);
       this.requestDetails = this.requestDetails.bind(this)
   } 
//    componentWillRecieveProps(){
//      this.setState({action:false});
//      this.setState({action:true});
//    }
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
    requestDetails(){
      this.setState({modalOpen:false,modalOpenSmall:true})
    }
    componentWillReceiveProps(){
        
        
    }
    
  render(){
     // var action = this.state.action;
     var purpose = {SH:"For sharing",R:"For Rent"}
    return(
      
         
      <Segment raised>
              <Modal
                
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'>
                <Header icon='address card' content='Request contact details' />
                <Modal.Content>
                <h3 >Your details is also shared with seller</h3>
                </Modal.Content>
                <Modal.Actions>
                <Button color='green' onClick={this.requestDetails} inverted>
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
                basic
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
                    <Label as='a' color="orange">
                    <Icon name='location arrow' />
                    {this.props.location} 
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
                    Get contact details
                    
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