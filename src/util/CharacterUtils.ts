export function alphanumericEquals(first: string, second: string) {
  return first.replace(/\W/g, '').toLowerCase() === second.replace(/\W/g, '').toLowerCase();
}
