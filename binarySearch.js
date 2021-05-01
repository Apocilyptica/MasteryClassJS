// Recursion

var nums = [1, 3, 6, 14, 20, 21, 65, 75, 82, 102, 130, 145, 175];

const binarySearch = (nums, target, start = 0, end = nums.length - 1, count = 0) => {
  ++count;

  if (end < start) return `ERROR! Target not found.`;

  let mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) {
    return `target: ${target} found in ${count} cycles at index ${mid} using Recursion.`;
  }

  if (nums[mid] < target) {
    return binarySearch(nums, target, mid + 1, end, count);
  }

  if (nums[mid] > target) {
    return binarySearch(nums, target, start, mid - 1, count);
  }
};

var target = 145;

console.log(binarySearch(nums, target));

// While

var nums = [1, 3, 6, 14, 20, 21, 65, 75, 82, 102, 130, 145, 175];

const binarySearchLoop = (nums, target) => {
  let count = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    ++count;

    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return `target: ${target} found in ${count} cycles at index ${mid} using While Loop.`;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    }

    if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return `ERROR! Target not found.`;
};

var target = 3;

console.log(binarySearchLoop(nums, target));
