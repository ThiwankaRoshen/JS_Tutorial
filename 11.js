//functional Programming     : data and functions are work seperately
//make a currency converter
var currency1 = 120
var rate = 2
var currency2 = 0

function currencyConverter(currency, rate){
    return currency*rate
}

currency2 = currencyConverter(currency1, rate)
console.log(currency2)

//recursion: function calling itself
//kind of way to loop
for (var i = 1; i<=3; i++){
    console.log(i)
}
//we can build this using recursion
var i = 1
function count(){
    console.log(i)
    i++
    if (i > 3){return}
    count()
}
//let's see is it working
count()

//scope
//1.local scope: if a variable is defined inside a function then it is scoped to the 
//function meaning it can't be accessed from outer the function
//2.global scope: the variables that are defined outer a function can be accessed in the function
var a = 5
function func(){
    var b = 3
    console.log(a)
}
func()
//console.log(b)  //uncomment this and try
//3.block scope: meaning you can scope it only to a block(inside a if, for or while loop)
var a = 4
var b = 9
 if (a > 2){
    var a = 1//when using var ,ther is no block scoping
    let b =6//this is the block scoping
    
 }
 console.log('a', a,' b',b)
 const c = 8
 //c = 9 //we can't change const 

//Funclion types
//1.first class citizen function
//you can use functions linke variables.
function print55(){
    console.log(55)
}
var print = print55
print()
//you can assign one function to another variable and that variable become that function.
//2.Higher order functions
//you give functions as arguments or it gives you a function as a return
function randomnum(){
    return Math.random() * 10
}
function specificnum(){
    return 77
}
//below is the higher order function.
function number(function1, function2){
    return function1() + function2()
}
//this gives a number but we have to give functions as arguments
console.log(number(randomnum, specificnum)) 

//3.pure function: for same input it gives same output. No side effects
//(meaning it doesn't rely on outer function variables or it doesn't change outer variables)
 function addnum(a, b){
    return a + b
 }


//Object Oriented Programming: data and functions work in a combined way
//we use this to make real life items
var person1= {
    name : 'thiwanka',
    status: 'doing nothing',
    walking: function(){
        console.log('walking')
        this.status = 'walking'
    },
    stopwalk: function(){
        console.log('stopped walking')
        this.status = 'doing nothing'
    }
}
console.log(person1.name)
console.log(person1.status) 
person1.walking()
console.log(person1.status)

//above i made one object but if  i wanted 100 of those objects, wouldn't be that easy if i can get instantly
//CLASSES : template of an object
class Person{
    //constructer: assign attributes(variables specific to class)
    constructor(name, status){
        this.name = name
        this.status = status
    }

    //below are methods(function that specific to the class)
    walking= function(){
        console.log('walking')
        this.status = 'walking'
    }
    stopwalk= function(){
        console.log('stopped walking')
        this.status = 'doing nothing'
    }
}
var person2 = new Person('TRX', 'learning')
console.log(person2.name)
console.log(person2.status) 
person2.walking()
console.log(person2.status)
