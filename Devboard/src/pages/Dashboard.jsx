import { useAuth } from "../contexts/AuthContext";
import ThemeToggle from "../components/ThemeToggle";
import UserProfileCard from "../components/UserProfileCard";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return <p>Loading your data...</p>;

  return (
    <div>
      <h2>Developer Dashboard</h2>
      <ThemeToggle />
      <button onClick={logout}>Logout</button>
      <UserProfileCard user={user} />
    </div>
  );
};

export default Dashboard;
