//JSON
//it is a js object but stringified
const json1 = '{"color":"black", "size": 7}'
//we only have to parse/convert it to string to work like a normal object
var jso1 = JSON.parse(json1)
console.log(jso1.color)

//also we can js obejct to a json
var jso2 = {
    age : 90,
    name: 'thiwanka'
}

var json2 = JSON.stringify(jso2)

