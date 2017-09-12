import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment,Header,Modal } from 'semantic-ui-react'

class SingleAchievementTile extends React.Component{
   constructor(props){
       super(props);
       this.state = { modalOpen: false ,modelData:{}}
       this.handleOpen = this.handleOpen.bind(this)
       this.handleClose = this.handleClose.bind(this)
       
    //    this.toggleDescription = this.toggleDescription.bind(this);
   } 
//    toggleDescription(event){
//        var toggle = event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[2].style.display;
       
//        event.target.parentElement.parentElement.getElementsByTagName("button")[0].innerText = toggle == "none" ||toggle == ""? "Less <<":"More >>"
//        event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("ui small image")[0].style.width = toggle == "none"|| toggle == ""?"300px":"150px"      
//        event.target.parentElement.parentElement.parentElement.getElementsByTagName("span")[2].style.display = toggle == "none" ||toggle == ""?"table":"none";
   
//     }
  handleOpen(event){
       var newData = this.props.data.filter(e => e.name === event.target.innerText)[0]
       this.setState({ modalOpen: true,modelData:newData })
  } 
  

  handleClose = () => this.setState({ modalOpen: false })
  render(){
       var data = this.props.data.filter( e => e.type == "Standing Ovation" && e.month === "July")
        return(
            <Segment raised>
                <Modal
                    
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    size='small'
                    closeIcon
                >
                  
                    <Modal.Content image>
                        <Label as='a' color='green' attached="top right" tag>
                                    <Icon name='calendar' size='small' />{this.state.modelData.month}
                        </Label> 

                    <ImageComponent wrapped size='small' src={this.state.modelData.image} />
                    <Modal.Description>
                        <Header>{this.state.modelData.name}</Header>
                        <Label as='a' color="orange">
                            <Icon name='winner' />
                            {this.state.modelData.type} 
                         </Label> 
                         <br/><br/>
                        <span>{this.state.modelData.description}</span>
                    </Modal.Description>
                    
                    </Modal.Content>
                    
                </Modal>
                <Item.Group>
                    <Item>
                        <Item.Image size='small'  src="images/standing_ovation.png"/> 
                        <Item.Content>
                            <Item.Header>{data[0].type}</Item.Header>
                            <Item.Meta>
                             
                                <Label as='a' color='green' attached="top right" tag>
                                    <Icon name='calendar' size='large' style={{margin:"0 0.5em 0 0"}}/>{data[0].month}
                                </Label> 
                               
                            </Item.Meta> 

                            <Item.Description >
                                <h4 style={{margin:"0"}}>Winners :-</h4>
                                {data.map(e => <a id="achievementLink" onClick={this.handleOpen}>{e.name}</a>)}
                                
                              
                                

                                
                            </Item.Description> 
                            <Item.Extra>
                               <span className='price' style={{float:"left"}}>{data[0].postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
                               <Button secondary size='mini' onClick={this.toggleDescription}   floated='right'>Details</Button>
                            </Item.Extra>
                        </Item.Content> 
                    </Item>
                </Item.Group>  
            </Segment>   
        )
    }
}

export default SingleAchievementTile

