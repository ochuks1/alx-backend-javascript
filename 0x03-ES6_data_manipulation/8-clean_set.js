export default function cleanSet(set, startString) {
  if (startString === '') return '';
  
  const result = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
