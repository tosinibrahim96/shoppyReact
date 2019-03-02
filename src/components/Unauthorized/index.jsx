import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../NotFound/NotFound.scss';

export default class Unauthorized extends Component {
  render() {
    return (
      <Fragment>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops!</h1>
              <h2>You Dont Have Access To View This Page</h2>
            </div>
            <Link to="/">
              <p>Go TO Homepage</p>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
