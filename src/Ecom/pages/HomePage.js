import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { 
  listDataProductsSelector,
  isLoadingDataSelector,
  totalItemProducts,
  pageSizeProducts
} from '../reselect/ProductReselect';
import { isLoadingAddCart } from '../reselect/CartReselect';
import HomePage from '../components/home';
import { getlistPagingProduct, addProductToCart } from '../actions/index';

const mapStateToProps = createStructuredSelector({
  listManFashion: listDataProductsSelector,
  loadingProduct: isLoadingDataSelector,
  loadingAddCart: isLoadingAddCart,
  totalItems: totalItemProducts,
  pageSize: pageSizeProducts
});

const mapDispatchToProps = (dispatch) => ({
  loadData: (start, limit) => dispatch(getlistPagingProduct(start, limit)),
  addCart: (id) => dispatch(addProductToCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
