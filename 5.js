//conditional statements
/*
if (condition){
    block of execution
}
else if(){

}...
else{

}
*/

var results = 65
//if results > 40 he is passed if not say try again.
if (results > 40){
    console.log('Passed!')
}
else{
    console.log('Try again!')
}
//Ok great. We implemented simple program. but I want it to say if results above 75 are A and above 65 are B
//and abve 40 are C and else are F
var results = 65

if (results >= 75){
    console.log('A')
}
else if (results >= 65){
    console.log('B')
}
else if (results >= 40){
    console.log('C')
}
else {
    console.log('F')
}
//Great! I also take this moment tell you about another way of implementing conditional statements rather than 
//using IF blocks but this method use on descrete values.
var results = 'second'

switch(results){
    case 'first' :console.log('A');break;
    case 'second':console.log('B');break;
    case 'third' :console.log('C');break;
    default      :console.log('C');
}