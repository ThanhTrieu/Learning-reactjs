
import { connect } from 'react-redux';

import SearchComponent from '../components/Search';
import { getDataApi } from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
  onClick: (name) => dispatch(getDataApi(name))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchComponent)