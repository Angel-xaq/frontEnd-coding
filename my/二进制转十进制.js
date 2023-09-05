//这个二进制有符号位，0为正数，1为负数

function binaryToDecimal(binaryStr) {
    let symbol = binaryStr.at(0);
    decimal = parseInt(binaryStr.slice(1), 2)
    if (symbol === '1') {
        decimal = '-' + decimal;  //符号位
    }
    return decimal;
}
console.log(binaryToDecimal('10110'));  //-6

var arr = [2, 0, 2, 1, 1, 0];
console.log(arr.sort((a, b) => a - b))

function swap(nums, i, j) {
    let t = nums[j];
    nums[j] = nums[i];
    nums[i] = t;
}
function sortColors(nums) {
    let ptr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            swap(nums, i, ptr);
            ++ptr;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            swap(nums, i, ptr);
            ++ptr;
        }
    }
    return nums;
}

console.log(sortColors([2, 1, 0, 1, 1, 0, 2]));
