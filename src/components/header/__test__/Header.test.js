import { render, screen } from '@testing-library/react';

import Header from "../Header";


it('should render the Header component', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', {name: /Star Wars Data Dashboard/i});
    expect(headerElement).toBeVisible();
  })
