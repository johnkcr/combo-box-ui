import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ComboBox from '../../components/ComboBox/ComboBox';

const mockFruits = [
  { name: 'Apple', icon: '🍎' },
  { name: 'Banana', icon: '🍌' },
  { name: 'Cherry', icon: '🍒' },
];

test('Renders ComboBox correctly', () => {
  render(<ComboBox fruits={mockFruits} />);
  
  const inputElement = screen.getByPlaceholderText('Choose a Fruit');
  expect(inputElement).toBeInTheDocument();

  const listElement = screen.queryByRole('listbox');
  expect(listElement).not.toBeInTheDocument();
});

test('Displays filtered options on input change', () => {
  render(<ComboBox fruits={mockFruits} />);
  
  const inputElement = screen.getByPlaceholderText('Choose a Fruit');
  fireEvent.change(inputElement, { target: { value: 'Banana' } });
  const filteredOption = screen.getByText('Banana');
  expect(filteredOption).toBeInTheDocument();
});