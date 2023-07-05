export function isNullOrEmpty(entry) {
  if (entry === null) return true;
  else if (entry === '') return true;

  return false;
}

export const isString = (str) => {
  return typeof str === 'string' || str instanceof String;
};

export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
