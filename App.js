import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    Person: [
      {
        name: 'Cool'
      }
    ]
  };
  eventHandler = event => {
    this.setState({
      Person: [
        {
          name: event.target.value
        }
      ]
    });
  };
  render() {
    return (
      <div className='App'>
        <UserOutput userName={this.state.Person[0].name}></UserOutput>
        <UserInput changed={this.eventHandler}></UserInput>
      </div>
    );
  }
}

export default App;
