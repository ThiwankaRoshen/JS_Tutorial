//iterating elements
var ls = ['a', 'b', 'c', 'v', 'b']
for (item of ls){
    console.log(item)
}
for (item in ls){
    console.log(item)
}


var obj = {
    'speed' : 90,
    'mass' : 5
}
//below throw error because objects aren't iterable meaning they can't be iterable like normal
// for (item of obj){
//     console.log(item)
// }
//below works
for (item in obj){
    console.log(item)
}
//but if a object is inherited then superclass keys also visible in for - in - 
var obj2 = Object.create(obj)
obj2.speed = 80
console.log(obj2)
//but for - in -  method 
for (item in obj){
    console.log(item)
}//parent object keys also visible

//so there are some methods for alternative method to use objects keys and values in iterable way
for (item of Object.keys(obj2)){
    console.log(item)
}
for (item of Object.values(obj2)){
    console.log(item)
}
for (item of Object.entries(obj2)){
    console.log(item)
}//we can get only the keys and values assign to the child object. this wont go through the parent object

