import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {isAuthenticated } = useAuth();
  return (
    <div>
        {isAuthenticated ? children : <Navigate to='/login' />}
    </div>
  )
}

export default PrivateRoute