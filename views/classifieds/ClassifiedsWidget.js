import React, { Component } from 'react'
import Slider from 'react-slick'
import {Dimmer,Loader} from 'semantic-ui-react'
import axios from 'axios'
import ClassiCards from './ClassiCards'
import data from './data'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    arrows:true
  };


export default class ClassifiedWidget extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : data,
            action:"normal"
        }
    }
    // componentWillMount(){
    //     this.renderTiles();
    // }
    // renderTiles(){
    //      var update = this.setState.bind(this)  
    //      axios.get('/get-classifieds')
    //      .then(function (response) {
    //      update({data:response.data.data,action:"normal"})
    //      })
    //      .catch(function (error) {
    //      console.log(error);
    //      });
 
    // }
  

  render(){
    if(this.state.action == "loader")
      return(
        <Dimmer active inverted>
        <Loader inverted inline='centered'  size='large'>Fetching Listing...</Loader>
      </Dimmer>
      )
    
    else
        return (
            <Slider {...settings}>
            <div ><ClassiCards second={this.state.data[1]} first={this.state.data[0]}/></div>
            <div ><ClassiCards  second={this.state.data[1]} first={this.state.data[0]}/></div>
            <div ><ClassiCards  second={this.state.data[1]} first={this.state.data[0]}/></div>
            </Slider>
        );
  }
}