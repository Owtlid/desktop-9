export const splitStringWithinRange = (input) => {
  if (input.length <= 150) {
    return [input];
  } else {
    const regex = new RegExp(`.{150,230}[,.!?;\\s\r\n]+`);

    const arrayOfSplittedStrings = [];
    let match;

    while ((match = regex.exec(input))) {
      arrayOfSplittedStrings.push(match[0]);
      input = input.slice(match[0].length).trim();
    }

    if (input.length > 0) {
      arrayOfSplittedStrings.push(input);
    }

    return arrayOfSplittedStrings;
  }
};
