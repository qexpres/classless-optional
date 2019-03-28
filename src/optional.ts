import { nil } from './nil';
import { None } from './none';
import { Some } from './some';

const NONE = None<any>();

export const Optional = Object.freeze({
  first<T>(array: Array<Optional<T>>): Optional<T> {
    return Optional.of(array.find(_ => _.isDefined())).flatMap(_ => _);
  },
  flatten<T>(array: Array<Optional<T>>): T[] {
    return array.reduce<T[]>((values, current) => values.concat(current.toArray()), []);
  },
  none<T>(): Optional<T> {
    return NONE;
  },
  of<T>(value: T | nil): Optional<T> {
    return value !== null && typeof value !== 'undefined' ? Some(value) : NONE;
  },
  ofTruthy<T>(value: T | nil): Optional<T> {
    return value ? Some(value) : NONE;
  },
  some<T extends {}>(value: T): Optional<T> {
    return Some(value);
  },
});

export interface Optional<T> {
  equals<S>(other: Optional<S>): boolean;

  exists(f: (value: T) => boolean): boolean;

  filter(f: (value: T) => boolean): Optional<T>;

  flatMap<U>(f: (value: T) => Optional<U>): Optional<U>;

  forEach(f: (value: T) => any): void;

  get(): T;

  isDefined(): boolean;

  isEmpty(): boolean;

  map<U>(f: (value: T) => U | nil): Optional<U>;

  or(value: () => Optional<T>): Optional<T>;

  orElse(value: T): T;

  orElseGet(value: () => T): T;

  orNull(): T | null;

  orThrow<E extends Error>(e: () => E): T;

  orUndefined(): T | undefined;

  toArray(): T[];

  toString(): string;
}
