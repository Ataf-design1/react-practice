import { useEffect, useState } from "react";

const MiniEcom = () => {
  let [products, setproducts] = useState([]);
  let [currentpage, setcurrentpage] = useState(1);
  let [searchitem, setSearchitem] = useState("");
  const calling_api = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  };
  useEffect(() => {
    calling_api();
  }, []);


  let itemttobesearch = products.filter((item)=>item.title.toLowerCase().includes(searchitem.toLowerCase()))

  let itemperPage = 3;
  let lastpage = currentpage * itemperPage;
  let firstpage = lastpage - itemperPage;
  let paginateddata = itemttobesearch.slice(firstpage, lastpage);

  return (
    <>
      <input
        type="text"
        placeholder="Search Product Here...🔍"
        onChange={(e) => setSearchitem(e.target.value)}
      />

      {paginateddata.map((product) => (
        <div
          style={{
            border: "1px solid black",
            height: "300px ",
            width: "15%",
            padding: "30px",
            margin: "5px",
          }}
        >
          <h5>{product.title}</h5>
          <img
            style={{ height: "100px", width: "120px" }}
            src={product.image}
            alt=""
          />
          <p>{product.price}</p>
          <p>{product.category}</p>
          
        </div>
      ))}

      <button onClick={() => setcurrentpage(currentpage - 1)}>
        ⏮️{currentpage}
      </button>
      <button onClick={() => setcurrentpage(currentpage + 1)}>
        ⏭️{currentpage + 1}
      </button>
    </>
  );
};

export default MiniEcom;
