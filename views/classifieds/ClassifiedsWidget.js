import React, { Component } from 'react'
import Slider from 'react-slick'
import {Dimmer,Loader,Button} from 'semantic-ui-react'
import axios from 'axios'
import ClassiCards from './ClassiCards'
import data from './data'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
 const {className, style, onClick} = props
 return (
  <button
    id="next"
     className={className}
     style={{...style}}
     onClick={onClick}
   ></button>
 );
}

function SamplePrevArrow(props) {
 const {className, style, onClick} = props
 return (
    <button
    id="next"
     className={className}
     style={{...style}}
     onClick={onClick}
   ></button>
 );
}

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

  var settings = {
    autoplay:true,
    autoplaySpeed:100,
    pauseOnHover:true,
    speed: 500,
    slidesToShow: 3,
    centerMode:true,
    slidesToScroll: 1,
    arrows:true,
    centerPadding:"60px",
    focusOnSelect	:true,
    draggable:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };

    if(this.state.action == "loader")
      return(
        <Dimmer active inverted>
        <Loader inverted inline='centered'  size='large'>Fetching Listing...</Loader>
      </Dimmer>
      )
    
    else
        return (
            <Slider {...settings}>
             {this.state.data.map((e,i) => <div ><ClassiCards key={i} {...e}/></div>)} 
           </Slider>
        );
  }
}