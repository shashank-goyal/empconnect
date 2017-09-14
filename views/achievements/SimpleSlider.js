import React from 'react'
import Slider from 'react-slick'
import AchievementTile from './AchievementTile'
import SingleAchievementTile from './SingleAchievementTile'
import SingleSportTile from './SingleSportTile'
import data from './data'
import {Button,Icon} from 'semantic-ui-react'

// function SampleNextArrow(props) {
//   const {className, style, onClick} = props
//   return (
//     <div
//       className={className}
//       style={{...style, background: 'cornflowerblue'}}
//       onClick={onClick}
//     ></div>
//   );
// }

// function SamplePrevArrow(props) {
//   const {className, style, onClick} = props
//   return (
//     <div
//       className={className}
//       style={{...style, background: 'cornflowerblue'}}
//       onClick={onClick}
//     ></div>
//   );
// }

class SimpleSlider extends React.Component {

  constructor(props){
        super(props)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }
  
  next(){
   this.slider.slickNext()
  }
  prev(){
    this.slider.slickPrev()
  }

  render () {
    var so,sm,sports,cultural;
    so = data.filter(e => e.type === "Standing Ovation").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp)).slice(0,1)        
    sm = data.filter(e =>e.type==="Star of the month").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp)).slice(0,1)
    sports = data.filter(e =>e.group==="sports").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp)).slice(0,1)
    cultural = data.filter(e =>e.group==="cultural").sort((a,b) => new Date(b.postTimestamp)-new Date(a.postTimestamp)).slice(0,1)
    var settings = {
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
        arrows: false
    };

    return (
      <div>
        <Slider  {...settings} ref={c => this.slider = c }>
           <div className="homeSlide"><SingleAchievementTile data={so}/></div>
           <div className="homeSlide"><SingleAchievementTile data={sm}/></div> 
           <div className="homeSlide"><SingleSportTile data={sports}/></div>  
           <div className="homeSlide"><SingleSportTile data={cultural}/></div> 
        </Slider>
            <div style={{textAlign: 'center'}}>
              <Button circular size="mini" secondary onClick={this.prev}><Icon name='chevron left' inverted/></Button>
              <Button circular size="mini" secondary onClick={this.next}><Icon name='chevron right' inverted/></Button>
           </div>
      </div>
    );
  }
}

export default SimpleSlider