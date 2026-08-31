// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoStack title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoStack/i);
    expect(titleElement).toBeInTheDocument();
});
