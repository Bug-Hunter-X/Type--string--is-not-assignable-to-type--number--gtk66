function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function combine(arr1: number[], arr2: number[]): number[] {
  const combinedArr: number[] = [];
  arr1.forEach(item => {
    if (isNumber(item)){
        combinedArr.push(item);
    }
  });
  arr2.forEach(item => {
    if (isNumber(item)){
        combinedArr.push(item);
    }
  });
  return combinedArr;
}

// Example usage
const arr1:number[] = [1,2,3,4,5];
const arr2:number[] = [6,7,8,9,10];
const combined = combine(arr1, arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr3: (number|string)[] = [1, 2, '3', 4, 5];
const arr4: number[] = [6, 7, 8, 9, 10];
const combined2 = combine(arr3, arr4);
console.log(combined2); // Output: [1, 2, 4, 5, 6, 7, 8, 9, 10]