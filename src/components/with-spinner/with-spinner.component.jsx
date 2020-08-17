import React from 'react';
import PropTypes from 'prop-types';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div>
        true
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  Spinner.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };
  return Spinner;
};

export default WithSpinner;
