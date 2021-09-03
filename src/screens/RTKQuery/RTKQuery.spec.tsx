import React from 'react';
import {render} from '../../../jest/test-utils';
import RTKQueryScreen from './RTKQuery.screen';

describe('RTK Query Screen', () => {
  it('displays a pokemon name', async () => {
    const {getByText, findByText} = render(<RTKQueryScreen />);

    const loading = getByText(/loading/i);
    expect(loading).toBeDefined();

    const name = await findByText(/ditto/i);

    expect(name).toBeDefined();
  });
});
