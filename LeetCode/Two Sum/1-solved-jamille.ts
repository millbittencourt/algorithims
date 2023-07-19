// # 1. Two Sum

const givenNumbersArray = [2, 7, 11, 15];
const target = 9;

const returnIndexOfSum = (givenNumbersArray: number[], target: number): number[] => {
  for (let i = 1; i < givenNumbersArray.length; i++) {
    let previousIndex = i - 1;
    let actualIndex = i;

    let sumOfNeighbors = givenNumbersArray[previousIndex] + givenNumbersArray[actualIndex];

    if (target === sumOfNeighbors) {
      return [previousIndex, actualIndex];
    }
  }
  return [];
}

console.log(
  returnIndexOfSum(givenNumbersArray, target)
);