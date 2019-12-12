import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: true,
      countOfClicks: 0
    };
    this.pickRandom = this.pickRandom.bind(this);
  }
  
  pickRandom() {
    this.setState({
      value: Math.random() > 0.5, // randomly picks true or false
      countOfClicks: this.state.countOfClicks + 1
    });
  }
  
  // comment out the below to re-render on every click
  shouldComponentUpdate(nextProps, nextState) {
    // cho phep update lai giao dien hay ko ?
    // neu tra ve false ko cho update giao dien
    return this.state.value != nextState.value;
  }
  
  render() {
    return (
      <div>
        shouldComponentUpdate demo 
        <p><b>{this.state.value.toString()}</b></p>
        <p>Count of clicks: <b>{this.state.countOfClicks}</b></p>
        <button onClick={this.pickRandom}>
          Click to randomly select: true or false
        </button>
      </div>
    );
  }
}

export default App;