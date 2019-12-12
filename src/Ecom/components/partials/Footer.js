import React from 'react';
import { Layout } from 'antd';

const {  Footer } = Layout;

export default class FooterEcom extends React.PureComponent {  
  render() {
    return(
      <Layout>
        <Footer style={{ background: "#0771CF", height: "calc(50vh - 55px)" }}>
        </Footer>
      </Layout>
    );
  }
}