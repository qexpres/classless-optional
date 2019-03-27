import { nil } from './nil';
import { None } from './none';
import { Some } from './some';

export const Optional = Object.freeze({
  empty: <T>(): Optional<T> => {
    return None();
  },
  flatten: <T>(array: Array<Optional<T>>): T[] => {
    return array.reduce((somes, current) => [...somes, ...current.toArray()], []);
  },
  of: <T>(value: T | nil): Optional<T> => {
    return value !== null && typeof value !== 'undefined' ? Some(value) : None();
  },
  ofTruthy: <T>(value: T | nil): Optional<T> => {
    return value ? Some(value) : None();
  },
});

export interface Optional<T> {
  exists(f: (value: T) => boolean): boolean;

  filter(f: (value: T) => boolean): Optional<T>;

  flatMap<U>(f: (value: T) => Optional<U>): Optional<U>;

  forEach(f: (value: T) => any): void;

  get(): T;

  isDefined(): boolean;

  isEmpty(): boolean;

  map<U>(f: (value: T) => U | nil): Optional<U>;

  orElse(value: T): T;

  orElseGet(value: () => T): T;

  orNull(): T | null;

  orThrow<E extends Error>(e: E): T;

  orUndefined(): T | undefined;

  toArray(): T[];
}
