// we write ES in separate modules
// ES is weakly typed
let a=1
a = 'altered'

// there is a 'block' scope
{
    // this is now a differernt scope
    let a=true
}
console.log(a, typeof(a))

// complex types
let s= 'strings are immutable'
console.log(s[2]) // r
// arrays are mutable, ordinal collections of any type
let arr = [3, 2, false, s, [], , 'chameleon'] // arrays can be sparse
// pop to remove from array
arr.push(a.length) // all strings have a length property
console.log(arr, arr[3])
// we ca niterate over any indexed collection
for (let i in arr){
    console.log(i, arr[i])
}

// the date type
let today = new Date()

// objects - in ES EVERYTHING is an object
// objects are mutable collectinos of key:value pairs of any type
let o = {'ticker':'C', 'quantity':360, 'ts':today}
console.log(o)
for (let k in o){
    console.log(k, o[k])
}
// string interpolation aka back-tick syntax. Performant string builder
let message = `${s}, unlike a ${arr[6]}`
console.log(message)