//variables which are like containers that store data and we give label for that container

/*we get a input as user name and surely we need to remember through out the code. if not we have to ask evertime
when we want. that is why we use variables.*/

//declaration of a variable
var variable_name = "TRX"

//if we want to console it
console.log(variable_name)

//if we want to add something more with it
//1st method
console.log('hey', variable_name)
//2nd method
console.log('hey' + variable_name)
//3rd method(backticks ` not these ') - template
console.log(`hey ${variable_name}`)
//also in this third method there is a way to print multiline texts
console.log(`
    hey asdasd
    asdasdasd
    asdasdasd
    asdasdasd
`)


//what was the difference between them?
//also we can many words in this way not only two words.

//also we can change the existing values in them
variable_name = "Rosh"
//lets check what happend
console.log(variable_name)
