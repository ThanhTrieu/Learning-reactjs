import React from 'react';
import { Layout} from 'antd';

import ManFashion from '../components/home/ManFashion';
import WomanFashion from '../components/home/WomanFashion';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Layout style={{ padding: '0 24px 24px' }}>
        <ManFashion />
        <WomanFashion />
      </Layout>
    )
  }
}
