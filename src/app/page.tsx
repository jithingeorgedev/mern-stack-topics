'use client'
import Navbar from '../app/components/page';
import { useEffect, useState } from 'react';
import HtmlCssTopics from './HtmlCssTopics/page';
import BootstrapJsTopics from './BootstrapJsTopics/page';
import JsAdvanced from './JsAdvanced/page';
import NodeJs from './NodeJs/page';
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}
export default function Home() {


  const [currentCategory, setCurrentCategory] = useState('html-css');

  const getTopicsComponent = () => {
    switch (currentCategory) {
      case 'html-css': return <HtmlCssTopics />;
      case 'bootstrap-js': return <BootstrapJsTopics />;
      case 'js-advanced': return <JsAdvanced />;
      case 'nodeJs': return <NodeJs />;
      default: return <HtmlCssTopics />;
    }
  };



  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);


  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-black text-white pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <section className="flex-1 py-12">
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Master These Topics Through Self-Learning and Complete Assigned Tasks</h1>
                <h1 className="text-3xl font-bold">Target an Average Salary of ₹5 LPA</h1>
                <p className="text-gray-400">Use the buttons below to navigate between various learning categories.</p>
              </div>

              {getTopicsComponent()}
            </section>

            {/* Ad Section */}
            <aside className="w-full lg:w-80 bg-gray-900 text-gray-200 p-6 rounded-lg">
              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-1430580431653083"
                data-ad-slot="5408500079"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </aside>


          </div>
        </div>

        {/* Category Selection Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-3 flex gap-4 overflow-x-auto">
            {[
              { id: 'html-css', label: 'HTML/CSS' },
              { id: 'bootstrap-js', label: 'Bootstrap/JS Basics' },
              { id: 'js-advanced', label: 'JS Advanced' },
              { id: 'nodeJs', label: 'Node JS' },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors
                  ${currentCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}