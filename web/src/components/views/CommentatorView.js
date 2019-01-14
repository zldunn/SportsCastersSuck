import React, { Component } from 'react';
import Header from './../header/Header';
import Details from './../header/CommentatorDetails';

const baseURL = "http://localhost:5000/caster/";

class CommentatorView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: 23,
      name: "Constructor",
      hotTakeCount: 23,
      predictionCount: 23,
      topSport: "basketball",
      isLoaded: false,
      itmes: null
    }
  }

  componentDidMount() {
   fetch(baseURL.concat(this.props.id))
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           name: result.name,
           percent: result.percent,
           hotTakeCount: result.hotTakeCount,
           topSport: result.topSport,
           predictionCount: result.predictionCount
         });
       },
       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       (error) => {
         this.setState({
           percent: 55,
           name: "API Error",
           hotTakeCount: 12,
           predictionCount: 1,
           topSport: "basketball",
           isLoaded: false,
           itmes: null
         });
       }
     )
 }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <Header
          percent={this.state.percent}
          name={this.state.name}
          hotTakeCount={this.state.hotTakeCount}
          predictionCount={this.state.predictionCount}
          topSport={this.state.topSport}
          id = {this.state.id}
        />
        <Details />
      </div>
    )
  }
}

export default CommentatorView;
