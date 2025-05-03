import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    fetchCharacter();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', { hour12: false }) +
        " " + now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!character) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} style={{ borderRadius: "10px", maxWidth: "300px" }} />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      {character.type && <p><strong>Type:</strong> {character.type}</p>}
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin?.name}</p>
      <p><strong>Location:</strong> {character.location?.name}</p>
      <p><strong>Episode Appearances:</strong> {character.episode.length}</p>

      <footer style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
        {time}
      </footer>
    </div>
  );
}

export default CharDetail;