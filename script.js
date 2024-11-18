//Task 2

const calculateSumAndAvarage = (arr) => {
  const totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  const average = totalSum / arr.length;
  return { totalSum, average };
};

//Task 3
const removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};
