import { graphql } from 'msw';

export const handlers = [
  graphql.query('GetProducts', (req, res, ctx) => {
    return res(
      ctx.data({
        products: [
          // Mock product data
        ],
      }),
    );
  }),
]; 