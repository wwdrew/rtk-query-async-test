import {rest} from 'msw';

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/ditto', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({name: 'ditto'}));
  }),
];
