export class NoSuchElementException extends Error {
  constructor() {
    super('No value present');
  }
}
