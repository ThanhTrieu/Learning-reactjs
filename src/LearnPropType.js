import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ListViewMovie = (props) => {
  console.log(props);

  return(
    <div></div>
  )
}

class DemoPropType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameMovie: '',
      movies: [],
      loading: false
    };
    this.getDataMovies = this.getDataMovies.bind(this);
  }

  async getDataMovies (keyword) {
    this.setState({loading: true});

    await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716`,{
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': true,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      this.setState(state => ({
        movies: res.data,
        loading: false
      }));
    })
    .catch(error => console.log(error));
  }

  changeInput = (event) => {
    let name = event.target.value;
    if(name.length > 0){
      this.setState(state => ({
        nameMovie: name
      }));
    }
  }

  render() {
    return(
      <div>
        <input 
          value={this.state.nameMovie} 
          onChange={this.changeInput}
        />

        <button onClick={() => this.getDataMovies(this.state.nameMovie)}>get data</button>
        {this.state.loading ? <p>Loading ...</p> : null}
        <br />
        <ListViewMovie listMovies={this.state.movies}  />
      </div>
    );
  }
}

DemoPropType.defaultProps = {
  value: '',
  listMovies: []
}

DemoPropType.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  listMovies: PropTypes.arrayOf(
    PropTypes.shape({
      page: PropTypes.number,
      total_results: PropTypes.number,
      total_pages: PropTypes.number,
      results: PropTypes.arrayOf(
        PropTypes.shape({
          popularity: PropTypes.number,
          vote_count: PropTypes.number,
          video: PropTypes.bool,
          backdrop_path: PropTypes.string,
          adult: PropTypes.bool,
          id: PropTypes.number,
          title: PropTypes.string,
          overview: PropTypes.string,
          poster_path: PropTypes.string
        })
      )
    })
  ).isRequired
}

export default DemoPropType;