import { render, screen } from '@testing-library/react';

import BarChartComponent from '../BarChartComponent'

it('should render the Line Chart component', () => {
    render(<BarChartComponent />);
    const headerElement = screen.getByRole('heading', {name: /Average Height of Species/i});
    expect(headerElement).toBeVisible();
  })
