//THESE ALL CODE IN DEVTOOLS CONSOLE IN BROWSER
//DOM manipulation


//how to make an element
const h1 = document.createElement('h2')
h1.innerText = 'A header'
h1.setAttribute('id', 'h1')
h1.setAttribute('class', 'primary')
document.body.appendChild(h1)

//selecters
document.querySelector('p')
document.querySelectorAll('p')
document.getElementById('heading')
document.getElementsByClassName('primary')

//event handle and listen to changes
//*js
document.querySelector('p').addEventListener('click', function(){console.log('clicked')})

//*pure add to html attribute 
function isclicked(){
    console.log('clicked heading')
}//now paste in the <h1> tag like this
//<h1 onclick = 'isclicked()'></h1>


//i want to user to change when ever they click on h1 element to change the topic in array
var h1 = document.querySelector('h1')
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}    
h1.addEventListener('click', handleClicks);
