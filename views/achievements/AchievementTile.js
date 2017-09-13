import React, { Component } from 'react'
import SingleAchievementTile from './SingleAchievementTile'

export default class AchievementTile extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            so:[],
            sm:[],
            sports:[],
            action:""
        }

    }
    componentWillMount(){
        
        var allMonths = ['January','February','March', 'April','May','June','July','August','September','October','November','December'];
        var so,sm,sports;
        var update = this.setState.bind(this)
        if(this.props.name == "home"){
         so = this.props.data.filter(e => e.type === "Standing Ovation")        
         sm = this.props.data.filter(e =>e.type==="Star of the month")
         sports = this.props.data.filter(e =>e.type==="sports")
         //sorting
         so = so.sort(function(a,b){
            return allMonths.indexOf(a.month) > allMonths.indexOf(b.month);
         });
         sm = sm.sort(function(a,b){
            return allMonths.indexOf(a.month) > allMonths.indexOf(b.month);
         });
         sports = sports.sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp))
         update({so:so,sm:sm,sports:sports,action:"home"})
        }
    }
    
    render(){
        
      return(
          <div>
            <SingleAchievementTile data={this.state.so.slice(0,1)}/>
            <SingleAchievementTile data={this.state.sm.slice(0,1)}/>
            
          </div> 
        )
    }
}