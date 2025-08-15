function twoSum(nums: number[], target: number): number[] {
  let hashMap = new Map<number, number>();
  for(let i = 0; i < nums.length; i++) {
    let addend1 = nums[i];
    let addend2 = target-addend1;
    if(hashMap.has(addend2)) return [hashMap.get(addend2) as number, i];
    hashMap.set(addend1, i);
  }
  return [];
};