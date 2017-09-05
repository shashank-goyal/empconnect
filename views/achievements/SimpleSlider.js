import React from 'react'
import Slider from 'react-slick'
import AchievementTile from './AchievementTile'
import SingleAchievementTile from './SingleAchievementTile'
import data from './data'
function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, background: 'cornflowerblue'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, background: 'cornflowerblue'}}
      onClick={onClick}
    ></div>
  );
}

class SimpleSlider extends React.Component {
  render () {
    var settings = {
      dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // autoplay: true
    };
    return (
      <div>
        <Slider  {...settings}>
          <div><SingleAchievementTile {...data[0]}/></div>
          <div><SingleAchievementTile {...data[1]}/></div>
          <div><SingleAchievementTile {...data[2]}/></div>
          <div><SingleAchievementTile {...data[3]}/></div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider