// JavaScript has several data types, 
// which can be divided into two main categories: 
//  Primitive Data Types and 
//  Non-Primitive Data Types.

// Primitive Data Types
// They are immutable, meaning their values cannot be changed once created.

// 1. Number: Represents both integers and floating-point numbers.

    let age = 30; // Integer
    let price = 19.99; // Floating-point number

    console.log(typeof age); // Output: "number"
    console.log(typeof price); // Output: "number"

// 2. String: Represents a sequence of characters.

    let name = "John Doe";
    let greeting = 'Hello, World!';

    console.log(typeof name); // Output: "string"
    console.log(typeof greeting); // Output: "string"\

// 3. Boolean: Represents a logical entity that can have two values: true or false.

    let isStudent = true;
    let hasLicense = false;

    console.log(typeof isStudent); // Output: "boolean"
    console.log(typeof hasLicense); // Output: "boolean"

// 4. Undefined: Represents a variable that has been declared but not assigned a value.

    let x;
    console.log(typeof x); // Output: "undefined"

// 5. Null: Represents the intentional absence of any object value.

    let y = null;
    console.log(typeof y); // Output: "object" (this is a quirk in JavaScript)
    

// 6. Symbol: Represents a unique and immutable identifier.
    let sym1 = Symbol('description');
    let sym2 = Symbol('description');   

    console.log(sym1 === sym2); // Output: false (each symbol is unique)

// 7. BigInt: Represents integers with arbitrary precision.
    let bigIntValue = 1234567890123456789012345678901234567890n;
    console.log(typeof bigIntValue); // Output: "bigint"

// Non-Primitive Data Types
// They are mutable, meaning their values can be changed after they are created.

// 1. Object: Represents a collection of properties and methods.

    let person = { name: "Alice", age: 25 }
    console.log(typeof person); // Output: "object"
    console.log(person.name); // Output: "Alice"

// 2. Array: Represents an ordered collection of values.

    let numbers = [1, 2, 3, 4, 5];
    console.log(typeof numbers);

// 3. Function: Represents a reusable block of code that performs a specific task.
    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(typeof greet); // Output: "function"
    console.log(greet("Bob")); // Output: "Hello, Bob!"