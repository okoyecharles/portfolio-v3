export function percentToRadians(percent: number) {
  return (percent / 100) * 2 * Math.PI;
}

function capitalizeFirstLetter(inputString: string) {
  if (inputString.length < 1) return '';

  const firstLetter = inputString[0];
  const returnChars = inputString.split('');
  returnChars[0] = firstLetter.toUpperCase();
  const returnString = returnChars.join('');
  return returnString;
}

export function toNormalCase(inputString: string) {
  const words = inputString.split(' ');
  words.map((word) => capitalizeFirstLetter(word));
  return words.join(' ');
}