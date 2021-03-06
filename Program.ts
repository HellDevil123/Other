/**两数之和(简单) 
 * 定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

 */
function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]) as number, i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};


//
/**整数反转(简单)                  
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
示例 1:
输入: 123
输出: 321

 示例 2:    
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

 */
function reverse(x: number): number {
    let reverseNum: any = parseInt(x.toString().split("").reverse().join(""));
    if (x < 0) reverseNum *= -1;

    if (reverseNum >= -Math.pow(2, 31) && reverseNum <= Math.pow(2, 31) - 1) {
        return reverseNum
    } else {
        return 0
    }
};


/**回文数(简单)
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例 2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

进阶:
你能不将整数转为字符串来解决这个问题吗？
 */
function isPalindrome(x: number): boolean {
    let reverseNum: any = parseInt(x.toString().split("").reverse().join(""));
    
    if (x == reverseNum) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(-121))
