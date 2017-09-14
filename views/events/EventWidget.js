import React, { Component } from 'react'

import { Feed } from 'semantic-ui-react'
import data from "./data"

export default class EventWidget extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            eventData:[],
            data:data
        }
        this.filterData = this.filterData.bind(this)
    }
    componentWillMount(){
      this.filterData(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.filterData(nextProps)
    }
    filterData(props){
        debugger
      var oneDay = 24*60*60*1000,diffDays;  
      var filterData = []
      var update = this.setState.bind(this)
      var outData = []
    
      if(props.option == "Activities"){

        filterData = this.state.data.filter(e => e.eventSubCategory != "Birthday" && (new Date(e.dateOfEvent)-new Date()) > 0 ).sort((a,b) => new Date(a.dateOfEvent)-new Date(b.dateOfEvent)).slice(0);
        
        filterData.forEach(function(e){
            diffDays = Math.round(Math.abs((new Date(e.dateOfEvent) - new Date())/(oneDay)));
            var element = {}
            element["image"] = e.image
            element["eventTitle"] = e.eventTitle
            if(diffDays == 0)
                element["dateOfEvent"]="Today"
            else if(diffDays == 1)
                element["dateOfEvent"] = "Tomorrow"
            else
                element["dateOfEvent"] = e.dateOfEvent.split(" ").slice(1,3).reverse().join(" ");
            outData.push(element)
        })
        update({eventData:outData})
    }
    else if(props.option == "Bithdays"){
        filterData = this.state.data.filter(e => e.eventSubCategory == "Birthday" && (new Date(e.dateOfEvent)-new Date()) > 0 ).sort((a,b) => new Date(a.dateOfEvent)-new Date(b.dateOfEvent)).slice(0);
        filterData.forEach(function(e){
            diffDays = Math.round(Math.abs((new Date(e.dateOfEvent) - new Date())/(oneDay)));
            var element = {}
            element["image"] = e.image
            element["eventTitle"] = e.eventTitle
            if(diffDays == 0)
                element["dateOfEvent"]="Today"
            else if(diffDays == 1)
                element["dateOfEvent"] = "Tomorrow"
            else
                element["dateOfEvent"] = e.dateOfEvent.split(" ").slice(1,3).reverse().join(" ");
            outData.push(element)
        })
        
        update({eventData:outData})
    }
    else
        update({eventData:outData})  
      
    }
   render(){
       
      return(
        <div style={{ "height": "193px","overflow": "auto"}}>  
        <Feed>
        {this.state.eventData.map(e =>
        <Feed.Event>
          <Feed.Label image={e.image} />
          <Feed.Content>
            <Feed.Date content={e.dateOfEvent} />
            <Feed.Summary>
             <a>{e.eventTitle}</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        )}
      </Feed>
      </div>
      ) 
      
    }
}