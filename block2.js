// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.
Clone the array before using sort method: [...arr]
*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9))
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '))
// - Add two new words in the strings array "called" and "sentance"
strings.push('called','sentance')
console.log(strings)
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '))
// - Remove the first word in the array (strings)
strings.unshift()
// - Find all the words that contain 'is' use string method 'includes'
let allis=strings.filter((string)=>string.includes('is'))
console.log(allis)
// - Find all the words that contain 'is' use string method 'indexOf'
let allisagain=strings.filter((str)=>str.indexOf("is") !== -1)
console.log(allisagain)
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every(number =>number%3===0))
// -  Sort Array from smallest to largest
let num2=[...numbers].sort((a,b)=>a-b)
// - Remove the last word in strings
strings.pop()
                   
// - Find largest number in numbers
let num=[...numbers].sort((a,b) =>a-b)
console.log(num.pop())

// - Find longest string in strings
let str = [...strings].sort((a,b)=>a.length-b.length)
console.log(str.pop())
// - Find all the even numbers
let evennumber=numbers.filter(element=> element%2==0)
console.log(evennumber)


// - Find all the odd numbers
let Oddnumber= numbers.filter(element=>element%2!==0)
console.log(Oddnumber)
// - Place a new word at the start of the array use (unshift)
strings.unshift('mom')
// - Make a subset of numbers array [18,9,7,11]

let subset=numbers.slice(3,7)
console.log(subset)
// - Make a subset of strings array ['a','collection']
console.log(strings)
let subsetString=strings.slice(3,5)
console.log(subsetString)
// - Replace 12 & 18 with 1221 and 1881

console.log(numbers.map(num =>{
    if(num===12){
        return 1221
    }else if (num===18){
        return 1881
    }else{
        return num
    }
}))
// - Replace words in strings array with the length of the word
let stringlength=strings.map(element=>element.length)
console.log(stringlength)
// - Find the sum of the length of words using above question
let sumStringlength=stringlength.reduce((a,b) =>a+b,0)
console.log(sumStringlength)
// - Customers Array
var customers = [
    { firstname: 'Joe', lastname: 'Blogs' },
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'Dave', lastname: 'Jones' },
    { firstname: 'Jack', lastname: 'White' },
  ];
// - Find all customers whose firstname starts with 'J'
let customer=customers.filter(element =>element.firstname[0]==="J")
console.log(customer)
// - Create new array with only first name
let onlyFirstName=customers.map(element=>element.firstname)
console.log(onlyFirstName)
// - Create new array with all the full names (ex: "Joe Blogs")
let fullname=[]
for(let name of customer){
    fullname.push(`${name.firstname} ${name.lastname}`)
}
console.log(fullname)
let fullname2=customer.map(element=>`${element.firstname} ${element.lastname}`)
console.log(fullname2)
// - Sort the array created above alphabetically
let sortName=[...fullname].sort()
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer=customers.filter((customer)=> {
    if(
        customer.firstname.toLowerCase().includes("a")||
        customer.firstname.toLowerCase().includes("e")||
        customer.firstname.toLowerCase().includes("i")||
        customer.firstname.toLowerCase().includes("o")||
        customer.firstname.toLowerCase().includes("u")
        ){
            return true
        }else{
            return false
        }
    
})
console.log(vowelCustomer)