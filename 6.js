//Looping : Repeating a block of code until a condition met
/*
1.For LOOP
    interator,       condition ,          incrementer
for(var i = 0;       i < 5;               i++){
    block of code
}
*/
//i want to make a program to count up 3 and say go.
for (var i = 1; i <=3; i++){
    console.log(i + '!')
}
console.log('GO!')
//i want to count down 10 and say 2024
for (var i = 10; i >= 1; i--){
    console.log(i,'!')
}
console.log('2024!')
//i want all even numbers from 100 to 200
for (var i = 100; i <= 200; i += 2){
    console.log(i)
}
/*
2.While LOOP
while(condition){
    block of code
}
 */
//look at the positions of var i = 0, i <= 3, i++ in for loop examples and while loops. Is there any pattern
//i want to make a program to count up 3 and say go.
var i = 1;
while ( i <=3 ){
    console.log(i + '!')
    i++
}
console.log('GO!')
//i want to count down 10 and say 2024
var i = 10; 
while (i >= 1){
    console.log(i,'!')
    i--
}
console.log('2024!')
//i want all even numbers from 100 to 200
var i = 100;
while (i <= 200){
    console.log(i)
    i += 2
}

//! Remember end of the semicoluns in every line is not a necessary !
// in the for loop for( ; ; )is necessary

/*
3.Nested Loops

OuterLoop{
    {
        block of code
    }
    InnerLoop{
        block of code
    }
}
*/

//i want to print 0,0 to 9,9
for (var i = 0; i<=9; i++){
    for (var j = 0; j<=9; j++){
        console.log(i + ',' + j)
    }
}
// i want to get 1 times 1 to 9 times 9 to all results
for (var i = 0; i<=9; i++){
    for (var j = 0; j<=9; j++){
        console.log(i * j)
    }
}
//Now i want to combine above to examples and make print like '1 times 1 equals to 1'
for (var i = 0; i<=9; i++){
    for (var j = 0; j<=9; j++){
        console.log(i + ' times ' + j + ' equals to ' + i*j)
    }
}