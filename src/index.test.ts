import { renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import useStateSet from './index';

describe('useStateSet', () => {
  test('creates a new set', () => {
    const { result } = renderHook(() => useStateSet<string>(new Set()));

    expect(result.current[0]).toEqual(new Set());
  });

  test('creates a new set with default values', () => {
    const { result } = renderHook(() => useStateSet<string>(new Set(['a', 'b'])));

    expect(result.current[0]).toEqual(new Set(['a', 'b']));
  });

  test('can add values', () => {
    const { result } = renderHook(() => useStateSet<string>(new Set(['a', 'b'])));
    act(() => {
      result.current[1]('c');
    });

    expect(result.current[0]).toEqual(new Set(['a', 'b', 'c']));
  });

  test('can remove values', () => {
    const { result } = renderHook(() => useStateSet<string>(new Set(['a', 'b'])));

    act(() => {
      result.current[2]('b');
    });

    expect(result.current[0]).toEqual(new Set(['a']));
  });

  test('can filter values', () => {
    const { result } = renderHook(() => useStateSet<string>(new Set(['a', 'b', '5'])));

    act(() => {
      result.current[3](['a', 'b', 'c', 'd']);
    });

    expect(result.current[0]).toEqual(new Set(['a', 'b']));
  });
});
