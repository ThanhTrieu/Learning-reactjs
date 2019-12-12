import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchMovie extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <Search 
          placeholder="search movie ... " 
          onSearch={name => this.props.onClick(name)} 
          enterButton
        />
      </>
    );
  }
}

export default SearchMovie;