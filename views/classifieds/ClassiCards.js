import React from 'react'
import { Card, Icon,Label } from 'semantic-ui-react'

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
    
      var {image,title,brand,model,price,location} = this.props.first
      var {image1,title1,brand1,model1,price1,location1} = this.props.second 
      var loc = <Label as='a'>
                  <Icon name='location arrow' />
                  {location} 
                 </Label>  
      var loc1 = <Label as='a'>
      <Icon name='location arrow' />
      {location1} 
    </Label>  
   return(
   <div style={{width:"220px"}}>   
    <Card.Group>
    <Card
      image={image}
      header={title}
      meta={brand}
      description={price}
      extra={loc}
     />
     <Card
      image={image1}
      header={title1}
      meta={brand1}
      description={price1}
      extra={loc1}
     />
     </Card.Group>
    </div>
    )
  
  }
}

