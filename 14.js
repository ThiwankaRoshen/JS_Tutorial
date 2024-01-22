//DATA STRUCTURES// WATCH YOUTUBE// BELOW ARE NOT QUALITY ENOUGH
//array
//1.  anArray.forEach(a_function)
//can use for accessing each item in array and also optionally index
//this doesn't return anything
var arr = [1,2,3,4]

console.log(arr)
var arr2 = arr.forEach(function(item, index){
    return item*index
})
arr.forEach(function(item, index){
    console.log(item*index)
})
arr.forEach(function(item, index){
    console.log(index,item*index)
})
console.log(arr2)
console.log(arr)
//2.  anArray.filter(a_function)
var arr = [1,2,3,4]

console.log(arr)
var arr2 = arr.filter(function(item, index){
    console.log(index)
    return item*index
})
var arr3 = arr.filter(function(item){
    return item > 2
})
arr.filter(function(item, index){
    console.log(item*index)
})
arr.filter(function(item, index){
    console.log(index,item*index)
})
console.log(arr2)
console.log(arr3)
console.log(arr)

//3.  anArray.map(a_function)
var arr = [1,2,3,4]

console.log(arr)
var arr2 = arr.map(function(item){
    return item * 2
})
var arr3 = arr.map(function(item){
    return item > 2
})
arr.map(function(item, index){
    console.log(item*index)
})
arr.map(function(item, index){
    console.log(index,item*index)
})
console.log(arr2)
console.log(arr3)
console.log(arr)

//objects: keys can be only strings
var obj3 = {
    size : 40,
    width : 10
}
Object.keys(obj3).filter(function(key){
    console.log(key, obj3[key])
})
//Map : keys can be any type
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(1))
//Set : no repetetive items
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);