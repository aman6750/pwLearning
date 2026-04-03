class Solution{
    maxSubArray(nums){
        let n = nums.length;
        // let sum = -Infinity;
        // for(let i=0; i<n; i++){
        //     let currsum =0;
        //     for(let j=i; j<n; j++){
        //         currsum += nums[j];

        //         sum = Math.max(sum,currsum);
        //     }
        // }

        let sum = nums[0];
        let maxEnd = nums[0];

        for(let i=1; i<n; i++){
            maxEnd = Math.max(maxEnd+nums[i],nums[i]);

            sum = Math.max(sum,maxEnd);
        }

        return sum;
    }
}

let obj = new Solution();
let result = obj.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

console.log(result);