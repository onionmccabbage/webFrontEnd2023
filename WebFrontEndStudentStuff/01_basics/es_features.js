// ES is weakly typed
let a = 1
a = 'altered'

// there is a 'block scope' created using curley braces
{
    let a = 'in block scope'
}

console.log(a, typeof(a))

// complex types
let s='strings are immutable'
console.log(s[2]) // 'r'
// arrays are mutable, ordinal collections of any type
let arr = [3, 2, false, s, [], , 'chameleon']
arr.push(a.length) // pop to remove
console.log(arr, arr[3])
for (let i in arr){
    console.log(i, arr[i])
}

let today = new Date()

// objects are mutable collections of key:value pairs of any type
let o={'ticker':'C', 'quantity':360, 'ts':today}
console.log(o)
for (let k in o){
    console.log(k, o[k])
}

// string interpolation (back-tick syntax) - performant string-builder
let message = `${s}, unlike a ${arr[6]}`
console.log(message)

// 'if' logic
const even_odd = today.getSeconds()
if (even_odd%2==0){
    t = 'even'
} else { // can also use else if
    t= 'odd'
}
console.log(`${even_odd} is ${t}`)

// functions: let me count the ways
function oldSkool(x=3, y=2){ // can specify defaults
    return x**y // raise x to the ppower of y
}
const fnW = x=>x/2
const fnX = (x)=>x/2
const fnY = x=>{return x/2}
const fnZ = (x, y)=>{return x/y}
// this next one will not return anything
const fnOops = (x)=>{x/2} // missing 'return' statement

// call the functions
console.log(oldSkool()) // 9
console.log(oldSkool(4,3)) // 
console.log(fnW(3))
console.log(fnX(3))
console.log(fnY(3))
console.log(fnZ(3, 9))
// there is a type called NaN
console.log(fnZ(3, 'oops'))
// no return statement, we get 'undefined'
console.log(fnOops(3))

// Methods of classes look like this
class WibblyWoo {
    // properties
    a = 1
    // methods
    feedCat(arg1='Cathy', arg2='Mog'){
        console.log(`feeding ${arg1} and ${arg2}`)
    }
}

const wibblyInstance = new WibblyWoo()

// rest and spread
const fnR = (a, b, ...rest)=>{ // gather any other arguments into an array called 'rest'
    console.log(rest)
}
fnR(2, 3, a, ...a) // '...a' will spread the members of 'a' into separate values

// working with HTML content
// get a reference to an id in the Document Object Model (DOM)
five = document.getElementById('five')
console.log(five)
// insert plain text into an element
five.innerHTML = `Today is ${today}`
// make a new HTML element then insert it into the page
const newElem = document.createElement('img')
newElem.setAttribute('src', 'https://placekitten.com/64/64')
newElem.setAttribute('alt', 'kitten image')
newElem.setAttribute('title', 'awwwwww')
five.appendChild(newElem)
// remove something from the DOM (two ways)
setTimeout( // handy way to wit for a bit
    ()=>{ // call back
        five.removeChild(newElem)
    }, 10000 // after this many milliseconds
)
// or just replace the entire element content with an empty text string
// five.innerHTML = ''

// agree to cookies
const handleCookieButton = ()=>{ // there is ALWAYS an event object
    // console.log(event.target.id)
    // consent.setAttribute('hidden', true)
    // or more formally 
    consent = document.getElementById('consent')
    // consent.setAttribute('hidden', true)
    // or even more performant
    // remove signature must atch add signature
    btnAgree.removeEventListener('click', handleCookieButton)
    consent.removeChild(event.target)
}

// add event listener ot the cookie button
btnAgree = document.getElementById('btnAgree')
// nb no round brackets after the event handler function name
btnAgree.addEventListener('click', handleCookieButton)

// primitive templating engine
const l = unordered_list.innerHTML
// console.log(l) // show in the browser console (f12)
ordered_list.innerHTML = l


