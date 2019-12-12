import React from "react";
import ScrollingList from "./components/ScrollList";
import faker from "faker";

const createItems = count =>
  Array(count)
    .fill()
    .map(() => ({
      id: faker.random.uuid(),
      text: faker.lorem.sentences()
    }));

// This component is just a test harness.
export default class AppScrollList extends React.Component {
  state = {
    list: createItems(10),
    width: "300px"
  };

  render() {
    return (
      <div>
        <button onClick={this.addToList}>Add items to list</button>
        <ScrollingList list={this.state.list} width={this.state.width} />
      </div>
    );
  }

  addToList = () => {
    this.setState(prevState => ({
      list: [...createItems(10), ...prevState.list]
    }));
  };
}
