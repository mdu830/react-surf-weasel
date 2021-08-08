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

  render() {
    return (
      <BannerAnim prefixCls="banner-user" type="acrossOverlay" autoPlay duration="1000">
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
            <div className="carouselText">
              Welcome To Surf Weasel
            </div>
          </TweenOne>
          <TweenOne className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            <div className="carouselText">
              The Best Place to Find the Swell So You Can Shred the Gnar
            </div>
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
            <div className="carouselText">
              This Website is Still Under Construction
            </div>
          </TweenOne>
          <TweenOne className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            <div className="carouselText">
              The surf report is in beta with no search options yet. We Still setting up our camera API
            </div>
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
            <div className="carouselText">
              Currently Optimized for most mobile devices and desktop
            </div>
          </TweenOne>
          <TweenOne className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            <div className="carouselText">
              We are still making the mobile experience smooth for everyone.
            </div>
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}
export default Carousel;