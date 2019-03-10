import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import ProductComponent from '../../components/InfoCard';
import { getUserInfo } from '../../helpers/jwtHelper';
import { getAllProducts } from '../../actions/getProductsAction';

class Product extends Component {
  componentDidMount = () => {
    this.props.getAllProducts();
  };

  render() {
    const currentItems = JSON.parse(localStorage.getItem('myCart'));
    if (!currentItems) {
      localStorage.setItem('myCart', JSON.stringify([]));
    }
    const { successResponse, productsLoading } = this.props.allProducts;
    const result = getUserInfo();
    if (!result) {
      return <Redirect to="/login" />;
    }
    if (productsLoading) {
      return (
        <Dimmer active inverted>
          <Loader size="large">Products Records Loading</Loader>
        </Dimmer>
      );
    }
    return (
      <Navbar
        displayPage={successResponse.map(
          ({
            product_id,
            product_name,
            product_image_url,
            product_description,
            product_price,
            product_quantity,
            category_id,
            category_name
          }) => (
            <ProductComponent
              key={product_id}
              id={product_id}
              nameToDisplay={product_name}
              imageUrl={product_image_url}
              currentPage="product"
              description={product_description}
              userRole={result.userRole}
              productPrice={product_price}
              productQuantity={product_quantity}
              categoryId={category_id}
              categoryName={category_name}
            />
          )
        )}
        currentPage="product"
      />
    );
  }
}

const mapStateToProps = state => ({
  allProducts: state.allProducts
});

export { Product as ProductPage };
export default connect(
  mapStateToProps,
  { getAllProducts }
)(Product);
