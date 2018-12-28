import React, { Component } from 'react';
import logo from './stephenA.jpg';
import basketball from './basketball.png';
import './Header.css';



class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: this.props.percent,
      name: this.props.name
    }
  }

  render() {
    const percent = this.state.percent.toString();
    const rating_text = percent < "50" ? "Below Average" : "Above Average";
    const nameBadge = props => <h1>{this.state.name}</h1>;

    return (
      <div className="Header">
        <img src={logo} className="Header-profile-photo" alt="logo" />
        <div className="Header-stats-title">
          <div className="Header-title"><h1>Stephen A Smith</h1></div>
          <div className="Header-rating">
            <Percent percent = "60" />
            <div className="Header-rating-text">{rating_text}</div>
          </div>
          <div className="Token-container">
            <Token text="111" title="Prediction Count"/>
            <Token text="69" title="HotTake Count"/>
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
    const base_diameter = 31.831;
    const base_radius = 15.9155;
    const pi_frac = 2.0845;
    const size = 0.25;
    const diameter = "M 18 "+ pi_frac+
      " a " + base_radius*1 +" "+ base_radius + " " + base_radius + "0 0 1 0 " + base_diameter+
      " a " + base_radius*1 + " " +  base_radius + " " + base_radius + "0 0 1 0 " + -1*base_diameter;
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
            <img className ="Token-img" src={icon} />
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
