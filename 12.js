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
//OOP concepts
/**
 * 1.Abstraction: design in a general way not in a specific case
 * 2.Encapsulation: person.walking() 'I don't know how the hell it works but it works'
 * 3.Inheritance: 
 */
//  sub/child class        super/parent class
class Student      extends Person{
    constructor(name, status, grade){
        super(name, status)
        this.grade = grade
    }
    walking(){
        super.walking()
        console.log('break')
    }
    stopwalk=function(){//overiding: meaning changing parent class method
        console.log('stopped walking')
        this.status = 'learning'
    }
}
var student1 = new Student('rosh', 'learning', 5)
/*
 * 4.Polymorphism : same method work in different way depend on the context
//try
 */ 
person2.stopwalk()
student1.stopwalk()

//why?
var s1 = 'apple'
var s2 = 'apple'
if (s1 === s2){console.log('same')}else{console.log('not same')}
var s3 = new String('apple')
var s4 = new String('apple')
if (s3 === s4){console.log('same')}else{console.log('not same')}
//because in s3 and s4 their are objects
console.log(s3,s4)
//and they are saved in different memory locations. that's why they aren't same