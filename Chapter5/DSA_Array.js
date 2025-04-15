// Find maximum number in an array 
function findMaximum(array){
    let max=array[0];
    for(let i =1;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
console.log(findMaximum([10,2,3,5,26,3]));

// Find the sum of all elements 

function arraySum(array1){
    let sum =0;
    for(let num of array1){
        sum+=num;
    }
    return sum;
}
console.log(arraySum([2,3,5,7,5]));


// reverse an Array

function reverseArray(array2){
    let left=0, right =array2.length-1;
    while(left<right){
        [array2[left],array2[right]]= [array2[right],array2[left]];
        left++;
        right--;
    }
    return array2;
}
console.log(reverseArray([1,2,3,4,5,6,7]));

// Check if Array is sorted 
function isSortedArray(Array3){
    for(let i=0;i<Array3.length-1;i++){
        if(Array3[i]>Array3[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isSortedArray([1,2,3,4,5]));
console.log(isSortedArray([3,5,1,4]));


// Find the Second Largest Element 

function secondLargest(array4){
    let max=-Infinity,secondMax=-Infinity;
    for(let num of array4){
        if(num>max){
            secondMax=max;
            max=num;
        }else if(num>secondMax && num !==max){
            secondMax=num;
        }
    }
    return secondMax === -Infinity?-1 : secondMax;
}
console.log(secondLargest([10,20,3,4,45]));
console.log(secondLargest([40,20,3,4,45]));

// find the missing number from 1 to N 

function findMissingNumber(array5,n){
    let totalSum=(n*(n+1))/2;
    let arraySum=array5.reduce((sum,num)=>sum+num,0);
    return totalSum-arraySum;

}
console.log(findMissingNumber([1,2,4,5,6],6))

