import { useEffect, useState } from "react";

export function useFetch(url) {
  let [db, setdb] = useState([]);
  
  const fetching = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setdb(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetching();
  }, [url]);

  return db
}
