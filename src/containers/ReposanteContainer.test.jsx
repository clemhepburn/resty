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
    userEvent.type(textarea, {
      target: {
        value: '{rose: is a rose is a rose is a rose}'
      }
    });
    expect(textarea.value).toBe('{rose: is a rose is a rose is a rose}')

  });
});