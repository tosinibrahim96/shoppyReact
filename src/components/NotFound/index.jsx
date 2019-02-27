import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

export default class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops!</h1>
              <h2>404 - The Page cant be found</h2>
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
