import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment,Header,Modal } from 'semantic-ui-react'

const imgUrl = {"Standing Ovation":"images/standing_ovation.png","Star of the month":"images/employee_of_the_month.jpg"}
class SingleAchievementTile extends React.Component{
   constructor(props){
       super(props);
       this.state = { modalOpen: false ,modelData:{},awardDetail:{}}
       this.handleOpen = this.handleOpen.bind(this)
       this.handleClose = this.handleClose.bind(this)
   } 

  handleOpen(event){
       var awardDetail =this.props.data.filter(e => e.month === event.target.getAttribute("data"))[0]       
       var newData = awardDetail.winners.filter(e => e.name === event.target.innerText)[0]
       this.setState({ modalOpen: true,modelData:newData,awardDetail:awardDetail })
  } 
  

  handleClose = () => this.setState({ modalOpen: false })
  render(){
       var {data} = this.props
       var i=0;
        return(
            
              <div>
                <Modal
                    
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    size='small'
                    closeIcon
                >
                  
                    <Modal.Content image>
                        <Label as='a' color='green' attached="top right" tag>
                                    <Icon name='calendar' size='small' />{this.state.awardDetail.month}
                        </Label> 

                    <ImageComponent wrapped size='small' src={this.state.modelData.image} />
                    <Modal.Description>
                        <Header>{this.state.modelData.name}</Header>
                        <Label as='a' color="orange">
                            <Icon name='winner' />
                            {this.state.awardDetail.type} 
                         </Label> 
                         <br/><br/>
                        <span>{this.state.modelData.description}</span>
                    </Modal.Description>
                    
                    </Modal.Content>
                    
                </Modal>
                {data.map(e =>
               <Segment raised>  
                <Item.Group>
                    <Item>
                        <Item.Image size='small'  src={imgUrl[data[i++].type]}/> 
                        <Item.Content>
                            <Item.Header>{e.type}</Item.Header>
                            <Item.Meta>
                             
                                <Label as='a' color='green' attached="top right" tag>
                                    <Icon name='calendar' size='large' style={{margin:"0 0.5em 0 0"}}/>{e.month}
                                </Label> 
                               
                            </Item.Meta> 

                            <Item.Description >
                                <h4 style={{margin:"0"}}>Winners :-</h4>
                                {e.winners.map(element => <a id="achievementLink" data={e.month} onClick={this.handleOpen}>{element.name}</a>)}
                         </Item.Description> 
                            <Item.Extra>
                               <span className='price' style={{float:"left"}}>{e.postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
                               
                            </Item.Extra>
                        </Item.Content> 
                    </Item>
                </Item.Group> 
                </Segment>    
                )} 
           </div>
        )
    }
}

export default SingleAchievementTile

