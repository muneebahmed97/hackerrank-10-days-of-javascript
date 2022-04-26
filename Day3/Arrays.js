/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let uniqueArray = []
    if (nums.length !== new Set(nums).size) uniqueArray = [...new Set(nums)] 
    else uniqueArray = nums
    
    const sortedArray = uniqueArray.sort((a, b) => a - b)
    const secondLargest = sortedArray[sortedArray.length - 2]
    
    return secondLargest
}