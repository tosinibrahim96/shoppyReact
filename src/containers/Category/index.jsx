import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import CategoryComponent from '../../components/InfoCard';
import { getUserInfo } from '../../helpers/jwtHelper';
import { productCategories } from '../../actions/getCategoriesAction';

class Category extends Component {
  componentDidMount = () => {
    this.props.productCategories();
  };

  render() {
    const { successResponse, categoriesLoading } = this.props.allCategories;
    const result = getUserInfo();
    if (!result) {
      return <Redirect to="/login" />;
    }
    if (categoriesLoading) {
      return (
        <Dimmer active inverted>
          <Loader size="large">Categories Records Loading</Loader>
        </Dimmer>
      );
    }
    return (
      <Navbar
        displayPage={successResponse.map(({ id, name, image_url, short_desc }) => (
          <CategoryComponent
            key={id}
            id={id}
            nameToDisplay={name}
            imageUrl={image_url}
            currentPage="category"
            description={short_desc}
            userRole={result.userRole}
          />
        ))}
        currentPage="category"
      />
    );
  }
}

const mapStateToProps = state => ({
  allCategories: state.allCategories
});

export { Category as CategoryPage };
export default connect(
  mapStateToProps,
  { productCategories }
)(Category);
