import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LazyImage from '../components/LazyImage/LazyImage';

describe('LazyImage', () => {
  it('renders image with correct src and alt', () => {
    const { container } = render(
      <LazyImage src="/test-image.jpg" alt="Test image" />
    );

    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.jpg');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('sets loading attribute to lazy', () => {
    const { container } = render(
      <LazyImage src="/test-image.jpg" alt="Test image" />
    );

    const img = container.querySelector('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('sets decoding attribute to async', () => {
    const { container } = render(
      <LazyImage src="/test-image.jpg" alt="Test image" />
    );

    const img = container.querySelector('img');
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('applies custom className', () => {
    const { container } = render(
      <LazyImage src="/test-image.jpg" alt="Test image" className="custom-class" />
    );

    const img = container.querySelector('img');
    expect(img).toHaveClass('custom-class');
  });

  it('passes through additional HTML attributes', () => {
    const { container } = render(
      <LazyImage 
        src="/test-image.jpg" 
        alt="Test image"
        width={300}
        height={200}
        title="Test title"
      />
    );

    const img = container.querySelector('img');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '200');
    expect(img).toHaveAttribute('title', 'Test title');
  });

  it('handles missing optional props', () => {
    const { container } = render(
      <LazyImage src="/test-image.jpg" alt="Test image" />
    );

    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
    expect(img).toHaveAttribute('alt');
  });

  it('renders with long URL', () => {
    const longUrl = 'https://example.com/very/long/path/to/image.jpg?param1=value1&param2=value2';
    const { container } = render(
      <LazyImage src={longUrl} alt="Test image" />
    );

    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', longUrl);
  });

  it('renders with empty alt text', () => {
    const { container } = render(
      <LazyImage src="/decorative-image.jpg" alt="" />
    );

    const img = container.querySelector('img');
    expect(img).toHaveAttribute('alt', '');
  });
});
