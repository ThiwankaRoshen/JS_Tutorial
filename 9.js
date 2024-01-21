//Objects : keep related values as a collection
//property key value pairs

//object declaration
var user1 = {
    //property:value
    firstName : 'Thiwanka',
    lastName: "Pathirana",
    age: 24,
    password: 'TRX' 
}
console.log(user1)
    //accessing by dot notation
console.log(user1.firstName)
    //accessing by bracket notation
console.log(user1['firstName'])

//we also can add new propertis after the declaration of an object
user1.profession = 'WebDev'
user1['education'] = 'undergrad'
console.log(user1)
//we can change user1 property values
user1.age = 23
console.log(user1)

//methods : function that relate to an object
var user2 = {
    name: 'TRX',
    isLogged: false,
    //name of the method    //function declaration
    login :                 function(){
                                 //function body
                                 this.isLogged = true
                                 console.log('Logged')
    },
    logout : function(){
        this.isLogged = false
        console.log('Logged out')
    }
}
console.log(user2.isLogged)
user2.login()
console.log(user2.isLogged)
user2.logout()
console.log(user2.isLogged)
