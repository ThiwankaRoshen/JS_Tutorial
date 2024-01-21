//Error handling: use to handle runtime errors except syntax errors
/**
 try{
    body of code that will throw an error
 }
 catch(err){
    body of code after catching that above code threw an error
 }
 */
try{
    console.log(a + b)
}
catch(err){
    console.log(err)
}
console.log('still run')

//did you so still line 8 run.if i remove try{} catch(err){} blocks.
//uncomment line 13, 14 

// console.log(a+b)
// console.log('am i still runninig') //no.because now what happend is line 1 to 12 run but after runnung 13 
//it will throw an error and stop the program

//we also can mannually throw an error
throw new ReferenceError('I can use here to put error message')
console.log('am i still runninig')
