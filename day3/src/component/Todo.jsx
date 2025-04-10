import React, { useReducer, useState } from "react";

const Todo = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const todoreducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return [
          ...state,
          {
            id: Date.now(),
            name: action.payload.name,
            email: action.payload.email,
            completed: false,
          },
        ];
      case "Delete":
        return state.filter((user) => user.id !== action.payload);
      case "toggle":
        return state.map((user) =>
          user.id === action.payload
            ? { ...user, completed: !user.completed }
            : user
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoreducer, []);

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "Add", payload: { name, email } })}
      >
        Add
      </button>

      <ul>
        {state.map((user) => (
          <li key={user.id}>
            <p>
              <b>Name: </b>
              {user.name}
            </p>
            <p>
              <b>Email: </b>
              {user.email}
            </p>
            <p>Status: {user.completed ? " Done" : " Not Done"}</p>
            <button
              onClick={() => dispatch({ type: "Delete", payload: user.id })}
            >
              Delete
            </button>
            <button onClick={() => dispatch({ type: "toggle", payload: user.id })}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
