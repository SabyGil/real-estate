import React, { Component} from 'react';
import ReactDOM from 'react-dom';
// import Home from './Home';

class App extends Component {
  constructor () {
    super()
    this.state = {
      // name: 'Joe'
    }
  }
  render () {
    return (
    <div className='home'>
      <Home />
    </div>
    );
  }
}

export default App;
// const app = document.getElementById('app')
//
// ReactDOM.render(<Layout />, app)
