import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import ReposanteContainer from './ReposanteContainer';

describe('container', () => {
  it('should render the reposante app', async () => {
    render(
      <MemoryRouter>
        <ReposanteContainer />
      </MemoryRouter>
    );

    const urlInput = await screen.findByTestId('url');
    fireEvent.change(urlInput, {
      target: {
        value: 'https://ac-vill.herokuapp.com/villagers'
      }
    })
    expect(urlInput.value).toBe('https://ac-vill.herokuapp.com/villagers');


    const radioSelection = await screen.findByTestId('get');
    userEvent.click(radioSelection);
    fireEvent.change(radioSelection, {
      target: {
        value: 'GET'
      }
    });
    expect(radioSelection).toBeChecked('GET');

    const textarea = await screen.findByPlaceholderText('Raw JSON Body');
    fireEvent.change(textarea, {
      target: {
        value: ''
      }
    });
    expect(textarea.value).toBe('')


    const button = await screen.findByTestId('button');
    const response = await screen.findAllByTestId('response');
    userEvent.click(button);
    expect(response).not.toBeEmptyDOMElement;

    const sidebar = await screen.findByTestId('sidebar');
    expect(sidebar).not.toBeEmptyDOMElement();
  });
});