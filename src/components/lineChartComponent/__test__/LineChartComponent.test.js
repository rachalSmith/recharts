import { render, screen } from '@testing-library/react';

import LineChartComponent from '../LineChartComponent';


it('should render the Line Chart component', () => {
    render(<LineChartComponent />);
    const headerElement = screen.getByRole('heading', {name: /Diameter of planets/i});
    expect(headerElement).toBeVisible();
  })
