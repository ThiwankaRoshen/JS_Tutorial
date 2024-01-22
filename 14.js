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
//take each item and execute a_function and make an array
//return an array
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
//4. ...anArray   - (spread operator)
//use to spread
console.log('spread the items ', ...arr)
//also to merge many arrays
var arr4 = [...arr, ...arr2, ...arr3]
//5. rest operater- a way to destruct lists
var [first, ...others] = arr
console.log(`
first ${first} 
others ${others}`)
//make a function to multiply by given factor every item give
function multy(factor, ...numbers){
    return numbers.map(function(item){ return item*factor})
}
console.log(multy(2,6,7,8,9,10))
//objects: keys can be only strings
var obj3 = {
    size : 40,
    width : 10
}
Object.keys(obj3).filter(function(key){
    console.log(key, obj3[key])
})
//destruct an object
var {size} = obj3
console.log(size)

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