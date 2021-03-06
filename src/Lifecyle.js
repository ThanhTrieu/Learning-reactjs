import React from "react";
import { log } from "./utils/myLogger";

const styles = {
  childBorder: {
    borderStyle: "dotted",
    borderColor: "blue",
    margin: "0.4em"
  }
};

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    log("Constructor from Child");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // ban chat la can thay doi state bang prpops truoc khi render view.
    // han che dung
    log("getDerivedStateFromProps from Child");
    log(nextProps);
    log(prevState);
    //log(this.props);
    //log("getDerivedStateFromProps from Child --- the second");
    //return null; //{count: nextProps.count};
    if(nextProps.count !== prevState.count){
      return { count: nextProps.count};
    }
    else return null;
  }

  componentDidMount() {
    log("componentDidMount from Child");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    log("componentWillUnmount from Child");
  }

  shouldComponentUpdate(nextProps, nextState) {
    log("shouldComponentUpdate from Child");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    log("getSnapshotBeforeUpdate from Child");
    return null;
  }
  render() {
    log("render from Child");
    return (
      <div style={styles.childBorder}>
        <h4>Child Component - {this.state.count}</h4>
        <div>
          <button onClick={this.updateCount}>Update Child Component</button>
        </div>
      </div>
    );
  }

  updateCount = () => {
    log("----------- Update Child component------------------");
    this.setState(state => ({ count: state.count + 1 }));
  };
}
export default Hello;
