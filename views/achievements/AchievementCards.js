import React from 'react'
import { Card, Icon,Label,Image,Segment,Modal,Button } from 'semantic-ui-react'
import SingleAchievementTile from './SingleAchievementTile'

const extra = (
  <a>
    <Icon  name='location arrow' />
    16 Friends
  </a>
)

export default class AchievementCards extends React.Component{ 
  constructor(props){
      super(props)
      // debugger
      this.state = {
        modalOpen: false 
      }
      this.handleOpen = this.handleOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
  }  
  handleOpen = () => this.setState({ modalOpen: true })
  
  handleClose = () => this.setState({ modalOpen: false })
  render(){
    
      // var {image,category,title,brand,model,price,location} = this.props
      
     var {title,group,image,type,postTimestamp} = this.props
    
   return(
   <div style={{width:"225px"}}>   
    <Modal
        
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        {/* <Header icon='browser' content='Cookies policy' /> */}
        <Modal.Content>
         <SingleAchievementTile {...this.props}/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    <Card onClick={this.handleOpen}>
      <Card.Content>
        <Image  size="medium" src={image} style ={{width :'150px'}}/>
        <Card.Header>
          <br></br>
          {title}
        </Card.Header>
        <Card.Meta>
            <span className='price'>{type}</span>
            <br/>
            <span className='price' style={{float:"bottom left"}}>{this.props.postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
            { !(this.props.group == 'rewards') ?
              <Label as='a' color='green' attached="top right" tag>
                  <Icon name='trophy' size='large' />    
                       {this.props.rank} 
              </Label> 
              : '' 
            }
        </Card.Meta>
        
        <Card.Description>

        
           
            
        </Card.Description>
      </Card.Content>
    </Card> 
    
   </div>
    )
  
  }
}

