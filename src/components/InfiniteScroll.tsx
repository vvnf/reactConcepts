import React, { useEffect, useState, useCallback } from "react";
import throttle from "lodash/throttle";
type Joke = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function InfiniteScroll() {
  //     const fetch = require('node-fetch');
  const [page, setPage] = useState(1);
  const [jokes, setJokes] = useState<Joke[]>([]);
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const [loading, setLoading] = useState(false);

  // try {
  //   const response = await fetch(url, options);
  //   const data = await response.json();
  //   console.log(data);
  // } catch (error) {
  //   console.error(error);
  // }

  //const jokes = fetch(url)

  const fetchData = async (page) => {
    setLoading(true);
    const response = await fetch(url, options);
    const jokesArray = await response.json();
    setJokes((prevJokes) => [...prevJokes, ...jokesArray]);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    //return data;
  };

  const handleScroll = useCallback(
    throttle(() => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - 10
      ) {
        console.log("Reached end of page");
        setPage((prev) => prev + 1);
      }
    }, 500),
    []
  );

  useEffect(() => {
    console.log("page", page);
    fetchData(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-1/2 bg-gray-400 p-4 m-4 rounded-md shadow-md">
      <h2>Scroll to the last of this list- Throttle Example -- </h2>
      {jokes.map((joke) => (
        <div
          key={joke.id}
          className="bg-white text-black p-4 m-2 rounded-md shadow-md"
        >
          <h3 className="text-lg font-bold">{joke.title}</h3>
          <p>{joke.body}</p>
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroll;
