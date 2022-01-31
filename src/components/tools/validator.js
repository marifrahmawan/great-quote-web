export const onlyLetters = (value) => {
  const regularExp = /^[A-Za-z _.-]+$/;

  const validationResult = regularExp.test(value.trim());

  return validationResult;
};

export const onlyNumbers = (value) => {
  const regularExp = /^[0-9]+$/;

  const validationResult = regularExp.test(value.trim());

  return validationResult;
};

export const onlyMixOfAlphaNumeric = (value) => {
  const regularExp = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;

  const validationResult = regularExp.test(value.trim());

  return validationResult;
};

export const containsAlphaNumeric = (value) => {
  const regularExp = /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/;

  const validationResult = regularExp.test(value.trim());

  return validationResult;
};

export const containsNumber = (value) => {
  const regularExp = /\d+/;

  const validationResult = regularExp.test(value.trim());

  return validationResult;
};

export const containsAlphabet = (value) => {
  const regularExp = /[a-zA-Z]/;

  const validationResult = regularExp.test(value.trim());

  return validationResult;
};
