import React from 'react';
import {render} from '../../../jest/test-utils';
import ReactQueryScreen from './ReactQuery.screen';

describe('React Query Screen', () => {
  it('displays a pokemon name', async () => {
    const {getByText, findByText} = render(<ReactQueryScreen />);

    const loading = getByText(/loading/i);
    expect(loading).toBeDefined();

    const name = await findByText(/ditto/i);

    expect(name).toBeDefined();
  });
});
