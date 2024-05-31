"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";

const SingleFaq = ({ question, answer }) => {
  const faqref = useRef();
  const [componentHeight, setComponentHeight] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (faqref.current) {
      setComponentHeight(faqref.current.clientHeight);
    }
  }, [faqref.current]);
  return (
    <div className="w-full p-4 rounded-md bg-[#f7f8fd] cursor-pointer">
      <div
        onClick={() => setActive((prev) => !prev)}
        className="flex items-center justify-between w-full py-2"
      >
        <h2
          className={`text-base md:text-xl font-bold ${
            active ? "text-[#8247ff]" : ""
          } duration-200`}
        >
          {question}
        </h2>
        <button
          className={`text-[#8247ff] text-2xl ${
            active ? "rotate-45" : "rotate-0"
          } duration-200`}
        >
          <FaPlus />
        </button>
      </div>
      <div
        className={`w-full overflow-y-auto duration-200`}
        style={{ height: active ? componentHeight : 0 }}
      >
        <div ref={faqref} className="py-2">
          <p className="text-gray-500 text-base md:text-xl">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;
