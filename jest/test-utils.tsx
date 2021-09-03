import React, {FC, ReactElement} from 'react';
import {
  render as rntlRender,
  RenderOptions,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {createStore, rootInitialState} from '../src/store';
import {QueryClient, QueryClientProvider} from 'react-query';

function render(
  ui: ReactElement,
  {
    preloadedState = rootInitialState,
    store = createStore(preloadedState),
    ...renderOptions
  }: {
    preloadedState?: Partial<typeof rootInitialState>;
    store?: ReturnType<typeof createStore>;
    renderOptions?: Omit<RenderOptions, 'wrapper'>;
  } = {},
) {
  const queryClient = new QueryClient();

  const Wrapper: FC = ({children}) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );

  return rntlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react-native';
export {render};
