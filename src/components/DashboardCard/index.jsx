import React, { Component, Fragment } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './DashboardCard.scss';
import '../../partial-styles/responsive.scss';
import { productCategories } from '../../actions/getCategoriesAction';
import { getAllProducts } from '../../actions/getProductsAction';
import { storeAttendants } from '../../actions/getAttendantsAction';
import { getAllSales } from '../../actions/getTotalSalesAction';

class InfoCard extends Component {
  componentDidMount = () => {
    this.props.productCategories();
    this.props.getAllProducts();
    this.props.storeAttendants();
    this.props.getAllSales();
  };

  displayDashboardCards = dashboardCards => dashboardCards.map((card, index) => (
    <div className="card" key={index}>
      <div className={`card__side card__side--front card__side--front-${index + 1}`}>
        <div className="card__description">{card.description}</div>

        <Card className="infoCard">
          <h1 className="numberOfItems">{card.numberOfItems}</h1>
          <Link to={`/${card.path}`}>
            <Button animated>
              <Button.Content visible>View All</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  ));

  render() {
    const { allCategories, allProducts, allAttendants } = this.props;

    const dashboardCards = [
      {
        description: 'Categories',
        numberOfItems: allCategories.successResponse.length,
        path: 'categories'
      },
      {
        description: 'Products',
        numberOfItems: allProducts.successResponse.length,
        path: 'products'
      }
    ];
    if (allAttendants.successResponse.length > 0) {
      dashboardCards.push({
        description: 'Attendants',
        numberOfItems: allAttendants.successResponse.length,
        path: 'attendants'
      });
    }
    return <Fragment>{this.displayDashboardCards(dashboardCards)}</Fragment>;
  }
}

const mapStateToProps = state => ({
  allCategories: state.allCategories,
  allProducts: state.allProducts,
  allAttendants: state.allAttendants
});

export { InfoCard as InfoCardPage };
export default connect(
  mapStateToProps,
  { productCategories, getAllProducts, storeAttendants, getAllSales }
)(InfoCard);
