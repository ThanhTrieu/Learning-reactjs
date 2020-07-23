import React from 'react';
import Img from 'react-image';
import { Layout, Breadcrumb, Icon, Row, Col , Card, Button, message, Pagination } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

class ManFashion extends React.PureComponent {
  addProductToCart = (id) => {
    this.props.addCart(id);
    if(!this.props.loadingCart){
      message.success('add success', 2);
    }
  }
  goPageItems = (current, size) => {
    //console.log(current, size);
    this.props.loadData(current, size);
  }

  render() {
    return(
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Icon type="star" /></Breadcrumb.Item>
          <Breadcrumb.Item>Thời trang nam</Breadcrumb.Item>
          <Breadcrumb.Item>Bán chạy nhất</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Row gutter={16}>
            {this.props.lstData.map((item, i) => (
              <Col span={6} key={item.id}>
                <Card
                  hoverable
                  style={{ width: 240, marginTop: '20px' }}
                  cover={<Img alt={item.title} src={item.img} />}
                >
                  <Meta title={item.title} />
                  <p>{item.price}$</p>
                  <Button 
                    type="primary"
                    loading={this.props.loadingCart}
                    onClick={() => this.addProductToCart(item.id)}
                  >
                    <Icon type="shopping-cart" size="larg" />
                    Cart
                  </Button>
                  <Button type="danger" style={{marginLeft: "10px"}}>
                    <Icon type="pay-circle" />
                    Buy
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
          <Row type="flex" align="middle" style={{marginTop: '10px'}}>
            <Pagination defaultCurrent={1} total={this.props.totalItems} pageSize={this.props.pageSize} showTitle={true} onChange={this.goPageItems} />
          </Row>
        </Content>
      </>
    )
  }
}
export default ManFashion;