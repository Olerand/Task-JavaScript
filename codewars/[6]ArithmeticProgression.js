/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers.
 You are provided with consecutive elements of an Arithmetic Progression.
  There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.
   The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers.
 The missing term will never be the first or last one.
*/

var findMissing = function(list) {  
    let step = (list[list.length - 1] - list[0]) / list.length;

    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] !== step) {
            return list[i] + step;
        }
    }
    return null;
}

console.log(findMissing([1, 3, 4]))
console.log(findMissing([1, 2, 4]))
console.log(findMissing([2, 4, 8]))
console.log(findMissing([]))