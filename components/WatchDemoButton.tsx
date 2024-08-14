"use client";

import React from "react";

const WatchDemoButton = () => {
  return (
    <button
      onClick={() =>
        window.open(
          "https://www.youtube.com/watch?v=QKW2EUOD9Hc&t=3s",
          "_blank",
        )
      }
      className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-200"
    >
      Watch Demo
    </button>
  );
};

export default WatchDemoButton;
