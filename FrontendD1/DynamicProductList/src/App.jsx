import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [favs, setFavs] = useState(() => {
    const saved = localStorage.getItem("productFavs");
    return saved ? JSON.parse(saved) : [];
  });
  

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  // console.log(products)

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <img src={product.image} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
