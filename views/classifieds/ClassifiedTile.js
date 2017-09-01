import React, { Component } from 'react'
import SingleClassifiedTile from './SingleClassifiedTile'

export default class ClassifiedTile extends React.Component{
    
    constructor(props){
        super(props);

    }
    
    render(){
        var sortList = this.props.data.sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp))
      return(
          <div>
              {sortList.map( (e,i) => <SingleClassifiedTile key={i} {...e}/>)}
          </div> 
        )
    }
}