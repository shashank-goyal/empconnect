import React from 'react'
import { Card, Icon,Label,Image,Segment } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon  name='location arrow' />
    16 Friends
  </a>
)

export default class ClassiCards extends React.Component{ 
  constructor(props){
      super(props)
  }  
  render(){
    
      var {image,category,title,brand,model,price,location} = this.props
      
      
    
   return(
   <div style={{width:"195px",height:"350px"}}>   
    
    <Card>
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

