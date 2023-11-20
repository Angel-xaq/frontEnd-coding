//可以实现三数之和、四数之和...K数之和
//用到了排序 + 递归迭代N-1次 + 双指针
var fourSum = function (nums, n, target) {
    let result = [];
    let len = nums.length;
    if (len < n) {
        return result;
    }
    nums.sort((a, b) => a - b);
    function solve(nums, n, target) {
        if (nums.length < n) {
            return [];
        }
        let res = [];
        if (n === 2) {
            let left = 0, right = nums.length - 1;
            while (left < right) {
                if (nums[left] + nums[right] === target) {
                    res.push([nums[left], nums[right]]);
                    while (nums[left] == nums[left + 1]) {
                        left++;
                    }
                    while (nums[right] == nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;

                }
                else if (nums[left] + nums[right] > target) {
                    right--;
                }
                else {
                    left++;
                }
            }
            return res;
        }
        else {
            for (let i = 0; i < nums.length; i++) {
                if (i > 0 && nums[i] === nums[i - 1])  //i去重
                    continue;
                let subres = solve(nums.slice(i + 1, nums.length), n - 1, target - nums[i]);
                for (let j = 0; j < subres.length; j++) {
                    res.push([nums[i]]+',' + subres[j]);
                }
            }
            return res;
        }
    }
    result = solve(nums, n, target);
    let res= [];
    for(let index in result){
        let temp=result[index].split(',').map(Number);
        res[index]=temp;
    }
    console.log(res);
};
let nums = [1, 0, -1, 0, -2, 2,0];
let target = 0;
fourSum(nums, 4, target);