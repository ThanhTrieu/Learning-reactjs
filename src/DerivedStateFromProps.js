import React, { Component } from "react";
import { render } from "react-dom";

class MyComponent extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) =>  {
    console.log(nextProps.counter, prevState.counter);
    return nextProps.counter === prevState.counter
      ? null
      : { counter: nextProps.counter };
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    };
  }

  // OLD WAY OF DOING IT ;)
  //
  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.counter !== this.state.counter) {
  //     this.setState({
  //       counter: nextProps.counter
  //     });
  //   }
  // };

  handleClick = () => {
    console.log(this.state.counter);
    this.setState(prevState => ({
      counter: ++prevState.counter
    }));
  }

  render() {
    console.log(this.state.counter);
    return(
    <div>
      <p>The counter in MyComponent is {this.state.counter}</p>
      <p>The button will increase the counter only inside MyComponent.</p>
      <button onClick={this.handleClick}>Press me!</button>
    </div>
  )}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () =>
    this.setState(prevState => ({
      counter: ++prevState.counter
    }));

  render() {
    return(
    <div>
      <p>The counter in App is {this.state.counter}</p>
      <p>
        The button below will increase the counter in both App as well as in
        MyComponent.
      </p>
      <button onClick={this.handleClick}>Press me!</button>
      <MyComponent {...this.state} />
    </div>
  )};
}

export default App;
