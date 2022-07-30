
//############################QUESTION NO: 2
// arrow function -------The arrow function is basically an anonymous function which accepts a fixed number or arguments, and operates in the context of the enclosing scope.

/*
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  materials.map((str) => {
    return str.length
    })

const balls = ['green', 'blue', 'pink', 'yellow', 'blue', 'yellow', 'green'];
var ballsMap = balls.reduce((acc, ball) => {
    if (acc[ball] >= 1) acc[ball]++;
    else acc[ball] = 1;
    return acc;
}, {});
console.log(ballsMap);
Expected output: {green: 2, blue: 2, pink: 1, yellow: 2}
*/





//############################QUESTION NO: 3
//callback function:  A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

/*
function myDis(some) {
    console.log(some);
}
function myCal(n1, n2, itsCalback) {
    let sum = n1 + n2;
    itsCalback(sum);
}
myCal(5, 5, myDis); 
*/





//############################QUESTION NO: 4
//recursive function: A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

/*
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}

function sumOfArray(arr, lastIndex) {
    if(lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
console.log(sumOfArray(arr, arr.length - 1));
*/




//############################QUESTION NO: 5
/*let str = 'abcab';
str.indexOf('c');
str.lastIndexOf('c');


function nonRepeat(str) {
    for(var i = 0; i < str.length; i++) {
        let j = str.charAt(i);
        if(str.indexOf(j) === str.lastIndexOf(j)) {
            return j;
        }
    }
}*/





//############################QUESTION NO: 6
/*
Class component and functional component what`s diffrent??
functional##
used for presenting static data --- user for dynamic source of data
can't handle fetching data --- handle any data might faching data, eventdata
easy to right --- complex to right
*/


/*import React, { useState } from "react";
 
const FunctionalComponent = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }

    return (
        <div style={{margin:'50px'}}>
            <h1>Welcome to Geeks for Geeks </h1>
            <h3>Counter App using Functional Component : </h3>
          <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
}
export default FunctionalComponent;



import React, { Component } from "react";

class ClassComponent extends React.Component{
	constructor(){
		super();
		this.state={
			count :0
		};
		this.increase=this.increase.bind(this);
	}
	
increase(){
	this.setState({count : this.state.count +1});
}

	render(){
		return (
			<div style={{margin:'50px'}}>
			<h1>Welcome to Geeks for Geeks </h1>
			<h3>Counter App using Class Component : </h3>
			<h2> {this.state.count}</h2>
			<button onClick={this.increase}> Add</button>

			</div>
		)
	}
}

export default ClassComponent;*/





//############################QUESTION NO: 7
/**
 what diffrent component DidMount and unmount???
 didMount ### The component uses componentDidMount lifecycle method to fetch data from a remote source when first rendered and then shows a to do list.
 
 unmount ### componentWillUnmount is the last function to be called immediately before the component is removed from the DOM.
 */

/**component Did mount */
/*
useEffect(() => {
    async function fetchApi(){
        fetch('https://api.twitter.com')
        .then((result) => console.log(result))
        .catch(err => console.log(err))
    }

    //call mount
    fetchApi();

    //call unmount
    return () => {
        console.log('---calles when unmount---');
        fetchApi();
    }

}, [])
*/



//############################QUESTION NO: 8
/*

##React routing concept two page??

//1. main.js======== 
    import {BrowserRouter} from 'react-router-dom';
    <BrowserRouter>
        <App/>
    </BrowserRouter>

//2. make three component
    import React, { Component } from 'react';

    class Home extends Component {
    render() {
        return (
            <div>
            <h2>Home</h2>
            </div>
        );
    }
    }
    export default Home;


    class About extends Component {
    render() {
        return (
            <div>
            <h2>About</h2>
            </div>
        );
    }
    }

    export default About;

//3  Register the routes in the App.js file.
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
    </Router>
*/






//############################QUESTION NO: 9
//# React Rendering part handling error??

//for class component -----------componetDidCatch(err){}
//for function component--------- 




//############################QUESTION NO: 10
//#React lazy loader user React project??

/*
lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching .

const myComponent = React.lazy(() => import('./myComponent'));

const funcComponent = () => {
    <div>
        <myComponet/>
    </div>
}
*/





