import React, { useState, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";

function DebounceInput() {
  const [searchQuery, setsearchQuery] = useState("");

  //solution using Debounce

  //solution ujsing setTimeout and clearTimeout without Debounce
  //   useEffect(() => {
  //     const handler = setTimeout(() => {
  //       console.log("searchQuery", searchQuery);
  //       if (searchQuery.trim()) {
  //         fetchSuggestions(searchQuery);
  //       }
  //     }, 1000); // 1 second debounce
  //     // Cleanup previous timeout on every keystroke
  //     return () => clearTimeout(handler);
  //   }, [searchQuery]);
  const fetchSuggestions = (searchQuery) => {
    console.log("Fetching suggestions for:", searchQuery);
  };

  const debouncedFetch = useMemo(() => debounce(fetchSuggestions, 1000), []);

  useEffect(() => {
    if (searchQuery.trim()) {
      debouncedFetch(searchQuery);
    } else {
      //setSuggestions([]);
      console.log("Clearing suggestions");
    }

    // Cleanup debounce on unmount
    return () => {
      debouncedFetch.cancel();
    };
  }, [searchQuery, debouncedFetch]);

  return (
    <div className="w-1/2 bg-gray-400 p-4 m-4 rounded-md shadow-md">
      <h2>Debounce example with inputt</h2>
      <p>Type something to see the debounce effect in action.</p>
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Type something..."
        onChange={(e) => {
          const value = e.target.value;
          setsearchQuery(value);
          //console.log(value);
        }}
      />
    </div>
  );
}

export default DebounceInput;
