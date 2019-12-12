import React from "react";

const LIST_STYLE = {
  width: 300,
  height: 300,
  border: "1px solid #ddd",
  overflow: "auto"
};

const LIST_ITEM_STYLE = {
  padding: "1rem",
  borderBottom: "1px solid #ddd"
};

export default class ScrollingList extends React.Component {
  listRef = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.

    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef} style={LIST_STYLE}>
        {this.props.list.map(item => (
          <div key={item.id} style={LIST_ITEM_STYLE}>
            {item.id}: {item.text}
          </div>
        ))}
      </div>
    );
  }
}
