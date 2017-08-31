import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment } from 'semantic-ui-react'

//const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

  

class SingleClassifiedTile extends React.Component{
   constructor(props){
       super(props);
       this.toggleDescription = this.toggleDescription.bind(this);
   } 
   toggleDescription(event){
       var toggle = event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[3].style.display;
       
       event.target.parentElement.parentElement.getElementsByTagName("button")[0].innerText = toggle == "none" ||toggle == ""? "Less <<":"More >>"
       event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("ui small image")[0].style.width = toggle == "none"|| toggle == ""?"300px":"150px"      
       event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[3].style.display = toggle == "none" ||toggle == ""?"table":"none";
   
    }
  render(){
        return(
      <Segment raised>
              
        <Item.Group>
            <Item>
            <Item.Image size='small'  src={this.props.image}/>
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
                    {this.props.purpose=="S"?<Label as='a' tag>{this.props.year} Model</Label>:<div></div>}
                    <Label as='a'>
                    <Icon name='location arrow' />
                    {this.props.location} 
                    </Label>    
               </div>  
               <br></br> 
                <span id="toggleVisible">{this.props.description}

                </span>
               </Item.Description> 
                <Item.Extra>
                <Button secondary size='mini' onClick={this.toggleDescription}  floated='right'>
                More >> 
                </Button>
                <Button secondary size='mini' >
                <Icon name='phone' />
                    Get contact details
                    
                </Button>
                <span className='price'>{this.props.postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
                </Item.Extra>
            </Item.Content>
            </Item>

        
        </Item.Group>
       </Segment> 
        )
        }
    }

export default SingleClassifiedTile