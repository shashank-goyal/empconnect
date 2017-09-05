import React, { Component } from 'react'
import SingleClassifiedTile from './SingleClassifiedTile'

export default class ClassifiedTile extends React.Component{
    
    constructor(props){
        super(props);

    }
    
    render(){
        
    if(this.props.data.length > 0)  
    return(
          <div>
              {this.props.data.map( (e,i) => <SingleClassifiedTile key={i} {...e}/>)}
          </div> 
        )
     else 
        return(
            <div>
                <p>No listings found...</p>
            </div>
        )   
    }
}