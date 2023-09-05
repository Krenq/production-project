import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((res) => {
      setTimeout(() => {
        // @ts-expect-error
        res(import('./AboutPage'));
      }, 1500);
    }),
);
