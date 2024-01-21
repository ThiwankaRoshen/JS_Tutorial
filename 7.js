//Functions
/*

*Declaration

function function_name(parameter1, parameter2){
    body of code
}

*/
function addNum(a, b){
    console.log(a + b)
}

/*
*call a function
function_name(argument1, argument2)
*/
addNum(4, 5)

//Return: we can use it to get an result from a function. 
function returnAddNum(a, b){
    return a+b
}
var result = returnAddNum(10, 1)
console.log(result)


//Also from return  we stop the execution of the function
function returnAddNum2(a, b){
    return a+b
    a = 90
    b = 77
    return a+b
}
var result = returnAddNum2(10, 1)
console.log(result)