// chunkArray.js
export const chunkArray = (array, size) => {
  if (!array || !Array.isArray(array)) return []; // Handle null or undefined
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};