//############################QUESTION NO: 12
//#var, let, const for details???
/**
1.  The scope of a var variable is functional scope.
    The scope of a let variable is block scope.
    The scope of a const variable is block scope.

2.  It can be declared without initialization.                It can be declared without initialization                   It cannot be declared without initialization.
 */





//############################QUESTION NO: 13

/*
obj1 = {a: 10};
const obj2 = obj1;
obj2.a = 10;
console.log(obj1);
console.log(obj2);
let obj1;

solution

obj1 = {a: 10};
const obj2 = {...obj1};
obj2.a = 20;
console.log(obj1);
console.log(obj2);
let obj1; 
*/




//############################QUESTION NO: 14
//#console.log(mul(2)(3)(4));
/*
function mul(a){
    return function (b) {
        return function (c) {
            return a*b*c;
        }
    }
}
console.log(mul(4)(3)(4));

for arrow function 
const mul = a => {
    return b => {
        return c => {
            return a*b*c;
        }
    }
}
console.log(mul(2)(3)(4));
*/




//############################QUESTION NO: 15
/*
var arr = [1, 2, 3, 4, 5, 6, 6,1];
var ones = arr.filter(val => {
    return val === 1;
})
console.log(ones.length);
*/




//############################QUESTION NO: 16
//#array filtering??
/**
 The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.

array.filter(function(currentValue, index, arr), thisValue)

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
 */





//############################QUESTION NO: 17
/**
 ##Can you tell me react hook??
 Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class.

 ##Rules of Hooks??
 1.Only call Hooks at the top level
 2.Only call Hooks from React functions
 3.Don't call hook inside loop,condition
 */





//############################QUESTION NO: 18
/**
 ##Tell me a redux architecture??

 */





//############################QUESTION NO: 19
/*
##Tell me about a pure component???
A function is called pure function if it always returns the same result for same argument value and it has no side effects ike modifying an argument or outputing something.

example of pure function: strlen(), pow(), sqrt() etc;
*/






//############################QUESTION NO: 20
/*
##React component details???
Component are building block of any react app! 

1) stateless Component -> functional component -> take props and return jsx.
import React from 'react';

const myCom = (props) => {
    return {
        <div>

        <p>{props.first_name}</p>

        <p>{props.last_name}</p>

        </div>
    }
}
export default myCom;


2) statefull component -> class component -> Just define class that extends component and has a render function which return jsx.

*/





//############################QUESTION NO: 21
/*
## React lifecycle method??
Each component in react has a lifecycle which you can monitor and manipulate during it's there main phases. mounting, updating and unmounting!!!!!!
mounting = useEffect
updating = 
unmounting =

*/






//############################QUESTION NO: 22
/*
## Connect redux to component??

The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
*/





//############################QUESTION NO: 23
/*
## How to use redux thunk middleware??
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.


*/





//############################QUESTION NO: 24
/**
 ##What is reducer and how it is use??
 The reducer is a pure function that accepts 2 parameters: the current state and an action object. Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.
 */





//############################QUESTION NO: 25
/*## Tell me about a pure function??
    A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

*/






//############################QUESTION NO: 26
/*
##What are higher order component??

A higher order component is a function that takes a component and return a new component. higher order components can be used for many use casses as below, code reuse, high jscking, state and props manupulation.
*/

//############################QUESTION NO: 27
/*
##React Fragment??
    A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
    <React.Fragment>
        <child/>
    </>
*/






//############################QUESTION NO: 28
/*
##Context api in react??
    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
*/






//############################QUESTION NO: 29
/*
##Diffrent based on creating object in like js??
    You can create an object in three different ways:

    * Using object literal.
    * By creating instance of Object directly.
    * By using constructor function.
*/
//############################QUESTION NO: 30
/*
##Tell me about useRef??
    useRef returns a mutable ref object whose . current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its
    
    function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
    }.
*/
//############################QUESTION NO: 31
/*
##Tell me about a constructor pattern??
    a constructor is a special method used to initialize a newly created object once memory has been allocated for it. In JavaScript, as almost everything is an object, we're most often interested in object constructors.

    function Car( model, year, miles ) {

    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
    }

    // Usage:

    // We can create new instances of the car
    var civic = new Car( "Honda Civic", 2009, 20000 );
    var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

    // and then open our browser console to view the 
    // output of the toString() method being called on 
    // these objects
    console.log( civic.toString() );
    console.log( mondeo.toString() );
*/






