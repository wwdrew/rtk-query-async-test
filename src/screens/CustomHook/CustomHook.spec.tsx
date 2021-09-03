import React from 'react';
import {render} from '../../../jest/test-utils';
import CustomHookScreen from './CustomHook.screen';

describe('Custom Hook Screen', () => {
  it('displays a pokemon name', async () => {
    const {getByText, findByText} = render(<CustomHookScreen />);

    const loading = getByText(/loading/i);
    expect(loading).toBeDefined();

    const name = await findByText(/ditto/i);

    expect(name).toBeDefined();
  });
});
