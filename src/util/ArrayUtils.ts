export function randomArrayElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function flatMap<T, U>(array: T[], mapFunc: (x: T) => U[]): U[] {
  return array.reduce((cumulus: U[], next: T) => [...mapFunc(next), ...cumulus], []);
}
