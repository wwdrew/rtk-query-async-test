import React from 'react';
import {render} from '../../../jest/test-utils';
import HomeScreen from './Home.screen';

describe('Home Screen', () => {
  it('displays a credit amount', async () => {
    const {getByText, findByText} = render(<HomeScreen />);

    const creditAmount = getByText(/credit amount/i);

    expect(creditAmount).toHaveTextContent('Credit Amount: £0');

    const name = await findByText(/bulbasaur/i);

    expect(name).toBeDefined();
  });
});
