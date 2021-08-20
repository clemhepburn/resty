import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Response = ({ response }) => {
  return (
    <div className="response">
      <ReactJson src={response} />
    </div>
  )
};

Response.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Response;