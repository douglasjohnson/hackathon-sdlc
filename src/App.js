import React from 'react';
import './App.css';
import {TextField} from "@material-ui/core";

class App extends React.Component {

  fizzBuzz = (value) => {
    let output;
    if (this.isFizz(value) && this.isBuzz(value)) {
      output = 'FizzBuzz';
    } else if (this.isFizz(value)) {
      output = 'Fizz';
    } else if (this.isBuzz(value)) {
      output = 'Buzz';
    } else {
      output = value;
    }
    return output;
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  isFizz = (value) => {
    return value % 3 === 0;
  };

  isBuzz = (value) => {
    return value % 5 === 0;
  };

  onChange = (event) => {
    this.setState({
      value: this.fizzBuzz(event.target.value)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">FizzBuzz</header>
        <TextField id="input" variant="filled" type="number" label="FizzBuzz?" onChange={this.onChange}/>
        <TextField id="output" variant="outlined" readOnly={true} value={this.state.value}/>
      </div>
    )
  };
}

export default App;
