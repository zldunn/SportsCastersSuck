import React, { Component } from 'react';
import CommentatorView from './views/CommentatorView';
import CommentatorDetails from './header/CommentatorDetails';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <CommentatorDetails />
            </div>
          )}/>
          <Route exact={true} path='/caster/:id' render={(props) => (
            <div className="App">
            {console.log(props)}
              <CommentatorView id={props.match.params.id} />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
