import { NoSuchElementException } from './no-such-element-exception';
import { Optional } from './optional';

export function None<T>(): Optional<T> {
  function equals<S>(other: Optional<S>): boolean {
    return other.isEmpty();
  }

  function exists(): false {
    return false;
  }

  function filter(): Optional<T> {
    return Optional.none();
  }

  function flatMap<U>(): Optional<U> {
    return Optional.none();
  }

  function forEach(): void {
    return;
  }

  function get(): T {
    throw new NoSuchElementException();
  }

  function isDefined(): boolean {
    return false;
  }

  function isEmpty(): boolean {
    return true;
  }

  function map<U>(): Optional<U> {
    return Optional.none();
  }

  function or(f: () => Optional<T>): Optional<T> {
    return f();
  }

  function orElse(other: T): T {
    return other;
  }

  function orElseGet(f: () => T): T {
    return f();
  }

  function orNull(): null {
    return null;
  }

  function orThrow<E extends Error>(e: () => E): never {
    throw e();
  }

  function orUndefined(): undefined {
    return undefined;
  }

  function toArray(): never[] {
    return [];
  }

  function toString(): string {
    return 'None()';
  }

  return Object.freeze({
    equals,
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
    toString,
  });
}
