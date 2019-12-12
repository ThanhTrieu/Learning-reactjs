import React from 'react';
import { List, Avatar, Skeleton } from 'antd';

class ListMovies extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      { this.props.isLoading  ? (
          <Skeleton 
            active 
            avatar 
            paragraph={{ rows: 4 }} 
          />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={this.props.movies}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />}
                  title={<a href="#">{item.title}</a>}
                  description={item.overview}
                />
              </List.Item>
            )}
          />
        )
      }
      </>
    );
  }
}

export default ListMovies;