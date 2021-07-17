import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import waveOrange from '../assets/images/waveOrange.jpg'
import waveBlue from '../assets/images/waveBlue.jpg'
import waveGreen from '../assets/images/waveGreen.jpg'

const BgElement = Element.BgElement;

class Carousel extends React.Component {

  constructor() {
    super(...arguments);
    this.imgArray = [
      waveOrange, waveBlue, waveGreen
    ];
  }

  render(){
    return (
      <BannerAnim prefixCls="banner-user" type="acrossOverlay" autoPlay>
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Welcome To Surf Weasel
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Best Place to Find the Swell So You Can Shred the Gnar
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            This Website is still under contruction 
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            Please bare with us while we get everything built
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="2"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[2]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Surf Weasel is Currently in its first stages of developement
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            We are working fast to deliver a smooth experience so you cant spend more time surfing and less time on the computer
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}
export default Carousel;