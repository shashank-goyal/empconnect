import React, { Component } from 'react'
import SingleEventTile from './SingleEventTile'
import { Message } from 'semantic-ui-react'

export default class EventTile extends React.Component{
    
    constructor(props){
        super(props);
    }

   render(){
    if(this.props.data.length > 0)  
    return(
          <div>
              {this.props.data.map( (e,i) => <SingleEventTile key={i} {...e}/>)}
          </div> 
        )
     else 
        return(
            <div>
                 <Message negative>
                        <Message.Header>We're sorry! , {this.props.FurtureDate!="Please Select Future Dates or No events are available on this date"?"No Events Found for this Category or date":"Please Select Future Dates"}</Message.Header>
                </Message>
                <p></p>
            </div>
        )   
    }
}