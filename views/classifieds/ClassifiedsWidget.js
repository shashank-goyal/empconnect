import React, { Component } from 'react'
import Slider from 'react-slick'
import {Dimmer,Loader,Button,Icon} from 'semantic-ui-react'
import axios from 'axios'
import ClassiCards from './ClassiCards'
import data from './data'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default class ClassifiedWidget extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : data,
            action:"normal"
        }
          this.next = this.next.bind(this)
          this.prev = this.prev.bind(this)
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
  next(){
   this.slider.slickNext()
  }
  prev(){
    this.slider.slickPrev()
  }
  render(){

  var settings = {
    
    speed: 500,
    slidesToShow: 3,
    
    slidesToScroll: 1,
   
    focusOnSelect	:true,
    draggable:true
    
    
  };

    if(this.state.action == "loader")
      return(
        <Dimmer active inverted>
        <Loader inverted inline='centered'  size='large'>Fetching Listing...</Loader>
      </Dimmer>
      )
    
    else
        return (
          <div>
           
            <Slider {...settings} ref={c => this.slider = c }>
             {this.state.data.map((e,i) => <div ><ClassiCards key={i} {...e} {...this.props}/></div>)} 
           </Slider>
           <br/>
           <div style={{textAlign: 'center'}}>
              <Button circular size="mini" secondary onClick={this.prev}><Icon name='chevron left' inverted/></Button>
              <Button circular size="mini" secondary onClick={this.next}><Icon name='chevron right' inverted/></Button>
           </div>
          </div>       
          );
  }
}