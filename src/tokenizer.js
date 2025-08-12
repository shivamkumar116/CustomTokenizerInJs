export function customTokenizer(text) {
  const tokens = text.match(/\w+|[^\w\s]|\s+/g) || [];

  return tokens;
}
