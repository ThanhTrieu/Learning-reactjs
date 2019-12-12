import React from 'react';
import { log } from './utils/myLogger';

const styles = {
  marginLeft: '20px',
}


class TestLifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <button counts={this.props.count} onClick={this.props.upcounter}> Increment</button>
      </div>
    );
  }
}


class TestLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    //log('constructor - first run');
    this.state = {count: 0, up: 0, down: 0};
  }

  static getDerivedStateFromProps(props, state) {
    log(`getDerivedStateFromProps - run`);
    log(props.counts);
    log(state.count);

    if (state.count !== props.counts) {
      log(`getDerivedStateFromProps - working`);
      return {
        count: props.counts,
        // up: 1,
        // down: 1
      }
    }
    return null;
  }

  upCounter = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    //log(`render - run`);
    return(
      <div>
        <p>{this.state.count}</p>
        <TestLifeCycleDemo counts={this.state.count} upcounter={this.upCounter} />
        {/* <button counts={this.state.count} onClick={this.upCounter}> Increment</button> */}
        <button style={styles}> Decrement</button>
      </div>
    );
  }
}


export default TestLifeCycle;