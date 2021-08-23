import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  urlBox: {
    marginLeft: '1rem',
    width: '40vw',
    marginBottom: '1rem'
  },
  radios: {
    width: '40vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '2rem',
    fontWeight: '500',
    '& span': {
      border: [2, 'solid', 'black'],
      cursor: 'pointer',
      padding: '0.3rem',
    },
    '& span:hover': {
      backgroundColor: 'black',
      color: 'white'
    },
    '& input': {
      display: 'none'
    },
    '& button': {
      backgroundColor: 'white',
      border: [2, 'solid', 'black'],
      outline: 'none',
      padding: ['0.5rem', '0.3rem'],
      fontSize: '1rem',
      cursor: 'pointer'
    },
    '& button:hover': {
      backgroundColor: 'yellow',
    }
  },
  textarea: {
    width: '42.1vw',
    height: 400,
  }
});

const Fetch = ({ url, method, body, onChange, onSubmit }) => {
  const classes = useStyles();
  return <div className="fetch">
    <form onSubmit={onSubmit}>
      <div className="url-box">
        <label htmlFor="url">
          <span>URL:</span>
          <input className={classes.urlBox} data-testid="url" type="url" name="url" value={url} placeholder="URL" onChange={onChange} />
        </label>
      </div>
      <div className={classes.radios}>
        <label htmlFor="get">
          <input type="radio" name="get" data-testid="get" name="method" value="GET" method={method} onChange={onChange} />
          <span>GET</span>
        </label>
        <label htmlFor="post">
          <input type="radio" name="post" data-testid="post" name="method" value="POST" method={method} onChange={onChange} />
          <span>POST</span>
        </label>
        <label htmlFor="put">
          <input type="radio" name="put" data-testid="put" name="method" value="PUT" method={method} onChange={onChange} />
          <span>PUT</span>
        </label>
        <label htmlFor="delete">
          <input type="radio" name="delete" data-testid="delete" name="method" value="DELETE" method={method} onChange={onChange} />
          <span>DELETE</span>
        </label>
        <label htmlFor="patch">
          <input type="radio" name="patch" data-testid="patch" name="method" value="PATCH" method={method} onChange={onChange} />
          <span>PATCH</span>
        </label>

        <button data-testid="button" type="submit">
          Soumettre
        </button>
      </div>
    </form>

    <form>
      <textarea className={classes.textarea} data-testid="textarea" placeholder="Raw JSON Body" type="text" name="textarea" value={body} onChange={onChange} />
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