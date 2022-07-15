import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ThemeToggle from '../ThemeToggle.vue';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('ThemeToggle', () => {
  it('renders properly', () => {
    const wrapper = mount(ThemeToggle);
    expect(wrapper.attributes().title).toEqual('Toggle Theme');
  });
});
