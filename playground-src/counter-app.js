import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
        count: 0
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1 //prevState vs this.state? both do the same thing. 'this' can chnge based on context if not bound. Bigger: prevState is completely up-to-date in async programming. The reason is because using a callback, you can pass in the old state as an argument. Without prevState, there is nothing you're passing in, and it's going by the state currently - which is very recent but may not include the results from just-fired async requests.
      }
    });
  }
  handleSubtractOne() {
    this.setState(() => {
      return {
        count: this.state.count -1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  componentDidMount() {
    const count = JSON.parse(localStorage.getItem('count'));

    if (count) {
      this.setState(() => ({ count }));
    }
  };
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('count', JSON.stringify(this.state.count));
  };

  render(){
    return (
      <div>
        <h1> Count: {this.state.count}</h1>
        <button onClick = {this.handleAddOne}>+1</button>
        <button onClick = {this.handleSubtractOne}>-1</button>
        <button onClick = {this.handleReset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 5
}

ReactDOM.render(<Counter count = {2}/>, document.getElementById('app'));
