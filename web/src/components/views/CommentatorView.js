import React, { Component } from 'react';
import Header from './../header/Header';
import Details from './../header/CommentatorDetails';

class CommentatorView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: 55,
      name: "Stephen A Smith",
      hotTakeCount: 12,
      predictionCount: 1,
      topSport: "basketball",
      isLoaded: false,
      itmes: null
    }
  }

  componentDidMount() {
    console.log("mounted")
   fetch("http://localhost:5000/sc/stepheb")
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
           name: "Stephen A Smith",
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
        />
        <Details />
      </div>
    )
  }
}

export default CommentatorView;
