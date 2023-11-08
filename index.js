console.log ("Hello world!")
let name = 'Anvitha'; // string
console.log (name);
let interestRate = 0.5; // number
console.log(interestRate);
let isApproved = true; //boolean
let firstName; //undefined
let lastName = null; //null

// object
let person = {
    firstName: 'Anvitha',
    lastName: 'Maram',
    age: 20
};
console.log(person);
// dot notation 
person.age = 21;
// bracket notation 
person['firstName'] = 'Mary';
console.log(person);

//array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

//function
//1. performing a task
function greet() {
    console.log("Good evening");
}
greet ();
function greetings(Name) {
    console.log("Good evening "+Name);
}
greetings ('Anvitha');
//2. calculating a value
function square(num){
    return num * num;
}
console.log(square(5));

// arithmetic operators
let x=10;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y); // exponentiation
//incerement
console.log(++x);
console.log(x++);
//decrement
console.log(--y);
console.log(y--);
//assignment operators
console.log(x *= 8);
//comparision operators
console.log(x>=1);
console.log(1===1); // strict equality
console.log('1'===1);
console.log(1==1); //loose euality 
console.log('1'==1);
// ternary operator
let points = 110;
let type = points>100 ? 'Gold' : 'Silver';
console.log(type);
//logical operators
let example = (false || 'Anvitha') //falsy, truthy
console.log(example)
let example1 = (false || 'Anvitha' || 3)
console.log(example1)

//bitwise operators
console.log(1 | 2);
console.log(1 & 2);

// if-else
let hour = 10;
if(hour >=6 && hour < 12){
    console.log("Good moring!");
}
else if(hour>=12 && hour <18){
    console.log("Good afternoon!");
}
else{
    console.log("Good evening");
}

// switch case
let role = 'Admin';
switch(role){
    case 'Guest':
        console.log('Guest User');
        break;
    case 'Admin':
        console.log('Admin User');
        break;
    default: 
        console.log('Unknown User');
}

// for loop
for(let i=0;i<3;i++){
    console.log("Hello world!");
}
// while loop
// let i=1;
// while(i<=5){
//     if(i%2 !== 0) console.log(i);
//         i++;
// }
// do-while
let i=0;
do{
    if(i%2 !== 0) console.log(i);
    i++;
} while(i<=5);
//for-in
const people ={
    Name: 'Anvitha',
    Age: 20
};
for(let key in people){
    console.log(key, people[key]);
}
//for-of
const colors = ['blue', 'green', 'red'];
for(let color of colors){
    console.log(color);
}
//max of two numbers
function max(i,j){
    if(i>j){
        console.log(i);
    }
    else{
        console.log(j);
    }
}
max(15,10);
// islandscape
console.log(islandScape(20,15));
function islandScape (width, height){
    return (width>height);
}
//FizzBuzz
const output = fizzBuzz('Anvitha');
console.log(output);
function fizzBuzz(number){
    if(typeof number !== 'number'){
        return 'Not a number';
    }
    
    if((number % 3 === 0) && (number % 5 ===0)){
        return 'FizzBuzz';
    }
    else if(number % 3 === 0){
        return 'Fizz';
    }
    else if(number % 5 === 0){
        return 'Buzz';
    }
    else {
        return number;
    }
}
// speed limit
checkSpeed(77);
function checkSpeed(speed){
    const speedLimt = 70;
    const kmperPoint = 5;
    if(speed < speedLimt + kmperPoint){
        console.log('OK');
    }
    else{
        const points = Math.floor((speed - speedLimt) / kmperPoint);
        if(points >= 12){
            console.log('Liscence is suspended');
        }
        else{
            console.log('Points', points);
        }
    }
}
// even odd
showNumbers(10);
function showNumbers(limit){
    for(let i = 0; i<=limit; i++){
        const message = (i %2 ===0) ? 'Even' : 'Odd'
        console.log(i, message);
    }
}
// string properties
const movie= {
    title: 'a' ,
    releaseYear: 2023 ,
    rating: 4.5, 
    director: 'b'
};
showProperties(movie);
function showProperties(obj){
    for(let key in obj)
      if(typeof obj[key]==='string')
        console.log(key, obj[key]);
}
// sum of multiples
console.log(sum(10));
function sum(limit){
    let sum = 0;
    for(let i=0; i<=limit; i++){
        if(i%3 === 0 || i%5 ===0){
            sum += i;
        }
    }
    return sum;
}
// calculate grade
const marks = [80, 85, 50];
console.log(calculateGrade(marks));
function calculateGrade(marks){
    let averageSum = 0;
    for(let mark of marks){
        averageSum = averageSum+mark ;
    }
    let average = averageSum / marks.length ;
    if(average <60) console.log('F');
    if((average >=60) && (average <70) ) console.log('D');
    if((average >=70) && (average <80) ) console.log('C');
    if((average >=80) && (average <90) ) console.log('B');
    if((average >=90) && (average <=100) ) console.log('A');
}
// creating circle object
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};
circle.draw();
// primivies ===> completely independent variables
let num1 = 10;
let num2 = num1;
num1 = 20;
console.log(num1, num2);
// reference types
let num3 = {value: 10};
let num4 = num3;
num3.value = 20;
console.log(num3, num4);
//cloninga an object
const circle2 ={
    radius: 1,
    draw(){
        console.log('draw');
    }
};
// method - 1
// const another = Object.assign({
//     color: 'pink'
// }, circle2);

