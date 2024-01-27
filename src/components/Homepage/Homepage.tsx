import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectIsAuthenticated } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(()=>{
      if(!isAuth){
      navigate('/login');
    }
  },[isAuth,navigate])
 
  return (
    <div className='homepage-container'>
      <h2>Welcome, {user?.username}!</h2>
      <p>Thank you for logging in.</p>      
    </div>
  );
};

export default HomePage;
