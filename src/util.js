// Generates a random number of a given length
export function generateRandomNumber(minLength = 3, maxLength = 6) {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
