import { None } from './none';
import { Some } from './some';

describe('A Some', () => {
  it('should return the return value of the executed callback for exists()', () => {
    expect(Some(1).exists(_ => !!_)).toBe(true);
    expect(Some(1).exists(_ => !_)).toBe(false);
    const a = {};
    expect(Some(a).exists(_ => _ === a)).toBe(true);
    const callback = jest.fn();
    Some(1).exists(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return itself if the executed callback yield true, otherwise it should return None for filter()', () => {
    const someOne = Some(1);
    expect(someOne.filter(_ => !!_).isEmpty()).toBe(false);
    expect(someOne.filter(_ => !_).isEmpty()).toBe(true);
    const callback = jest.fn();
    Some(1).filter(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return the callback\'s return value for flatMap()', () => {
    const someOne = Some(1);
    const returnNone = None();
    expect(someOne.flatMap(() => returnNone)).toBe(returnNone);
    expect(someOne.flatMap(_ => Some(_)).isDefined()).toBe(true);
    expect(someOne.flatMap(_ => Some(_)).get()).toBe(someOne.get());
    const callback = jest.fn();
    Some(1).flatMap(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should always use the forEach() callback', () => {
    const callback = jest.fn();
    Some(1).forEach(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return its own value for get()', () => {
    expect(Some(1).get()).toBe(1);
  });
  it('should return its own value for orElse()', () => {
    expect(Some(1).orElse(2)).toBe(1);
  });
  it('should return its own value for orNull()', () => {
    expect(Some(1).orNull()).toBe(1);
  });
  it('should return its own value for orUndefined()', () => {
    expect(Some(1).orUndefined()).toBe(1);
  });
  it('should return false for isDefined()', () => {
    expect(Some(1).isDefined()).toBe(true);
  });
  it('should return true for isEmpty()', () => {
    expect(Some(1).isEmpty()).toBe(false);
  });
  it('should return execute the callback and wrap its result in an optional for map()', () => {
    expect(
      Some(1)
        .map(_ => _ + 1)
        .isDefined(),
    ).toBe(true);
    expect(
      Some(1)
        .map(_ => _ + 1)
        .get(),
    ).toBe(2);
    expect(
      Some<any>({})
        .map(_ => _.length)
        .isEmpty(),
    ).toBe(true);
    const callback = jest.fn();
    Some(1).map(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return an array with only its own value for toArray()', () => {
    expect(Some(1).toArray()).toEqual([1]);
  });
});
