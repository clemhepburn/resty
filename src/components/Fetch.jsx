import React from 'react';
import PropTypes from 'prop-types';

const Fetch = ({ url, method, body, onChange, onSubmit }) => {
  return <div className="fetch">
    <form onSubmit={onSubmit}>
      <label htmlFor="get">
        <input type="radio" id="get" name="method" value="GET" method={method} onChange={onChange} />
        <span>GET</span>
      </label>
      <label htmlFor="post">
        <input type="radio" id="post" name="method" value="POST" method={method} onChange={onChange} />
        <span>POST</span>
      </label>
      <label htmlFor="put">
        <input type="radio" id="put" name="method" value="PUT" method={method} onChange={onChange} />
        <span>PUT</span>
      </label>
      <label htmlFor="delete">
        <input type="radio" id="delete" name="method" value="DELETE" method={method} onChange={onChange} />
        <span>DELETE</span>
      </label>
      <label htmlFor="patch">
        <input type="radio" id="patch" name="method" value="PATCH" method={method} onChange={onChange} />
        <span>PATCH</span>
      </label>

      <button type="submit">
        <span>Submit</span>
      </button>
    </form>

    <form>
      <textarea id="body" placeholder="Raw JSON Body" type="text" name="body" value={body} onChange={onChange} />
    </form>
  </div>
};

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.any,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Fetch;