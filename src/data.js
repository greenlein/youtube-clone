export const API_KEY = `AIzaSyA_5w_zAGgJgxEpAC_SGp3nLti8QHKkg3c`;

export function convertValue(value) {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
  return;
}