//############################QUESTION NO: 32
/*
##Tell me about a promise??
    The Promise object supports two properties: state and result. While a Promise object is "pending" (working), the result is undefined. When a Promise object is "fulfilled", the result is a value. When a Promise object is "rejected", the result is an error object.

    let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
    });

    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
    function(value) {  code if successful  },
    function(error) {  code if some error }
    );
*/






//############################QUESTION NO: 33
/*
##What about html, js, css??
    HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements.
*/






//############################QUESTION NO: 34
/*
##What diffrent let, var??
        let-------------------------	var
    let is block-scoped.	var is function scoped.
    let does not allow to redeclare variables.	var allows to redeclare variables.
    Hoisting does not occur in let.	Hoisting occurs in var.
*/






//############################QUESTION NO: 35
/*
##What is event loop??
    JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
*/






//############################QUESTION NO: 36
/*
##What diffrent setTimeout and setIntervel??
setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

var intervalID = setInterval(alert, 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.

setTimeout(alert, 1000); // Will alert once, after a second.

*/






//############################QUESTION NO: 37
/*
##What are the es6 feature you had used??
    ES6 comes with significant changes to the JavaScript language. It brought several new features like, let and const keyword, rest and spread operators, template literals, classes, modules and many other enhancements to make JavaScript programming easier and more fun.
*/






//############################QUESTION NO: 38
/*
##Where you rest operator mostly used??

*/






//############################QUESTION NO: 39
/*
##Array.reverse used??
    The rest operator typically gets used as a prefix of the destructuring assignment's last variable.

    // Define a function with two regular parameters and one rest parameter:
    function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
    }

    // Invoke myBio function while passing five arguments to its parameters:
    myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

    // The invocation above will return: ["CodeSweetly", "Web Developer", "Male"]
*/






//############################QUESTION NO: 40
/*
##What are shallowcoppie and deepcoppie??
    
    Shallow copies duplicate as little as possible. A shallow copy of a collection is a copy of the collection structure, not the elements. With a shallow copy, two collections now share the individual elements.

    Deep copies duplicate everything. A deep copy of a collection is two collections with all of the elements in the original collection duplicated.

*/






//############################QUESTION NO: 41
/*
##What are clousore??
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

    function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
    }

    const myFunc = makeFunc();
    myFunc();

*/






//############################QUESTION NO: 42
/*
##What is the diffrent reduce and map functions??

The map() function returns a new array through passing a function over each element in the input array. This is different to reduce() which takes an array and a function in the same way, but the function takes 2 inputs - an accumulator and a current value.

map example::
    const square = x => x * x
    console.log([1, 2, 3, 4, 5].map(square))
    ANS::
    [1,4,9,16,25]


reduce example::
    const numbers = [1, 2, 3, 4, 5]

    console.log(numbers.reduce(function (acc, current) {
    return acc + current
    }, 0)) // < Start with 0

    // Calculate the product
    console.log(numbers.reduce(function (acc, current) {
    return acc * current
    }, 1)) // < Start with 1

    ANS:: 15, 120
*/






//############################QUESTION NO: 43
/*
##What is diffrent between promise and callback functions??
    Callbacks are functions passed as arguments into other functions to make sure mandatory variables are available within the callback-function's scope. Promises are placeholder objects for data that's available in the future.



*/





//############################QUESTION NO: 44
/*
##What is the possitioning attributes in css like fixed, absoulute are you used??
    An element with position: absolute; is positioned relative to the nearest positioned ancestor. However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

    <div id="relative-layer">
        <div id="fixed-layer">
        </div>
    </div>


    #relative-layer {
        position:relative;
    }

    #fixed-layer {
        position: fixed;
        margin-top: 10px;
        margin-left: 10px;
    }
*/






