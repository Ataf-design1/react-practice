import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [characters, setCharacters] = useState([]);
    const [current , setCurrent] = useState(1)
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = await fetch("https://rickandmortyapi.com/api/character");
          const data = await res.json();
          setCharacters(data.results);
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      };
      fetchPosts();
    }, []);
    const totalCharPerPage = 6
    const totalPage = Math.ceil(characters.length/totalCharPerPage)
    

    const last = current* totalCharPerPage
    const first = last - totalCharPerPage

    const paginated = characters.slice(first , last+1)

    const handelPageChange = (pageNum) => {
        setCurrent(pageNum);
      };
  
    return (
      <>
<h1 style={{ textAlign: "center", margin: "1rem 0" }}>
        Rick and Morty Characters
      </h1>

      <div
        style={{
          display: "grid",
          background: "darkgrey",
          gridTemplateColumns: "repeat(3, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {paginated.map((item) => (
          <Link
            key={item.id}
            to={`/character/${item.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              background: "white"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h2 style={{ margin: "0.5rem 0" }}>{item.name}</h2>
            <p>Species: {item.species}</p>
            <p>Status: {item.status}</p>
          </Link>
        ))}
        <span> 
        <button onClick={()=>handelPageChange(current-1)} disabled={current === 1}>Previos</button>
        <button onClick={()=>handelPageChange(current+1)} disabled={current === totalPage}>Next</button>
        </span>
      </div>
      </>
    );
  }

  export default Home;