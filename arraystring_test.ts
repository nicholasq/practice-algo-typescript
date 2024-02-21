import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
import * as arraystring from "./leetcode75/arraystring.ts";

// deno-lint-ignore no-explicit-any
function timeFunction<R>(func: (...args: any[]) => R, ...args: any[]): R {
  // Unfortunately, it appears that is not possible to get any time resolution higher than millisec in deno.
  const startTime = performance.now();
  const result = func(...args);
  const endTime = performance.now();
  console.log(`${func.name}() - ${endTime - startTime} ms`);
  return result;
}

Deno.test(function mergeStringsAlternativelyTest() {
  const testCases = [
    { one: "abc", two: "def", expected: "adbecf" },
    { one: "ac", two: "efgh", expected: "aecfgh" },
    { one: "", two: "", expected: "" },
    { one: "a", two: "", expected: "a" },
    { one: "", two: "b", expected: "b" },
    { one: "", two: "", expected: "" },
  ];

  for (const { one, two, expected } of testCases) {
    const actual = timeFunction(
      arraystring.mergeStringsAlternatively,
      one,
      two,
    );
    assertEquals(actual, expected);
  }
});

Deno.test(function gcdOfStringsTest() {
  const testCases = [
    { str1: "abcabc", str2: "abc", expected: "abc" },
    { str1: "abab", str2: "ab", expected: "ab" },
    { str1: "leet", str2: "code", expected: "" },
  ];
  for (const { str1, str2, expected } of testCases) {
    const actual = timeFunction(
      arraystring.gcdOfStrings,
      str1,
      str2,
    );
    assertEquals(actual, expected);
  }
});

Deno.test(function kidsWithCandiesTest() {
  const testCases = [
    {
      candies: [2, 3, 5, 1, 3],
      extraCandies: 3,
      expected: [true, true, true, false, true],
    },
    {
      candies: [4, 2, 1, 1, 2],
      extraCandies: 1,
      expected: [true, false, false, false, false],
    },
    { candies: [12, 1, 12], extraCandies: 10, expected: [true, false, true] },
  ];
  for (const { candies, extraCandies, expected } of testCases) {
    const actual = timeFunction(
      arraystring.kidsWithCandies,
      candies,
      extraCandies,
    );
    assertEquals(actual, expected);
  }
});

Deno.test(function canPlaceFlowersTest() {
  const testCases = [
    { flowerbed: [1, 0, 0, 0, 1], n: 1, expected: true },
    { flowerbed: [1, 0, 0, 0, 1], n: 2, expected: false },
    { flowerbed: [0], n: 1, expected: true },
    { flowerbed: [0], n: 2, expected: false },
    { flowerbed: [0, 1, 0], n: 1, expected: false },
    { flowerbed: [0, 0, 0], n: 1, expected: true },
    { flowerbed: [0, 0, 0], n: 2, expected: true },
    { flowerbed: [1, 0, 0, 0, 0, 1], n: 2, expected: false },
    { flowerbed: [0, 0, 0, 0, 0, 1, 0, 0], n: 0, expected: true },
  ];
  for (const { flowerbed, n, expected } of testCases) {
    const actual = timeFunction(
      arraystring.canPlaceFlowers,
      flowerbed,
      n,
    );
    assertEquals(
      actual,
      expected,
      `flowerbed:${flowerbed}, n:${n}, expected:${expected}`,
    );
  }
});

Deno.test(function reverseVowels() {
  const testCases = [
    { s: "hello", expected: "holle" },
    { s: "leetcode", expected: "leotcede" },
    { s: " ", expected: " " },
    { s: "a.", expected: "a." },
    { s: "!!!", expected: "!!!" },
  ];
  for (const { s, expected } of testCases) {
    const actual = timeFunction(
      arraystring.reverseVowels,
      s,
    );
    assertEquals(actual, expected);
  }
});
