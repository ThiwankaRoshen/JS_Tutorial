// strings
/*
These are some examples

""
''
'hello world'
"hello world"

below one is wrong because it has some confusing notation when string start and end
'I'm trx'
so we use below notation for clarity and correctness
"I'm trx" 

*/

//concatenation = string + string
console.log('number' + 'six')

//string + number ?
console.log('number' + 6)
//this is called coercion
//JavaScript coerces a number value to a string value - so that it can run the + operator on disparate data types.
//this coercion also happen boolean values and numbers. true = 1 and false = 0.
console.log(true == 1)