//method-2
const another = {...circle2}; //spread operator
console.log(another); 
// string primitive
const msg = 'hi';
//string object
const msg2 = new String('hi');

// template literals
const msg3 = `This is my 
new message`;
console.log(msg);
console.log(msg2);
console.log(msg3);

const name3 = 'john';
const msg4 = `Hi ${name3} ${2+3}`;
console.log(msg4);

// address object
const address ={
    street: 'Raghavendra colony',
    city: 'Ballari',
    zipcode: 583101
};
function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }
}
showAddress(address);

// address object using factory function
let address2 = createAddress('a', 'b', 'c');
console.log(address2);
function createAddress(street, city, zipcode){
    return{
        street,
        city,
        zipcode
    };
}

// address object using constructor function
let address3 = new Address('a', 'b', 'c');
console.log(address3);
function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// ARRAYS
// add new elements
const num = [3,4];
num.push(5,6); // adds numbers in the end
console.log(num);
num.unshift(1,2); // adds numbers in the beginning
console.log(num);
num.splice(2,0,10,'b', 2); // adds elements in the middle
console.log(num);
// to find the elements (primitives)
console.log(num.indexOf(4));
console.log(num.indexOf('a'));
console.log(num.lastIndexOf(2)); // prints the last index of the element
console.log(num.includes(1)); // return boolean whether the element exists or not
// to find the elements (reference types)
const courses = [
    {id: 1, name:'a'},
    {id: 2, name: 'b'}
];
const course = courses.find(function(course){
    return course.name === 'a';
});

console.log(course);
// removing elements
console.log(num);
const last = num.pop(); // removes element in the last
console.log(num);
console.log(last);
const first = num.shift(); // removes element from first
console.log(num);
num.splice(2,3); // removes elements from middle
console.log(num);

//combining two arrays
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
// const combined = arr1.concat(arr2); // concat method
const combined = [...arr1, ...arr2]; // spread operator
console.log(combined); 
// removing some part of the array
const slice = combined.slice(3,5); // start and end index
console.log(slice);
// iterating array
const numberss = [1,2,3,4,5,6,7,8,9];
for(let number of numberss){
    console.log(number);
}
// sorting
const nums = [8,4,2,9,1,5];
nums.sort();
console.log(nums);
//sorting
const subjects = [
    {id:1, name: 'Physics'},
    {id:2, name: 'Chemistry'}
];
subjects.sort(function(a,b){
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return 0;});
console.log(subjects);
//adding all the elements of the array
console.log(nums);
// normal method
let total =0;
for(let n of nums){
    total += n;
}
console.log(total);
// using reduce method
const add = nums.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;
}, 0);
console.log(add);

// array of numbers from range
const numbbers = arrayFromRange(-10, -4);

console.log(numbbers);
function arrayFromRange(min, max){
    const output = [];
    for(let i=min; i<=max; i++){
        output.push(i);
    }
    return output;
}

// check whether the element is present in the array or not
const arr3 = [1,2,3,45,6,7,68,10];
console.log(includes(arr3, 3));
function includes(array, searchElement){
    for(let element of array){
        if(element === searchElement){
            return true;
        }
    return false;
    }
} 
// function declaration
function walk(){
    console.log('walk');
}
walk();
//function expression
const run = function(){
    console.log('run');
};
run();