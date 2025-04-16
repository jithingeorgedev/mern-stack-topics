'use client'
import { useState } from "react";

const JsAdvanced = () => {
    const topics = [
        { topic: "Currying" },
        { topic: "Call, apply, bind" },
        { topic: "Arrow function vs regular function" },
        { topic: "Shallow copy vs deep copy" },
        { topic: "Object.freeze" },
        { topic: "Object.seal" },
        { topic: "Object prototypes" },
        { topic: "Prototypal inheritance" },
        { topic: "Proxy object" },
        { topic: "WeakSet" },
        { topic: "WeakMap" },
        { topic: "What is the difference between for..of and for..in?" },
        { topic: "Template literals (Template strings)" },
        { topic: "Mutable vs immutable" },
        { topic: "Optional chaining" },
        { topic: "Nullish coalescing operator" },
        { topic: "Operator used for achieving shallow copy" },
        { topic: "Remove null, undefined from an array (task)" },
        { topic: "Remove duplicate elements from an array, use Set (task)" },
        { topic: "While vs Do while" },
        { topic: "Exception handling in JS" },
        { topic: "Pure function" },
        { topic: "Generator function" },
        { topic: "Callback Hell" },
        { topic: "HOF examples" },
        { topic: "IIFE" },
        { topic: "Spread vs Rest operator" },
        { topic: "Type casting" },
        { topic: "Instanceof" },
        { topic: "Map vs Set" },
        { topic: "Array.map vs reduce" },
        { topic: "Inheritance in JS" },
        { topic: "Continue" },
        { topic: "BOM" },
        { topic: "Uses of JS" },
        { topic: "Operator" },
        { topic: "forEach" },
        { topic: "Not a Number" },
        { topic: "Memoization" },
        { topic: "Asynchronous" },
        { topic: "Let vs const" },
        { topic: "Hoisting in arrow function" },
        { topic: "Hoisting in var and let" },
        { topic: "Closure" },
        { topic: "Promise" },
        { topic: "Reverse a string" },
        { topic: "Var vs let" },
        { topic: "Result of pending state in promise" },
        { topic: "Passed by reference" },
        { topic: "Event bubbling" },
        { topic: "Callback queue" },
        { topic: "Event listeners" },
        { topic: "Explain Closures in JavaScript" },
        { topic: "DOM" },
        { topic: "Identifiers" },
        { topic: "Why JavaScript" },
        { topic: "Statically vs Dynamically Typed" },
        { topic: "Keywords" },
        { topic: "CDN vs Download" },
        { topic: "States in promise" },
        { topic: "Promises" },
        { topic: "Single vs Multi Thread" },
        { topic: "Event Listener" },
        { topic: "Ternary operators" },
        { topic: "Event Emitters" },
        { topic: "Synchronous vs Asynchronous" },
        { topic: "Temporal Dead Zone" },
        { topic: "Event delegation" },
        { topic: "Explicit vs Implicit Type Coercion" },
        { topic: "Scope and types of scope" },
        { topic: "Sum of values in an array using while, forEach & reduce" },
        { topic: "Array methods" },
        { topic: "Example of Promise" },
        { topic: "Array cloning" },
        { topic: "Spread operator" },
        { topic: "Map, forEach and reduce()" },
        { topic: "Filter" },
        { topic: "Callback" },
        { topic: "String methods" },
        { topic: "Memoization" },
        { topic: "Promise, promise methods" },
        { topic: "Types of conversion - int, parse" },
        { topic: "Conditional statement" },
        { topic: "Prototype" },
        { topic: "Instance()" },
        { topic: "Class, object, object methods" },
        { topic: "Object destructuring" },
        { topic: "Variable typing" },
        { topic: "Event Loop" },
        { topic: "Call stack" },
        { topic: "Global Execution context" },
        { topic: "Shadowing" },
        { topic: "This" },
        { topic: "One-liners" },
        { topic: "Identifiers: name that we give to entities like variables, functions, class" },
        { topic: "Keywords: var, let, const, if, else, etc." },
        { topic: "Callback: A callback is a function passed as an argument to another function." },
        { topic: "Map: Collection of keyed data items, just like an Object, but map allows any type of Keys." },
        { topic: "Synchronous: A program executed sequentially, one at a time." },
        { topic: "Asynchronous: Asynchronous code allows the program to be executed behind the scenes." },
        { topic: "Statically Typed: Type checking occurs at compile time." },
        { topic: "Dynamically Typed: Type checking occurs at runtime or execution time." },
        { topic: "Single thread" },
        { topic: "Multi thread" },
        { topic: "Promise: An object used to handle asynchronous operations." },
        { topic: "TDZ: The phase between the start of block execution and initialization of let or const variables." },
        { topic: "Lexical Scope" },
        { topic: "JS is dynamically typed" },
        { topic: "Primitive vs non-primitive data types (partial)" },
        { topic: "Regular function vs arrow function (partial)" },
        { topic: "Escape sequence" },
        { topic: "Array vs set" },
        { topic: "Array.flat()" },
        { topic: "Pure function (partial)" },
        { topic: "Promise - understand better" },
        { topic: "Interpreted language" },
        { topic: "Temporal dead zone" },
        { topic: "Scope and use of var, let, and const" },
        { topic: "Logical Operators" },
        { topic: "Mode operator" },
        { topic: "jQuery" },
        { topic: "Async await" },
        { topic: "Coercion and its types" },
        { topic: "Callback function" },
        { topic: "Foreach" },
        { topic: "Code" },
        { topic: "Array functions" },
        { topic: "Reduce" },
        { topic: "Event Delegation" },
        { topic: "Event Propagation" },
        { topic: "Object" },
        { topic: "Prototype" },
        { topic: "Print numbers in reverse order from 100 to 1 with one second delay" },
        { topic: "Generator functions" },
        { topic: "Callbacks" },
        { topic: "Array reduce" },
        { topic: "Promises" },
        { topic: "Memorization" },
        { topic: "Async/await" },
        { topic: "Higher Order Component" },
        { topic: "Destructuring" },
        { topic: "Polyfills" },
        { topic: "Debouncing" },
        { topic: "This keyword" },
        { topic: "Promise.all" }
    ];
    

    const [search, setSearch] = useState("");

    const filteredTopics = topics.filter(t =>
        t.topic.toLowerCase().includes(search.toLowerCase())
    );

    const explanation = async (topic: string) => {
        const encodedTopic = encodeURIComponent(topic);
        const url = `https://www.google.com/search?q=${encodedTopic}`;
        window.open(url, '_blank'); // open in new tab
      };
    

    return (
        <div className="p-4 max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Javascript Advanced</h1>

            <input
                type="text"
                placeholder="Search topic..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full p-2 mb-6 border rounded-lg shadow-sm"
            />

            {/* Scrollable Container */}
            <div className="h-[400px] overflow-y-auto border rounded-xl p-4 shadow-inner bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredTopics.map((t, i) => (
                        <div
                            key={i}
                            onClick={() => explanation(t.topic)}
                            className="p-4 bg-white border rounded-xl shadow hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-gray-700 font-medium text-sm">{t.topic}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JsAdvanced;
