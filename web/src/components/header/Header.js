import React, { Component } from 'react';
import logo from './../../static/stephenA.jpg';
import basketball from './../../static/basketball.png';
import './../styleSheet/Header.css';

class Header extends Component {

  render() {
    const percent = this.props.percent.toString();
    const ratingText = percent < "50" ? "Below Average" : "Above Average";
    const nameBadge = <h1>{this.props.name}</h1>;
    const hotTakeCount = this.props.hotTakeCount;
    const predCount = this.props.predictionCount;

    return (
      <div className="Header">
        <img src={logo} className="Header-profile-photo" alt="logo" />
        <div className="Header-stats-title">
          <div className="Header-title">{nameBadge}</div>
          <div className="Header-rating">
            <Percent percent = {percent} />
            <div className="Header-rating-text">{ratingText}</div>
          </div>
          <div className="Token-container">
            <Token text={predCount} title="Prediction Count"/>
            <Token text={hotTakeCount} title="HotTake Count"/>
            <Token icon={basketball} title="Top Sport"/>
          </div>
        </div>

      </div>

    );
  }
}

class Percent extends Component {
  render() {
    const finalPercent = this.props.percent.toString();
    const baseDiameter = 31.831;
    const baseRadius = 15.9155;
    const piFrac = 2.0845;
    const diameter = "M 18 "+ piFrac+
      " a " + baseRadius*1 +" "+ baseRadius + " " + baseRadius + "0 0 1 0 " + baseDiameter+
      " a " + baseRadius*1 + " " +  baseRadius + " " + baseRadius + "0 0 1 0 " + -1*baseDiameter;
     console.log(diameter)
    return (
      <svg className="circular-chart" viewBox="0 0 36 36">
        <path
        className="circle"
        d={diameter}
        stroke-dasharray={finalPercent.concat(", 100")}
        />
        <text className="circle-text"x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{finalPercent}</text>
      </svg>
    );
  }
}

class Token extends Component {
  render(){
    const icon = this.props.icon;
    const text = this.props.text ? this.props.text : null;
    const title = this.props.title;
    return (
      <div>
        <div className="Token">
          {!text ? (
            <img className ="Token-img" src={icon} alt="Best sport icon" />
          ): (
            <div className="Token-text">{text}</div>
          )}
        </div>
        <div className="Token-title">{title}</div>
      </div>
    )
  }
}

export default Header;
