import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [db, setdb] = useState([]);
  const [editId, setEditId] = useState(null);

  const handelAdd = async () => {
    let userData = { first, last };
    try {
      await axios.post(
        "https://newreactproject-5eb97-default-rtdb.asia-southeast1.firebasedatabase.app/day2users.json",
        userData
      );
      // alert("success");

      setFirst("");
      setLast("");
      fetching();
    } catch (error) {
      console.log(error);
    }
  };

  const fetching = async () => {
    try {
      let res = await axios.get(
        "https://newreactproject-5eb97-default-rtdb.asia-southeast1.firebasedatabase.app/day2users.json"
      );
      let fetcheduser = [];
      for (let key in res.data) {
        fetcheduser.push({ id: key, ...res.data[key] });
        setdb(fetcheduser);
        // console.log(db);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetching();
  }, []);

  const handelDelete = async (id) => {
    try {
      await axios.delete(
        `https://newreactproject-5eb97-default-rtdb.asia-southeast1.firebasedatabase.app/day2users/${id}.json`
      );
      fetching();
    } catch (error) {}
  };

  const handelEdit = async (id) => {
    let editedUser = db.find((user) => user.id === id);
    // console.log(editedUser)
    if (editedUser) {
      setFirst(editedUser.first);
      setLast(editedUser.last);
      setEditId(id);
    }
  };

  const handelUpdate =async()=>{
    let updatedUser = { first, last };
    try {
      await axios.patch(
        `https://newreactproject-5eb97-default-rtdb.asia-southeast1.firebasedatabase.app/day2users/${editId}.json`,
        updatedUser
      );
      setFirst("");
      setLast("");
      setEditId(null);
      fetching();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <input
        value={first}
        type="text"
        placeholder="First Name"
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        value={last}
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLast(e.target.value)}
      />
      <button onClick={editId ? () => handelUpdate() : () => handelAdd()}>
        {editId ? "Update" : "Add"}
      </button>

      {/* ui part */}

      <ul>
        {db.map((user) => (
          <li key={user.id}>
            {user.first}
            {user.last}
            <button onClick={() => handelEdit(user.id)}>Edit</button>
            <button onClick={() => handelDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
