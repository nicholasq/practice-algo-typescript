import {assertEquals} from "https://deno.land/std@0.211.0/assert/mod.ts";
import * as arraystring from "./leetcode75/arraystring.ts";

// deno-lint-ignore no-explicit-any
function timeFunction<T, R>(func: (...args: any[]) => R, ...args: any[]): R {
  // Unfortunately, it appears that is not possible to get any time resolution higher than millisec in deno.
  const startTime = performance.now();
  const result = func(...args);
  const endTime = performance.now();
  console.log(`${func.name}() - ${endTime - startTime} ms`);
  return result;
}

Deno.test(function mergeStringsAlternativelyTest() {

  const testCases = [
    {one: 'abc', two: 'def', expected: 'adbecf'},
    {one: 'ac', two: 'efgh', expected: 'aecfgh'},
    {one: '', two: '', expected: ''},
    {one: 'a', two: '', expected: 'a'},
    {one: '', two: 'b', expected: 'b'},
    {one: "", two: "", expected: ""}
  ];

  for (const {one, two, expected} of testCases) {
    const actual =
      timeFunction(arraystring.mergeStringsAlternatively, one, two);
    assertEquals(actual, expected);
  }
});
