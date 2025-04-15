
//////////////////////////////////////// MAP///////////////////////////

//A Map is a collection of key-valve pairs where keys can be of any type.

let myMap=new Map();

// stote values 
myMap.set("name","John");
myMap.set("age","24");
myMap.set("country1","India");
myMap.set("country2","USA");
myMap.set("country3","Canada");
console.log(myMap)

// getting values 

console.log(myMap.get("name"))

// check if a key exists 

console.log(myMap.has("country"))

// deleting a key 
myMap.delete("age")
console.log(myMap.has("age"))

// getting size of map 

console.log(myMap.size)

myMap.forEach((value,key)=>{
    console.log(`${key} : ${value}`)
})


for(let [key,value]of myMap){
    console.log(`${key} : ${value}`)
}

// clearing a map

myMap.clear();
console.log(myMap.size)

// program 1  count the frequency of each element 
function countFrequency(arr){
    let freqMap=new Map();
    for(let num of arr){
        freqMap.set(num,(freqMap.get(num)|| 0)+1);

    }
    return freqMap;
}
console.log(countFrequency([1,2,2,3,3,4]));

// Program 2 find two numbers which sum to make a target 
function twoSum (num , target ){
    let map =new Map();
    for(let i =0;i<num.length;i++){
        let complement =target-num[i];
        if(map.has(complement)){
            return [map.get(complement),i];
        }
        map.set(num[i],i);
    }
    return [];
}
console.log(twoSum([2,7,11,15],9));

