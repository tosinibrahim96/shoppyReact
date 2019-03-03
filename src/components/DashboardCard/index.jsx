import React, { Component, Fragment } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import cardInfo from '../../helpers/DashboardCard';
import './DashboardCard.scss';
import '../../partial-styles/responsive.scss';
import { getUserInfo } from '../../helpers/jwtHelper';

export default class InfoCard extends Component {
  render() {
    const userInfo = getUserInfo();
    return !userInfo ? (
      <Redirect to="/login" />
    ) : (
      <Fragment>
        {cardInfo.map(({ front, description, numberOfItems, viewAll }) => (
          <div className="card">
            <div className={`card__side card__side--front card__side--${front}`}>
              <div className="card__description">{description}</div>

              <Card className="infoCard">
                <h1 className="numberOfItems">{numberOfItems}</h1>
                <Button animated>
                  <Button.Content visible>{viewAll}</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Card>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
