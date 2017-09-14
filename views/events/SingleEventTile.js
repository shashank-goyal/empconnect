import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment } from 'semantic-ui-react'

//const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

  

class SingleEventTile extends React.Component{
   constructor(props){
       super(props);    
       this.toggleDescription = this.toggleDescription.bind(this);
   } 

   toggleDescription(event){    
       var toggle = event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[2].style.display;
       
       event.target.parentElement.parentElement.getElementsByTagName("button")[0].innerText = toggle == "none" ||toggle == ""? "Less <<":"More >>"
       event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("ui small image")[0].style.width = toggle == "none"|| toggle == ""?"300px":"150px"      
       event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[2].style.display = toggle == "none" ||toggle == ""?"table":"none";
   
    }

  render(){
        return(
      <Segment raised>
        <Item.Group>
            <Item>
            <Item.Image size='small'  src={this.props.image}/>
            <Item.Content>
                <Item.Header>{this.props.eventTitle}</Item.Header>
                <Item.Meta>
                <span className='price'>{this.props.location}</span>
                <span className='stay'><a href={this.props.eventLink}>{this.props.eventLink}</a></span>
                <Label as='a' color='green' attached="top right" tag>   
                    {this.props.dateOfEvent}
                </Label>
                {/*<Label as='a' color='teal' ribbon='top right'>{this.props.dateOfEvent}</Label>*/}
                
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