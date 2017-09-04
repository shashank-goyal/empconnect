import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment,Transition } from 'semantic-ui-react'

//const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

const transitions = [
    'scale',
    'fade', 'fade up', 'fade down', 'fade left', 'fade right',
    'horizontal flip', 'vertical flip',
    'drop',
    'fly left', 'fly right', 'fly up', 'fly down',
    'swing left', 'swing right', 'swing up', 'swing down',
    'browse', 'browse right',
    'slide down', 'slide up', 'slide right',
  ]

class SingleClassifiedTile extends React.Component{
   constructor(props){
       super(props);
       this.state = {
        animation: transitions[0], duration: 500, visible: false
       }
       this.toggleDescription = this.toggleDescription.bind(this);
   } 
//    componentWillRecieveProps(){
//      this.setState({action:false});
//      this.setState({action:true});
//    }
   toggleDescription(event){

       //var toggle = event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[3].style.display;
       var toggle = this.state.visible;
       event.target.parentElement.parentElement.getElementsByTagName("button")[0].innerText = !toggle ? "Less <<":"More >>"
      // event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("ui small image")[0].style.width = !toggle ?"300px":"150px"      
       this.setState({ visible: !this.state.visible });
   
    }
    componentWillReceiveProps(){
        this.setState({visible:false})
    }
    
  render(){
     // var action = this.state.action;
    return(
      
         
      <Segment raised>
              
        <Item.Group>
            <Item>
            <Transition.Group animation={this.state.animation} duration={this.state.duration}>    
             {this.state.visible&&<Item.Image size="medium" src={this.props.image}/>}
            </Transition.Group>
               
             {!this.state.visible?<Item.Image size="small"  src={this.props.image}/>:<div></div>}
            
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
               <Transition.Group animation={this.state.animation} duration={this.state.duration}>
                        {this.state.visible && <span >{this.props.description}</span>}
               </Transition.Group>
                 
               </Item.Description> 
                <Item.Extra>
                <Button secondary size='mini' onClick={this.toggleDescription}  floated='right'>
                More >> 
                </Button>
                
                <span className='price' style={{float:"left"}}>{this.props.postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
                <Button secondary size='mini' floated='right'>
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