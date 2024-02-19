export function mergeStringsAlternatively(one: string, two: string): string {
  let result = "";
  let count = 0;
  while (count < one.length || count < two.length) {
    if (count < one.length) {
      result += one.charAt(count);
    }
    if (count < two.length) {
      result += two.charAt(count);
    }
    count++;
  }
  return result;
}
