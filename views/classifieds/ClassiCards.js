import React from 'react'
import { Card, Icon,Label,Image,Segment,Modal,Button } from 'semantic-ui-react'
import SingleClassifiedTile from './SingleClassifiedTile'

const extra = (
  <a>
    <Icon  name='location arrow' />
    16 Friends
  </a>
)

export default class ClassiCards extends React.Component{ 
  constructor(props){
      super(props)
      this.state = {
        modalOpen: false 
      }
      this.handleOpen = this.handleOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
  }  
  handleOpen = () => this.setState({ modalOpen: true })
  
  handleClose = () => this.setState({ modalOpen: false })
  render(){
    
      var {image,category,title,brand,model,price,location} = this.props
      
      
    
   return(
   <div>
    <Modal
        
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        {/* <Header icon='browser' content='Cookies policy' /> */}
        <Modal.Content>
         <SingleClassifiedTile {...this.props}/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    <Card onClick={this.handleOpen}>
      <Card.Content>
        <Image  size="medium" src={image}/>
        <Card.Header>
          <br></br>
          {title}
        </Card.Header>
        <Card.Meta>
            <span className='price'>{category} >> </span>
            <span className='stay'>{brand} >> </span> 
            <span className='stay'>{model}</span>
            <Label as='a' color='orange' attached="bottom right" tag>
            <Icon name='rupee' />    
                {price}
            </Label>
        </Card.Meta>
        
        
        <Card.Description>

        
           
            
        </Card.Description>
      </Card.Content>
    </Card> 
    
   </div>
    )
  
  }
}

