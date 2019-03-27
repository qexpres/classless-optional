import { NoSuchElementException } from './no-such-element-exception';
import { None } from './none';

describe('A None', () => {
  it('should return false for exists()', () => {
    const callback = jest.fn();
    expect(None().exists(callback)).toBe(false);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return None for filter()', () => {
    const callback = jest.fn();
    expect(
      None()
        .filter(callback)
        .isEmpty(),
    ).toBe(true);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return None for flatMap()', () => {
    const callback = jest.fn();
    expect(
      None()
        .flatMap(callback)
        .isEmpty(),
    ).toBe(true);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should never use the forEach() callback', () => {
    const callback = jest.fn();
    None().forEach(callback);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should throw an Error for get()', () => {
    expect(() => None().get()).toThrow(NoSuchElementException);
  });
  it('should return the alternative value for orElse()', () => {
    const a = {};
    expect(None().orElse(a)).toBe(a);
  });
  it('should return the alternative optional for orElse()', () => {
    const a = None();
    expect(None().orElse(a)).toBe(a);
  });
  it('should return null for orNull()', () => {
    expect(None().orNull()).toBeNull();
  });
  it('should return undefined for orUndefined()', () => {
    expect(None().orUndefined()).toBeUndefined();
  });
  it('should return false for isDefined()', () => {
    expect(None().isDefined()).toBe(false);
  });
  it('should return true for isEmpty()', () => {
    expect(None().isEmpty()).toBe(true);
  });
  it('should return None for map()', () => {
    const callback = jest.fn();
    expect(
      None()
        .map(callback)
        .isEmpty(),
    ).toBe(true);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return an empty array for toArray()', () => {
    expect(None().toArray()).toEqual([]);
  });
});
