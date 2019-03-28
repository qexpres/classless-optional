import { Optional } from './optional';

describe('A Optional.some', () => {
  it('should return the return value of the executed callback for exists()', () => {
    expect(Optional.some(1).exists(_ => !!_)).toBe(true);
    expect(Optional.some(1).exists(_ => !_)).toBe(false);
    const a = {};
    expect(Optional.some(a).exists(_ => _ === a)).toBe(true);
    const callback = jest.fn();
    Optional.some(1).exists(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return itself if the executed callback yield true, otherwise it should return None for filter()', () => {
    const someOne = Optional.some(1);
    expect(someOne.filter(_ => !!_).isEmpty()).toBe(false);
    expect(someOne.filter(_ => !_).isEmpty()).toBe(true);
    const callback = jest.fn();
    Optional.some(1).filter(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return the callback\'s return value for flatMap()', () => {
    const someOne = Optional.some(1);
    const returnNone = Optional.none();
    expect(someOne.flatMap(() => returnNone)).toBe(returnNone);
    expect(someOne.flatMap(_ => Optional.some(_)).isDefined()).toBe(true);
    expect(someOne.flatMap(_ => Optional.some(_)).get()).toBe(someOne.get());
    const callback = jest.fn();
    Optional.some(1).flatMap(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should always use the forEach() callback', () => {
    const callback = jest.fn();
    Optional.some(1).forEach(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return its own value for get()', () => {
    expect(Optional.some(1).get()).toBe(1);
  });
  it('should return its own value for orElse()', () => {
    expect(Optional.some(1).orElse(2)).toBe(1);
  });
  it('should return its own value for orNull()', () => {
    expect(Optional.some(1).orNull()).toBe(1);
  });
  it('should return its own value for orUndefined()', () => {
    expect(Optional.some(1).orUndefined()).toBe(1);
  });
  it('should return false for isDefined()', () => {
    expect(Optional.some(1).isDefined()).toBe(true);
  });
  it('should return true for isEmpty()', () => {
    expect(Optional.some(1).isEmpty()).toBe(false);
  });
  it('should return execute the callback and wrap its result in an optional for map()', () => {
    expect(
      Optional.some(1)
        .map(_ => _ + 1)
        .equals(Optional.some(2)),
    ).toBe(true);
    expect(
      Optional.some<any>({})
        .map(_ => _.unknownProperty)
        .equals(Optional.none()),
    ).toBe(true);
    const callback = jest.fn();
    Optional.some(1).map(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return an array with only its own value for toArray()', () => {
    expect(Optional.some(1).toArray()).toEqual([1]);
  });
});
