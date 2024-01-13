import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, selectIsAuthenticated, selectUser } from '../../../store/slices/authSlice';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li>Postball</li>
        <li><Link to="/">Home</Link></li>
        {isLoggedIn ? (
          <>
            <li>Hello {user?.username}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link> | <Link to="/register">Register</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
