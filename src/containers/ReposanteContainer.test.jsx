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
    expect(urlInput.value).toBe('https://ac-vill.herokuapp.com/villagers')
  })
})