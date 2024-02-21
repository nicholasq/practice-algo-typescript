// https://leetcode.com/problems/merge-strings-alternately
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

// https://leetcode.com/problems/greatest-common-divisor-of-strings
export function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  const gcd = (x: number, y: number): number => {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  };
  const _gcd = gcd(str1.length, str2.length);
  return str1.substring(0, _gcd);
}

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const result: boolean[] = [];
  let max = Number.MIN_SAFE_INTEGER;
  candies.forEach((elem) => {
    if (elem > max) {
      max = elem;
    }
  });
  candies.forEach((value) => {
    result.push(value + extraCandies >= max);
  });
  return result;
}

// https://leetcode.com/problems/can-place-flowers
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  let prevPlotEmpty = true;
  for (let i = 0; i < flowerbed.length; i++) {
    const middle = flowerbed[i];
    if (middle === 0) {
      if (
        prevPlotEmpty && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        count++;
        if (count === n) {
          return true;
        }
        prevPlotEmpty = false;
      } else {
        prevPlotEmpty = true;
      }
    } else {
      prevPlotEmpty = false;
    }
  }
  return n === 0;
}

const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

// https://leetcode.com/problems/reverse-vowels-of-a-string
export function reverseVowels(s: string): string {
  const result: string[] = [];
  for (const char of s) {
    result.push(char);
  }
  let left = 0, right = s.length - 1;
  while (left < right) {
    const leftIsVowel = vowels.has(result[left]);
    const rightIsVowel = vowels.has(result[right]);
    if (leftIsVowel && rightIsVowel) {
      const temp = result[left];
      result[left] = result[right];
      result[right] = temp;
      left++;
      right--;
    } else if (!leftIsVowel) {
      left++;
    } else {
      right--;
    }
  }
  return result.join("");
}
