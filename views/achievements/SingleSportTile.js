import React from 'react'
import { Image as ImageComponent, Item,Label,Button,Icon,Segment,Header,Modal } from 'semantic-ui-react'

const imgUrl = {"Table Tennis":"images/table_tennis.jpg","Cricket":"images/cricket_icon.svg","Badminton":"images/badminton.png","Singing":"images/singing.jpg","Dancing":"images/dance.jpg"}
export default class SingleSportTile extends React.Component{
  constructor(props){
      super(props);
  }
  
  
  render(){
      var {data} = this.props
      return(
          <div>
          {
              data.map(e =>    
              <Segment raised>
                <Item.Group>
                    <Item>
                        <Item.Image size='small'  src={imgUrl[e.type]}/> 
                        <Item.Content>
                            <Item.Header>{e.type}</Item.Header>
                            <Item.Meta>
                             
                                <Label as='a' color='green' attached="top right" tag>
                                    <Icon name='winner' size='large' style={{margin:"0 0.5em 0 0"}}/>{e.subType}
                                </Label> 
                               
                            </Item.Meta> 

                            <Item.Description >
                                <h4 style={{margin:"0"}}>Winners :-</h4>
                               <br/> 
                              <div>
                                <Label id="achievementLink" as='a' image>
                                <img src='images/gold.svg' />
                                {e.winners.filter(e => e.rank == "1")[0].name}
                                
                                </Label>
                                <Label id="achievementLink" as='a' image>
                                <img src='images/silver.svg' />
                                {e.winners.filter(e => e.rank == "2")[0].name}
                                
                                </Label>
                                <Label id="achievementLink" as='a' image>
                                <img src='images/bronze.svg' />
                                {e.winners.filter(e => e.rank == "3")[0].name}
                                
                                </Label>
                            </div>
                                
                            </Item.Description> 
                            <Item.Extra>
                               <span className='price' style={{float:"left"}}>{e.postTimestamp.split(" ").slice(1,3).reverse().join(" ")}</span>
                            </Item.Extra>
                        </Item.Content> 
                    </Item>
                </Item.Group>  
                </Segment>   
              )
             }
            </div>
           
      )
  }

}