# Problems during the lecture

- Sum of 0 to 100
- Fibonacci series
- Triangle Pattern

## Solution

```javascript
// Sum of 0 to 100
function sumOfRange() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfRange()); // Output: 5050

// Fibonacci Series - Approach 1
function fibonacci(num) {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i <= num; i++) {
    console.log(a);
    c = b;
    b = a + b;
    a = c;
  }
}

fibonacci(10); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// Fibonacci Series - Approach 2 (Using Recursion)
function fibonacciRecursive(num) {
  if (num <= 1) return num;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

for (let i = 0; i <= 10; i++) {
  console.log(fibonacciRecursive(i));
}

// Triangle Pattern
function printTriangle(rows) {
  let output = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      output += "* ";
    }
    output += "\n";
  }
  console.log(output);
}

printTriangle(5);

/*
Output:
* 
* * 
* * * 
* * * * 
* * * * * 
*/

// break into function

function print_row(row) {
  var start_time = "";
  for (var i = 0; i < row + 1; i++) {
    start_time += "**";
  }
  return start_time;
}

function print_triangle(column) {
  for (var i = 0; i <= column; i++) {
    console.log(print_row(i));
  }
}

print_triangle(5);
/*

**
****
******
********
**********
************

*/
```


```
# Single-Threaded Behavior in JavaScript

JavaScript is single-threaded, meaning it executes one task at a time in a single call stack. This means that even if a machine has multiple cores, JavaScript can only utilize one core at a time for processing tasks.

## Single-Threaded Execution Example

```javascript
let sum = 0;
for (var i = 0; i < n; i++) {
    sum += 1;
}
return sum;
```

In this example, the loop runs sequentially, one iteration at a time, and utilizes only one core of the machine.

## Asynchronous Operations in JavaScript

JavaScript handles asynchronous operations using event loop and callback functions. Asynchronous operations allow non-blocking execution, enabling JavaScript to perform tasks such as I/O operations and network requests without halting the execution of other tasks.

### Example of Asynchronous Operation

```javascript
readFromAFile();
```

In this example, `readFromAFile()` initiates a file reading operation, and JavaScript continues executing other tasks without waiting for the file reading to complete. Once the file reading operation is finished, a callback function is triggered to handle the result.

## Multi-Core Utilization in Asynchronous JavaScript

Asynchronous JavaScript operations can still run on a single core but may utilize multiple cores indirectly through the operating system's scheduling of tasks. Node.js, for example, can leverage worker threads to execute CPU-intensive tasks in parallel.

### Example of Asynchronous Operation with Multi-Core Utilization

```javascript
const startTime = new Date().getTime();
complexFn(10000000 / 10);
const endTime = new Date().getTime();
console.log((endTime - startTime) / 10000);
```

In this example, `complexFn()` is a CPU-intensive task that is executed asynchronously. While JavaScript is single-threaded, Node.js can distribute the workload across multiple threads or processes, potentially utilizing multiple cores for parallel execution.
```
```

# Comparison of Strongly Typed (Java) and Loosely Typed (JavaScript) Nature

Java and JavaScript have different type systems, with Java being strongly typed and JavaScript being loosely typed. Let's compare how they handle variable assignments:

## Strongly Typed Nature in Java

In Java, variables are declared with a specific type, and they can only hold values that are compatible with that type. Once a variable is declared with a certain type, it cannot be reassigned to a different type.

### Example in Java

```java
int num = 10; // num is declared as an integer
String str = "Hello"; // str is declared as a string

// Compilation error: incompatible types
// str = 20; // Cannot assign an integer value to a string variable


```

# Comparison: Native JavaScript vs API JavaScript

## Native JavaScript

Native JavaScript refers to the core language features and functionalities built into the JavaScript runtime environment. These features include data types, control structures, functions, and object-oriented programming constructs.

### Example of Native JavaScript

```javascript
// Example of native JavaScript code
let message = "Hello, world!";
console.log(message);
```

## API JavaScript

API JavaScript refers to external libraries, frameworks, and APIs (Application Programming Interfaces) that extend the capabilities of JavaScript beyond its native features. These APIs provide additional functionality for tasks such as DOM manipulation, HTTP requests, and data processing.

### Example of API JavaScript

```javascript
// Example of using the Fetch API to make an HTTP request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Differences between APIs in Node.js and the Browser

### Node.js APIs

Node.js provides APIs for server-side programming, file system operations, networking, and access to operating system functionalities. These APIs are designed to work in the Node.js runtime environment and are not available in web browsers.

### Node.js APIs Examples
Below are some commonly used Node.js APIs along with code examples.

## HTTP Server Example

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

## File System Operations Example
```javascript
const fs = require('fs');

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write to a file
fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
```


### Browser APIs

Web browsers provide APIs for interacting with the Document Object Model (DOM), making HTTP requests (e.g., Fetch API), handling events, and accessing browser-specific functionalities such as local storage and geolocation. These APIs are designed to work in the browser environment and are not available in Node.js.

## Role of ECMAScript (ES)

ECMAScript is the standardized specification for JavaScript. It defines the syntax, semantics, and core features of the language. ECMAScript versions, such as ES5, ES6 (ES2015), ES2016, etc., introduce new language features and functionalities that are implemented by JavaScript engines.

### Example of ECMAScript Features

```javascript
// Example of using ES6 features like arrow functions and template literals
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('world'));
```

## Conclusion

Native JavaScript provides the core language features, while API JavaScript extends its capabilities through external libraries and frameworks. Node.js and web browsers offer different sets of APIs tailored for server-side and client-side development, respectively. ECMAScript defines the language standards and introduces new features to JavaScript.
```
