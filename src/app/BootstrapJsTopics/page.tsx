import { useState } from "react";

const BootstrapJsTopics = () => {
  const topics = [
    { topic: "Dom manipulation to change button text (not completed)" },
    { topic: "Grid sytem designing" },
    { topic: "Event propagation" },
    { topic: "Event bubbling" },
    { topic: "Mixins" },
    { topic: "Matches" },
    { topic: "Bootstrap wells" },
    { topic: "Carousel" },
    { topic: "Modal" },
    { topic: "Async and await" },
    { topic: "Onload and onunload" },
    { topic: "Temporal death Zone" },
    { topic: "Scope of variable" },
    { topic: "Template Literals" },
    { topic: "Hoisting" },
    { topic: "Understand form submission logic" },
    { topic: "Understand bootstrap classes" },
    { topic: "When to use let and var" },
    { topic: "Datatypes in javascript" },
    { topic: "Object" },
    { topic: "== vs ===" },
    { topic: "this" },
    { topic: "Class loaders" },
    { topic: "media query" },
    { topic: "Portfoli is not responsive" },
    { topic: "Email Validation issues" },
    { topic: "Clarity in datatypes" },
    { topic: "Offset in grid system bootstrap" },
    { topic: "e.preventDefault()" },
    { topic: "Synchronous or asynchronous - how and why" },
    { topic: "What are the scopes of a variable in JavaScript?" },
    { topic: "DOM need clarity - Dom manipulation" },
    { topic: "What is the output of 10+20+\"30\" in JavaScript?" },
    { topic: "Event listeners not done" },
    { topic: "Add validations in form" },
    { topic: "Google mail submission pending" },
    { topic: "HTML validations change to JS/jQuery" },
    { topic: "Mobile number should be 10 numbers" },
    { topic: "Not more than 10 or less than 10" },
    { topic: "Event listeners - form submission not handled" },
    { topic: "Make images under projects same size" },
    { topic: "Use more bootstrap components" },
    { topic: "Mob Navbar of public website should be added" },
    { topic: "Media queries" },
    { topic: "Give margin to submit button" },
    { topic: "SSL security is showing dangerous after hosting" },
    { topic: "BOM" },
    { topic: "Closure explanation" },
    { topic: "How bootstrap is working" },
    { topic: "Work out more - media queries, DOM manipulation" },
    { topic: "Set timeout" },
    { topic: "How to hide a div in bootstrap" },
    { topic: "Push and pop" },
    { topic: "Orientation type in media query" },
    { topic: "Script type = module" },
    { topic: "Learn more about addEventListener" },
    { topic: "HTML functions" }
  ];
  
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter(t =>
    t.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
    <h1 className="text-2xl font-bold mb-4 text-center">Bootstrap and Javascript Basics</h1>

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

export default BootstrapJsTopics;
