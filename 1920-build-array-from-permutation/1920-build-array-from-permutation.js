/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
   var arr=  nums.map((el ) =>{
        return nums[el];
    });

    return arr;
};