import { Optional } from './optional';

describe('Optional.ofTruthy', () => {
  it('should wrap any truthy value in Some', () => {
    const opt123 = Optional.ofTruthy(123);
    expect(opt123.isDefined()).toBe(true);
    expect(opt123.get()).toBe(123);
    const optTest = Optional.ofTruthy('test');
    expect(optTest.isDefined()).toBe(true);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = Optional.ofTruthy(obj);
    expect(optObj.isDefined()).toBe(true);
    expect(optObj.get()).toBe(obj);
    const obj2 = [];
    const optObj2 = Optional.ofTruthy(obj2);
    expect(optObj2.isDefined()).toBe(true);
    expect(optObj2.get()).toBe(obj2);
    const obj3 = {};
    const optObj3 = Optional.ofTruthy(obj3);
    expect(optObj3.isDefined()).toBe(true);
    expect(optObj3.get()).toBe(obj3);
  });
  it('should return None for any falsy value', () => {
    expect(Optional.ofTruthy(null).isEmpty()).toBe(true);
    expect(Optional.ofTruthy(undefined).isEmpty()).toBe(true);
    const a = {} as any;
    expect(Optional.ofTruthy(a.b).isEmpty()).toBe(true);
    expect(Optional.ofTruthy('').isEmpty()).toBe(true);
    expect(Optional.ofTruthy(0).isEmpty()).toBe(true);
    expect(Optional.ofTruthy(NaN).isEmpty()).toBe(true);
  });
});

describe('Optional.flatten', () => {
  it('should return the array with the values of all Somes', () => {
    expect(
      Optional.flatten([
        Optional.some(1),
        Optional.some(2),
        Optional.none(),
        Optional.none(),
        Optional.some(4),
        Optional.of(null),
        Optional.of(undefined),
        Optional.some('kaas'),
      ]),
    ).toEqual([1, 2, 4, 'kaas']);
  });
});
