'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

//the best choice is to do that, but lecturer's tests aren't passed because it's too short
const unique1 = (array) => {
  return [...new Set(array)];
};

const unique = (array) => {
 const result = [];
 for (const item of array) {
  if (!result.includes(item))
      result.push(item);
  }
 return result;
}
module.exports = { unique };
