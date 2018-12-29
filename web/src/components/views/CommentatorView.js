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
      topSport: "basketball"
    }
  }

  render() {
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
