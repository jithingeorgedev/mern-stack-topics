

import { useState, useEffect } from "react";

const HtmlCssTopics = () => {
  const topics = [
    { topic: "Target attribute" },
    { topic: "Justify content and align-items in depth Css specificity" },
    { topic: "Meta tags" },
    { topic: "Semantic tags" },
    { topic: "Input types" },
    { topic: "Iframe" },
    { topic: "Pseudo elements" },
    { topic: "Flexbox" },
    { topic: "Z-index" },
    { topic: "Position: relative" },
    { topic: "Display: none" },
    { topic: "Differences between HTML and XHTML" },
    { topic: "Difference between the <nav> and <ul> elements" },
    { topic: "Web Storage" },
    { topic: "A tag" },
    { topic: "Attributes" },
    { topic: "Box model in CSS" },
    { topic: "Difference between inline and inline-block display styles" },
    { topic: "Handle browser compatibility issues in CSS" },
    { topic: "Concept of flexbox layout" },
    { topic: "Difference between display: none and visibility: hidden" },
    { topic: "Selectors priority" },
    { topic: "Flex properties" },
    { topic: "Overflow" },
    { topic: "Viewport" },
    { topic: "Pseudo classes" },
    { topic: "Code comment" },
    { topic: "Diff between Html & HTML5" },
    { topic: "Inline elements & block elements" },
    { topic: "Explore dev tools & keyframes" },
    { topic: "Em vs rem" },
    { topic: "Features of HTML5" },
    { topic: "Doctype" },
    { topic: "Combinators" },
    { topic: "Pseudo classes vs pseudo elements" },
    { topic: "Attribute selector" },
    { topic: "Box sizing" },
    { topic: "Absolute vs relative units" }
  ];

  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [explanationData, setExplanationData] = useState<string | null>(null);

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
      <h1 className="text-2xl font-bold mb-4 text-center">HTML & CSS Topics</h1>

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
              onClick={() => explanation(t.topic)} // 👈 this triggers Google search
              className="p-4 bg-white border rounded-xl shadow hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <p className="text-gray-700 font-medium text-sm">{t.topic}</p>
            </div>
          ))}

        </div>
      </div>


    </div>
  );
};

export default HtmlCssTopics;
