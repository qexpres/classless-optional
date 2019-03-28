import { NoSuchElementException } from './no-such-element-exception';
import { Optional } from './optional';

describe('A None', () => {
  it('should return false for exists()', () => {
    const callback = jest.fn();
    expect(Optional.none().exists(callback)).toBe(false);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return None for filter()', () => {
    const callback = jest.fn();
    expect(
      Optional.none()
        .filter(callback)
        .isEmpty(),
    ).toBe(true);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return None for flatMap()', () => {
    const callback = jest.fn();
    expect(
      Optional.none()
        .flatMap(callback)
        .isEmpty(),
    ).toBe(true);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should never use the forEach() callback', () => {
    const callback = jest.fn();
    Optional.none().forEach(callback);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should throw an Error for get()', () => {
    expect(() => Optional.none().get()).toThrow(NoSuchElementException);
  });
  it('should return the alternative value for orElse()', () => {
    const a = {};
    expect(Optional.none().orElse(a)).toBe(a);
  });
  it('should return the alternative optional for orElse()', () => {
    const a = Optional.none();
    expect(Optional.none().orElse(a)).toBe(a);
  });
  it('should return null for orNull()', () => {
    expect(Optional.none().orNull()).toBeNull();
  });
  it('should return undefined for orUndefined()', () => {
    expect(Optional.none().orUndefined()).toBeUndefined();
  });
  it('should return false for isDefined()', () => {
    expect(Optional.none().isDefined()).toBe(false);
  });
  it('should return true for isEmpty()', () => {
    expect(Optional.none().isEmpty()).toBe(true);
  });
  it('should return None for map()', () => {
    const callback = jest.fn();
    expect(
      Optional.none()
        .map(callback)
        .isEmpty(),
    ).toBe(true);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return an empty array for toArray()', () => {
    expect(Optional.none().toArray()).toEqual([]);
  });
});
