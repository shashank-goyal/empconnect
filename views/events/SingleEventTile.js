import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment } from 'semantic-ui-react'

//const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

  

class SingleEventTile extends React.Component{
   constructor(props){
       super(props);    
       this.state = {
           modalOpen:false
       }
       this.toggleDescription = this.toggleDescription.bind(this);
       this.handleOpen = this.handleOpen.bind(this)
       this.handleClose = this.handleClose.bind(this)
   } 

   toggleDescription(event){    
       var toggle = event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[2].style.display;
       
       event.target.parentElement.parentElement.getElementsByTagName("button")[0].innerText = toggle == "none" ||toggle == ""? "Less <<":"More >>"
       event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("ui small image")[0].style.width = toggle == "none"|| toggle == ""?"300px":"150px"      
       event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[2].style.display = toggle == "none" ||toggle == ""?"table":"none";
   
    }
    handleOpen = () => this.setState({ modalOpen: true })
    
    handleClose = () => this.setState({ modalOpen: false })
  render(){
        return(
      <Segment raised>
        <Item.Group>
            <Item>
            <Item.Image size='small'  src={this.props.image}/>
            <Item.Content>
                <Item.Header>{this.props.eventTitle}</Item.Header>
                <Item.Meta>
                <span className='price'><Icon name='marker' />{this.props.location}  </span>
                <span className='stay'><a href={this.props.eventLink} target="_blank"><Icon name='linkify' /><Label as='a' color='blue' tag>Click here to view details</Label></a></span>
                <Label as='a' color='green' attached="top right" tag>   
                    <Icon name='calendar' /> {new Date(this.props.dateOfEvent).toDateString()}
                </Label>
                </Item.Meta>
                
                <Item.Description>
                <p>{this.props.eventSubCategory}</p>    
                <span id="toggleVisible">{this.props.Description}</span>
                </Item.Description>     
                <Item.Extra>
                <Button secondary size='mini' onClick={this.toggleDescription}  floated='right'>
                More >> 
                </Button>
                </Item.Extra>
            </Item.Content>
            </Item>

        
        </Item.Group>
       </Segment> 
        )
        }
    }

export default SingleEventTile