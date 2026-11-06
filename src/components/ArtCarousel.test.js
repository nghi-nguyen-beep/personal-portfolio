import { fireEvent, render, screen } from '@testing-library/react';
import ArtCarousel from './ArtCarousel';

const images = [
  { title: 'First artwork', src: 'first.webp' },
  { title: 'Second artwork', src: 'second.webp' },
  { title: 'Third artwork', src: 'third.webp' },
];

test('navigates through artwork with controls and arrow keys, wrapping at both ends', () => {
  render(<ArtCarousel images={images} />);

  const gallery = screen.getByRole('region', { name: 'Art gallery' });
  expect(screen.getByAltText('First artwork')).toBeInTheDocument();
  expect(screen.getByText('1 / 3')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Next artwork' }));
  expect(screen.getByAltText('Second artwork')).toBeInTheDocument();

  fireEvent.keyDown(gallery, { key: 'ArrowRight' });
  expect(screen.getByAltText('Third artwork')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Next artwork' }));
  expect(screen.getByAltText('First artwork')).toBeInTheDocument();

  fireEvent.keyDown(gallery, { key: 'ArrowLeft' });
  expect(screen.getByAltText('Third artwork')).toBeInTheDocument();
});
