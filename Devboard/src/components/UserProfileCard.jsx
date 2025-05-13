// /components/UserProfileCard.jsx
import { useRef, useState } from "react";

const UserProfileCard = ({ user }) => {
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);
  const inputRef = useRef();

  const handleEdit = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Update your developer status"
        />
        <button type="submit">Update Status</button>
      </form>
      <button onClick={handleEdit}>Edit Status</button>

      {showToast && <div>Status Updated!</div>}
    </div>
  );
};

export default UserProfileCard;
