import React, { Component } from 'react';
import Fetch from '../components/Fetch';
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

}