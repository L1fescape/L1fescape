import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { mount } from '@vue/test-utils';
import ThemeToggle from '../ThemeToggle.vue';

// mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('ThemeToggle', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders properly', () => {
    const wrapper = mount(ThemeToggle);
    expect(wrapper.attributes().title).toEqual('Toggle Theme');
  });
});
