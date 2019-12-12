import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListViewComponent from '../components/ListMovies';
import { createStructuredSelector } from 'reselect';
import { listDataMovieSelector, isLoadingDataSelector } from '../reselect/MoviewReselect';

const mapStateToProps = createStructuredSelector({
  movies: listDataMovieSelector,
  isLoading: isLoadingDataSelector
});

// defaul propos
ListViewComponent.defaultProps = {
  isLoading: false,
  movies: []
}

ListViewComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
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


export default connect(
  mapStateToProps,
  null
)(ListViewComponent)