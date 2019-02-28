import React, { Component, Fragment } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import './InfoCard.scss';
import '../../partial-styles/responsive.scss';

export default class InfoCard extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card__side card__side--front card__side--front-1">
            <div className="card__description">Categories</div>

            <Card className="infoCard">
              <h1 className="numberOfItems">2</h1>
              <Button animated>
                <Button.Content visible>View All</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Card>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front card__side--front-2">
            <div className="card__description">Products</div>
            <Card className="infoCard">
              <h1 className="numberOfItems">12</h1>
              <Button animated>
                <Button.Content visible>View All</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Card>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front card__side--front-3">
            <div className="card__description">Attendants</div>
            <Card className="infoCard">
              <h1 className="numberOfItems">3</h1>
              <Button animated>
                <Button.Content visible>View All</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Card>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front card__side--front-1">
            <div className="card__description">Sales</div>
            <Card className="infoCard">
              <h1 className="numberOfItems">6</h1>
              <Button animated>
                <Button.Content visible>View All</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}
