import { Routes, Route, Link, Navigate } from 'react-router-dom';
import auth from '../utils/auth';


const ProtectedRoute = ({ user, children }) => {
    if (auth.loggedIn() === false) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute;