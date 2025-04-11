import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Data = () => {
  const [items, setItems] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [search, setSearch] = useState("");

  let itemsperpage = 5;

  const fetching = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setItems(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetching();
  }, []);

  const searchItem = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  let lastIndex = currentpage * itemsperpage;
  let firstIndex = lastIndex - itemsperpage;
  let currentItems = searchItem.slice(firstIndex, lastIndex);
  return (
    <div>
      <h1>Pagination with searching ..</h1>
      <input
        type="text"
        placeholder="search here...."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {/* {items.length} */}
        {currentItems.map((user) => (
          <li >
            <span> {user.title}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setcurrentpage(currentpage - 1)}>prev{currentpage}</button>
      <button onClick={() => setcurrentpage(currentpage + 1)}>Next{currentpage+1}</button>
    </div>
  );
};

export default Data;
