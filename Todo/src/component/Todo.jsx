import { useState } from "react";

const Todo = () => {
  const [task, settask] = useState([]);
  const [name, setname] = useState("");
  const handleAdd = () => {
    settask([...task, name]);
    setname("");
  };

  const handleDelete = (id) => {
    let filterTask = task.filter((ele,key) => key !== id);
    settask(filterTask);
  };

  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => setname(e.target.value)}
      />

      <button onClick={handleAdd}>Add Todo</button>

      <ul>
        {task.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => handleDelete(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
