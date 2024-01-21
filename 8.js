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
//below example

//i want to display my shopping list. make a function for it.
function displaylist (arr){
    lengthOfArray = arr.length
    for (var i = 0; i < lengthOfArray; i++){
        console.log(arr[i])
    }
}

displaylist(shoppingitems)
