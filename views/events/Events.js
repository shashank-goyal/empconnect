/*import React, { Component } from 'react'
import axios from "axios";
import EventTile from './EventTile'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,Dropdown,
    Tab,Label
} from 'semantic-ui-react'

export default class Events extends Component {

    constructor(props){
        super(props);
        //debugger
        this.state = {eventsList:[],action:"loader"}
        this.getEvents = this.getEvents.bind(this);
    }

    componentWillMount(){
        this.getEvents();
    }

    getEvents(){
        var update = this.setState.bind(this)
        console.log("inside events");
        axios.get("/events").then(rsp =>{
        console.log("response data >>>>>>>",rsp.data);
        update({eventsList:rsp.data.message,action:"data"})
         }).catch(e => e);
    }

    render() {
        return (

            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                        <Grid.Row id="clasifiedTile">
                            <Grid.Column width={2}>
                       </Grid.Column>
                       <Grid.Column width={12}>
                         {this.state.action != "loader"? <EventTile data={this.state.eventsList}/>:<div></div>}
                        </Grid.Column>    
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}*/


import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,Dropdown,
    Tab,Label,Input,Dimmer,Loader
} from 'semantic-ui-react'

import axios from "axios";
import EventTile from './EventTile'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Events extends Component{
   constructor(props){
       super(props);

        this.state = {activeItem:"all",data:[],action:"loader",res:[],startDate: moment()}
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
   }
   componentWillMount(){
       this.renderTiles();
   }
   renderTiles(){
        var update = this.setState.bind(this)  
        axios.get('/events')
        .then(function (response) {
            //update({eventsList:rsp.data.message,action:"data"})
        update({data:response.data.message,action:"normal",rsp:response.data.message})

        })
        .catch(function (error) {
        console.log(error);
        });
   }
   handleItemClick(e, { name }) {
    var newData;   
    if(name == "all"){
        this.setState({action:"loader"}) 
        this.renderTiles();
    }
    else{
      newData = this.state.rsp.filter(e => {
           return e.eventCategory == name
      })
       this.setState({ activeItem: name,
                             data:newData
                             })}
    }

    handleChange(date) {
        var CalenderData;
        CalenderData = this.state.rsp.filter(e => {
            return new Date(e.dateOfEvent).toDateString() == new Date(date._d).toDateString()
        })
        this.setState({
            data: CalenderData
        });    
    }
    

    render() {
        //var activeItem = this.state.activeItem;
        var {action,activeItem} = this.state
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                    <Grid.Row id="clasifiedTile">
                      <Grid.Column width={4}>
                      <Menu pointing secondary vertical>
                        <Menu.Item>
                        Home

                        <Menu.Menu>
                        <Menu.Item name='all' active={activeItem === 'all'} onClick={this.handleItemClick}>
                            All Listing
                        </Menu.Item>
                        </Menu.Menu>
                        </Menu.Item>
                          <Menu.Item name='Activities' active={activeItem === 'Activities'} onClick={this.handleItemClick}>
                        <Icon name='checked calendar' />
                        Activities
                        </Menu.Item>
                        <Menu.Item name='HR Events' active={activeItem === 'HR Events'} onClick={this.handleItemClick}>
                        <Icon name='group' />
                        HR Events
                        </Menu.Item>
                        <Menu.Item name='Birthday Events' active={activeItem === 'Birthday Events'} onClick={this.handleItemClick}>
                        <Icon name='birthday' />
                        Birthday Events
                        </Menu.Item>
                        <Menu.Item >
                        <DatePicker
                            inline
                            selected={this.state.startDate}
                            onChange={this.handleChange}/>
                            {/*<DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />*/}
                        </Menu.Item>
                    </Menu>
                 </Grid.Column>
                 <Grid.Column width={12}>
                {this.state.action != "loader"? <EventTile data={this.state.data}/>:<div></div>}
                 </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>
        )
    }
}