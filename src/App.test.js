import App from './App';
import speciesRawDataMock from "./mocks/fetchSpeciesData.json";

import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";


const server = setupServer(
  rest.get('https://swapi.dev/api/species', (req, res, ctx) => {
      return res(
          ctx.json(speciesRawDataMock)
      );
  })
)


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('render some async data', async () => {
  render(<App />);
  const speciesData = await screen.findByTestId('find-me');
  expect(speciesData).toContain('Wookie')
});