import React, { Component } from 'react'
import SingleClassifiedTile from './SingleClassifiedTile'

export default class ClassifiedTile extends React.Component{
    
    constructor(props){
        super(props);

    }
    
    render(){
      return(
          <div>
              {this.props.data.map( (e,i) => <SingleClassifiedTile key={i} {...e}/>)}
          </div> 
        )
    }
}