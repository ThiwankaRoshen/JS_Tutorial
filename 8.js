//Array: contiguous memory
//we can store a collection of data
var shoppingitem1 = 'cap'
var shoppingitem2 = 'lap'
var shoppingitem3 = 'tap'
var shoppingitem4 = 'map'
//rather than above method we can use an array to store it as a collection
//index                0      1      2      3
var shoppingitems = ['cap', 'lap', 'tap', 'map']
console.log(shoppingitems[2])
//array methods
//to get length of an array = .length
//to add a item to end of the array = .push(item)
//to remove and get a item from end of the array = .pop()
var enditem = shoppingitems.pop()
console.log(enditem)
//below example

//i want to display my shopping list. make a function for it.
function displaylist (arr){
    lengthOfArray = arr.length
    for (var i = 0; i < lengthOfArray; i++){
        console.log(arr[i])
    }
}

displaylist(shoppingitems)


//remember string are arrays too.
//but they are immutable meaning they can't be pop or push. so they don't change. arrays are mutable. they can change
var fname = 'malisa'
console.log(fname.length)

console.log(fname.charAt(1))

console.log(fname.concat(' maroon')) 

console.log(fname.indexOf('a')) 

console.log(fname.lastIndexOf('a')) 

console.log(fname.split('a')) 

console.log(fname.toUpperCase()) 

console.log(fname.toLowerCase()) 