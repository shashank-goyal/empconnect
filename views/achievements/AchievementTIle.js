import React, { Component } from 'react'
import SingleAchievementTile from './SingleAchievementTile'

export default class AchievementTile extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
      return(
          <div>
            <SingleAchievementTile {...this.props}/>
          </div> 
        )
    }
}