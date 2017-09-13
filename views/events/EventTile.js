import React, { Component } from 'react'
import SingleEventTile from './SingleEventTile'

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
                <p>No Events Found for this Category or date</p>
            </div>
        )   
    }
}