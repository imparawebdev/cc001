// CHALLENGE 001
//
// Create a function that takes a string as parameter
// and returns the string backwards, as if it was read from right to left.
//
// EXAMPLE
// backwards('Dante') // --> should return etnaD

const backwards = (string) => {
  let reverseString = ''
  for (let i = string.length -1; i >= 0; i--) {
    reverseString += string[i]
  }
  return reverseString
}


module.exports = backwards