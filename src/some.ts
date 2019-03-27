import { nil } from './nil';
import { None } from './none';
import { Optional } from './optional';

export function Some<T>(value: T): Optional<T> {
  function exists(f: (value: T) => boolean): boolean {
    return f(value);
  }

  function filter(f: (value: T) => boolean): Optional<T> {
    return exists(f) ? Some(value) : None();
  }

  function flatMap<S>(f: (value: T) => Optional<S>): Optional<S> {
    return f(value);
  }

  function forEach(f: (value: T) => void): void {
    f(value);
  }

  function get(): T {
    return value;
  }

  function isDefined(): boolean {
    return true;
  }

  function isEmpty(): boolean {
    return false;
  }

  function map<S>(f: (value: T) => S | nil): Optional<S> {
    return Optional.of(f(value));
  }

  function or(): Optional<T> {
    return Optional.of(value);
  }

  function orElse(): T {
    return value;
  }

  function orElseGet(): T {
    return value;
  }

  function orNull(): T {
    return value;
  }

  function orThrow(): T {
    return value;
  }

  function orUndefined(): T {
    return value;
  }

  function toArray(): T[] {
    return [value];
  }

  return Object.freeze({
    exists,
    filter,
    flatMap,
    forEach,
    get,
    isDefined,
    isEmpty,
    map,
    or,
    orElse,
    orElseGet,
    orNull,
    orThrow,
    orUndefined,
    toArray,
  });
}
