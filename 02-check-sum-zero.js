const input = [4, 2, -1, 5, -2, -1, -2, -1, -4, -1, 5, -2, 3];
function checkSum(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if( sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const res = checkSum(input);
console.log(res);