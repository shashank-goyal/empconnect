import React, { Component } from 'react'

import { Feed,Modal,Button,Icon } from 'semantic-ui-react'
import data from "./data"
import SingleEventTile from './SingleEventTile'

export default class EventWidget extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            eventData:[],
            data:data,
            modalOpen:false,
            modelData:{}
        }
        this.filterData = this.filterData.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    componentWillMount(){
      this.filterData(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.filterData(nextProps)
    }
    filterData(props){
        
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
    else if(props.option == "Birthdays"){
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
    else if(props.option == "Holidays"){
          filterData = this.state.data.filter(e => e.eventSubCategory == "Holiday" && (new Date(e.dateOfEvent)-new Date()) > 0 ).sort((a,b) => new Date(a.dateOfEvent)-new Date(b.dateOfEvent)).slice(0);
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
    }
    handleOpen(event){
       var newData =  this.state.data.filter(e => e.eventTitle === event.target.innerText)[0]
     this.setState({ modalOpen: true,modelData:newData })
    }
    handleClose = () => this.setState({ modalOpen: false })
   render(){
       
      return(
        <div style={{ "height": "193px","overflow": "auto"}}>  
        <Modal
        
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        {/* <Header icon='browser' content='Cookies policy' /> */}
        <Modal.Content>
         <SingleEventTile {...this.state.modelData}/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close' /> Close
          </Button>
        </Modal.Actions>
      </Modal>  
        <Feed>
        {this.state.eventData.map(e =>
        <Feed.Event>
          <Feed.Label image={e.image} />
          <Feed.Content>
            <Feed.Date content={e.dateOfEvent} />
            <Feed.Summary>
             <a onClick={this.handleOpen} >{e.eventTitle}</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        )}
      </Feed>
      </div>
      ) 
      
    }
}