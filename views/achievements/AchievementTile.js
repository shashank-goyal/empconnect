import React, { Component } from 'react'
import SingleAchievementTile from './SingleAchievementTile'
import SingleSportTile from './SingleSportTile'
export default class AchievementTile extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            so:[],
            sm:[],
            sports:[],
            action:""
        }
        this.renderTiles = this.renderTiles.bind(this)

    }
    componentWillMount(){
      this.renderTiles(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.renderTiles(nextProps)
    }
    renderTiles(props){
       
        var so,sm,sports;
        var update = this.setState.bind(this)
        if(props.name == "home"){
         so = props.data.filter(e => e.type === "Standing Ovation").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp)).slice(0,1)        
         sm = props.data.filter(e =>e.type==="Star of the month").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp)).slice(0,1)
         sports = props.data.filter(e =>e.group==="sports" || e.group==="cultural").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp))
         console.log("sports==>>",sports)
        
         update({so:so,sm:sm,sports:sports,action:"home"})
        }
        else{
            so = props.data.filter(e => e.type === "Standing Ovation" || e.type==="Star of the month").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp))        
            
            sports = props.data.filter(e =>e.group==="sports" || e.group==="cultural").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp))
            update({so:so,sm:[],sports:sports,action:""})
        }
    }

    render(){
    
       if(this.state.action === "home") 
        return(
            <div>
                <SingleAchievementTile data={this.state.so}/>
                <br/>
                <SingleAchievementTile data={this.state.sm}/>
                <br/>
                <SingleSportTile data={this.state.sports}/>
            </div> 
            )
       else
        return (
        <div>
            {this.state.so.length >0?<SingleAchievementTile data={this.state.so}/>:<SingleSportTile data={this.state.sports}/>}
        </div> 
       )     
    }
}