import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const backdrop = props => <div className="backdrop" onClick={props.click} role="presentation" />;

backdrop.propTypes = {
  click: PropTypes.func.isRequired
};

export default backdrop;
