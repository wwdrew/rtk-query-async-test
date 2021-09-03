import React from 'react';
import {render} from '../../../jest/test-utils';
import RTKQueryAxiosScreen from './RTKQueryAxios.screen';

describe('RTK Query Axios Screen', () => {
  it('displays a pokemon name', async () => {
    const {getByText, findByText} = render(<RTKQueryAxiosScreen />);

    const loading = getByText(/loading/i);
    expect(loading).toBeDefined();

    const name = await findByText(/ditto/i);

    expect(name).toBeDefined();
  });
});