//############################QUESTION NO: 45
/*
##What is flexbox??

    Flexbox is a layout model that allows elements to align and distribute space within a container. Using flexible widths and heights, elements can be aligned to fill a space or distribute space between elements, which makes it a great tool to use for responsive design systems.
*/






//############################QUESTION NO: 46
/*
##what is diffrent between display none and visible hidden??
    display:none means that the tag in question will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between the other tags. visibility:hidden means that unlike display:none, the tag is not visible, but space is allocated for it on the page.
*/






//############################QUESTION NO: 47
/*
##How you use usememo and useCallback??

*/
//############################QUESTION NO: 48
/*
##What are classbased lifecycle method in react??

*/
//############################QUESTION NO: 49
/*
##How you able to componentDidmount in functional component??


*/
//############################QUESTION NO: 50
/*
##Tell me about javascript currieng??

*/
//############################QUESTION NO: 51
/*
##Why are you use Redux??

*/
//############################QUESTION NO: 52
/*
##How Redux work??

*/
//############################QUESTION NO: 53
/*
##What is the purpose of redux middleware in react??

*/
//############################QUESTION NO: 54
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/
//############################QUESTION NO: 26
/*
##

*/













//############################QUESTION NO: 65

// const ip = [2, 4, 5, 6, 7, 8, -9];
// const getMaxNumber = (array) => {
//     if(!array.length) {
//         throw new Error("Input array is empty");
//     }
//     let maxNum = array[0];
//     for(const item of array) {
//         if(item && item> maxNum) {
//             maxNum = item;
//         }
//     }
//     return maxNum;

// }
// //there was problem with the variable name thats why i have update it latter
// const result = getMaxNumber(ip);
// console.log("result:", result);
// const addThreeNum = (a, b, c) => {
//     return a + b + c;
// }



// const fetchTheData = (url) => {
//     return fetch(url);
// }

// fetchTheData("https://api.twitter.com")
//     .then((response) => response.json())
//     .then ((data) => {
//         const result = data.map(item => {
//             return item.capsule_serial;
//         })
//         console.log("result", result);
//     })





//############################QUESTION NO: 67
// const findClosetinArray = (arr, val) => {
//     if(arr.length >= 1) {
//         let minDiff = Math.abs(val-arr[0]);
//         let closetVal = arr[0];

//         for(let i = 0; i< arr.length; i++) {
//             let diff = Math.abs(arr[i] - val)
//             if(diff < minDiff) {
//                 minDiff = diff;
//                 closetVal = arr[i];
//             }
//         }
//         return closetVal
//     }
//     return "Empty input array"
// }
// const inArr = [10, 5, 2, 1, 5, 13, 14, 22]
// const targetVal = 12
// let op = findClosetinArray(inArr, targetVal)
// console.log(op);//13





//############################QUESTION NO: 124
// let a = {
//     name: "test"
// }
// let b = {...a}
// b.name = "test"
// console.log(a.name);
// console.log(b.name);





//############################QUESTION NO: 125
// let a = {
//     name: "test",
//     add: {
//         code: 1
//     }
// }
// let b = {...a}
// b.add.code = 2;
// console.log(a.add.code);
// console.log(b.add.code);





//############################QUESTION NO: 126
// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }
// x();





//############################QUESTION NO: 128
//const [user, setUser] = useState([]);
// const appLink = 'http://localhost/data'
// useEffect(() => {
//     async function fetchAPI(){
//         fetch(appLink)
//         .then((res) => res.json())
//         .then(res => setUser(res))
//         .catch(err => console.error(err))
//     }
//     fetchAPI();
// }, [])

// user?.map((data, i) => {
//     <p key={i}>{data.firstName}</p>
// })





//############################QUESTION NO: 133
// var f = "8"
// let a = 1
// console.log((+f) + a + 1);





//############################QUESTION NO: 134
// const [empName, setEmpName] = useState("");
// const inputRef = createRef(null);

// const handleOnChange = (event) => {
//     const {value} = event.target;
//     setEmpName(value;)
// }
// <div>
//     <input ref="inputRef" type="text" value="empName"/>
//     <select>
//         {emp.map((item) => {
//             return <option/>
//         })}
//     </select>
// </div>
