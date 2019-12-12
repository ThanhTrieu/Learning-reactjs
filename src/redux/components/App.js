import React from 'react';
import { Row, Col } from 'antd';
import SearchMovies  from '../containers/Search';
import ListMovies from '../containers/ListMovies';

class AppRedux extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <Row style={{marginTop: '2em'}}>
          <Col span={12} offset={6}>
            <SearchMovies />
            <br /><br />
            <ListMovies />
          </Col>
        </Row>
      </>
    );
  }
}

export default AppRedux;