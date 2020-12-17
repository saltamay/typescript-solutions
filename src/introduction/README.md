### Introduction

# JavaScript to TypeScript

JavaScript was introduced in 1995 as a small scripting language for simple web pages in browsers. It wasn’t until 1999 that JavaScript was capable of supporting the kinds of dynamic web pages we see today, and using JavaScript that way wasn’t common practice until 2005.

To serve its original use-case, JavaScript was designed to be very flexible and easy to use for small applications. These features make JavaScript a great first language to learn, but they also make it less-than-ideal for building larger-scale applications with hundreds or even thousands of files. Stricter programming languages will inform the developer when they change one area of code in a way that will break other areas. JavaScript will not, which often leads to unexpected behaviour at runtime.

To address these shortcomings, Microsoft developed TypeScript and released it publicly in 2012 to blend the flexibility of JavaScript with the advantages of a stricter language.

TypeScript is an open-source programming language that adds types to JavaScript. It helps us spot potential bugs and help refactor our code. In addition, types provide a way to describe the shape of an object, resulting in clarity in the structure of our code,  allowing us to validate that our code is working correctly. Also, TypeScript allowed developers to use newer JavaScript language features, such as arrow functions and classes, years before they were added to JavaScript officially.

Today, TypeScript is one of the most loved languages in the world, from open source projects such as Angular and Webpack to large-scale development at Amazon and Google.

# How to use TypeScript?

So now that we know why TypeScript exists, let’s talk about how we use it:

- First, we write TypeScript code in files with the extension .ts.
- Next, we run our code through the TypeScript transcompiler. The transcompiler will check that the code adheres to TypeScript’s standards, and it will display errors when it does not.
- If the TypeScript code can be converted into working JavaScript, the transcompiler will output a JavaScript version of the file (.js).

TypeScript code is a superset of JavaScript code—it has all the features of traditional JavaScript but adds some new features.

Given this TypeScript code as input:

# Configuring TypeScript

To use Typescript, we need to install it through two installation routes depending on how you intend to use it:

1. Install TypeScript on a per-project basis. This allows us to have many projects with many different versions of TypeScript.

via npm

TypeScript is available as a package on the npm registry available as "typescript".

You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.
npm install typescript --save-dev

All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:
npx tsc


2. Typescript can also be installed globally to make it available accross all projects.

via npm

You can use npm to install TypeScript globally, this means you can use the tsc command anywhere in your terminal.

To do this, run npm install -g typescript. This will install the latest version (currently 4.1).

An alternative is to use npx when you have to run tsc for one-off occasions.

## Sample tsconfig.json

TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system. TypeScript has so many great features that come by default such as checking for syntax errors, or providing tooltips that show you why some code might throw an error. TypeScript also recognizes the need for flexibility. 