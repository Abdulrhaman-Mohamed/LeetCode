function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b); // Sort the array
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize with the first three elements

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return currentSum; // If the current sum is exactly the target, return it
            }
        }
    }

    return closestSum;
};