import React, { Component } from 'react'
import SingleAchievementTile from './SingleAchievementTile'

export default class AchievementTile extends React.Component{
    
    constructor(props){
        super(props);

    }
    
    render(){
      return(
          <div>
              {this.props.data.map( (e,i) => <SingleAchievementTile key={i} {...e}/>)}
          </div> 
        )
    }
}