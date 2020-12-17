# TypeScript Mastery

Learn TypeScript, a superset of JavaScript that makes building large-scale applications a breeze!

## Why TypeScript?

Errors are detected without running code; TypeScript is a programming language that extends JavaScript by adding types which allows you to keep the syntax of the popular JavaScript language while creating programs that are less error-prone. TypeScript helps you save time catching errors and providing fixes before you run code.

Consider this example:

```
    const a = 0;
    const b = '1';
    const result = a * b;
```

For the third line, we get this warning in VScode or any other IDE with TypeScript integration:

```
    The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
```

TypeScript provides additional layer of documentation; TypeScript makes JavaScript easier to understand by laying out exact specifications for what data your program expects and what it’ll output. 

Consider these two examples:

```
    /**
    * @param {number} num - The number to convert to string
    * @returns {string} `num`, converted to string
    */
    function toString(num) {
        return String(num);
    }
```
Commenting and documentation is something many engineers do, anyway. However, if we use TypeScript, we get the added benefit of this information being checked on the fly while coding:

```
    function toString(num: number): string {
        return String(num);
    }
```

So if we try to do something like this:

```toString(false)```

We get this warning:

```Argument of type 'false' is not assignable to parameter of type 'number'.```

By using TypeScript, you’re gaining a lot of functionality that isn’t offered by JavaScript alone. Finally, adopting TypeScript does not have to be a binary choice; TypeScript allows you to determine how strict it should be when enforcing these types. 

## Learning Outcomes 

You will learn how to apply TypeScript’s type system usin JavaScript syntax that you already know. This applies to storing values of specific data types in variables, checking the types of function arguments, making sure that elements in arrays are all consistent types, and more! 

# Outline

1. Introduction
1. Types
    Learn TypeScript, a superset of JavaScript that makes building large applications a breeze!
2. Functions
3. Complex Types
4. Union Types
5. Type Narrowing
6. Advanced Object Types