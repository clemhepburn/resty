import React, { Component } from 'react';
import Fetch from '../components/Fetch';
import Header from '../components/Header';
import Response from '../components/Response';
import { fetchService } from '../services/fetchService';

export default class ReposanteContainer extends Component {

  state = {
    url: '',
    body: '',
    method: '',
    response: {
      'Bonjour': `je m\'ennuie... 
    Si vous pouviez me donner quelque chose de significatif à faire comme bénévole, je serais bien plus heureux. 
    peut-être un FETCH ?`},
    history: [],
  }

  componentDidMount() {
    const storedHistory = JSON.parse(localStorage.getItem('HISTORY'));
    if (storedHistory) {
      this.setState({ history: storedHistory });
    } else {
      this.setState({ history: [] });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, body, method } = this.state;
    const response = await fetchService(url, body, method);
    const localHistory = JSON.parse(localStorage.getItem('HISTORY') || '[]');
    localStorage.setItem('HISTORY', JSON.stringify([...localHistory, { method, url }]));
    const storedHistory = JSON.parse(localStorage.getItem('HISTORY') || '[]');

    this.setState({
      response: response,
      history: storedHistory,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { url, body, method, response, history } = this.state;
    return (
      <div>
        <section><Header /></section>
        <section className="body-content-section">
          <section className="fetch-content">
            <Fetch url={url} body={body} method={method} response={response} history={history} />
          </section>
          <section className="response-display">
            <Response response={response} />
          </section>
        </section>
      </div>
    )
  }

}