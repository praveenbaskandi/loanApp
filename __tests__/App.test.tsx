import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Mock screens
jest.mock(
  '../src/screens/LoanListPage/LoanListScreen',
  () => require('../__mocks__/LoanListScreen').default,
);

jest.mock(
  '../src/screens/LoanDetailsPage/LoanDetailScreen',
  () => require('../__mocks__/LoanDetailScreen').default,
);

describe('App Navigation', () => {
  it('renders LoanListScreen as initial route', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('loan-list-screen')).toBeTruthy();
  });
});
