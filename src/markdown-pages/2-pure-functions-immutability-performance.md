---
slug: "/blog/pure-functions-immutability-performance"
date: "2020-07-14"
title: "Brief about pure functions, immutability, and performance.
"
---

When you create a pure function is JavaScript, you should not access its outer scope variables (**state**), even though this is one of the main features of the language.

The reason is that accessing a state can cause an accidental change of the return value of the function regardless of the parameters that were passed to it, thus breaking predictability of a program.

It is a responsibility of a developer to restrain reading only parameters of the function (and never modify them) but not all other variables that are within its reach.

Modification of parameters is not a problem for primitive types since they are constants by definition and you can't them from within the function. However, for non-primitives (object or array) – you have to be extra careful to avoid accidental modification of data:

```javascript
const scores = [6, 3, 8, 1, 4]

const sortRandomly = (array) =>
  [...array].sort((_) => Math.round(Math.random() * 2) - 1)

console.log(sortRandomly(scores)) // [8, 1, 6, 3, 4]
```

Here the `scores` array is cloned inside `sortRandomly` function because `sort` method mutates original array, and it's a side effect, which we avoid.

For a long time, it was part of the nature of things for me.

In languages like Elm, _**all** values are constants_. And because they never change, it is safe to read them from an outer scope (state). Neither any other code nor the current function can modify them, so the fact of true immutability already gives a boost to the function purity.

Of course, accessing the DOM, or receiving data from HTTP is yet something to be careful about.

Therefore immutability, on the one hand, can bring better predictability of program behavior. More over, in certain cases, it gives some performance advance when checking whether the object has changed (JavaScript). But on the other hand, it can lead to performance and space tradeoffs when adding data to complex data structures - like arrays.

For Elm, this problem is eliminated by the fact that it remembers the reference to the original structure of a list, and the newly constructed list object contains a new value and the rest as a pointer to the old one.

![Elm. Prepend item to the list.](/blog/elm-list-prepend.svg "Elm. Prepend item to the list.")

The list syntax in Elm resembles JavaScript arrays, the big difference is that lists in Elm are immutable (of course) and do not support accessing elements by index – at least not in its standard library version.

Most JavaScript engines provide an optimization technique that is called Shapes (in V8). Since JavaScript is a dynamically-typed language, the objects can have properties added or deleted from it at runtime, so there’s no way for the runtime to construct a fixed data structure before executing.

However, to generate efficient code, the compiler creates a Hidden Class (Shape) for the object or array, this hidden class contains information about the object layout, which enables optimizations when multiple objects are created and modified in the same sequence of steps.
