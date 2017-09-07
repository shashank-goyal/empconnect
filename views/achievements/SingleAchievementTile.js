import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment } from 'semantic-ui-react'

class SingleAchievementTile extends React.Component{
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
                            <Item.Header>{this.props.title}</Item.Header>
                            <Item.Meta>
                                <span className='price'>{this.props.type}</span> 
                                { !(this.props.group == 'rewards') ?
                                <Label as='a' color='green' attached="top right" tag>
                                    <Icon name='trophy' size='large' />    
                                        {this.props.rank}
                                </Label> 
                                : '' 
                                }
                            </Item.Meta> 

                            <Item.Description>
                                <span>{this.props.description}</span>
                            </Item.Description> 
                            <Item.Extra>
                                <span className='price' style={{float:"left"}}>{this.props.postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
                            </Item.Extra>
                        </Item.Content> 
                    </Item>
                </Item.Group>  
            </Segment>   
        )
    }
}

export default SingleAchievementTile