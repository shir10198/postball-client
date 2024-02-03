import React,{useEffect} from 'react';
import './Homepage.scss';
import { useSelector } from 'react-redux';
import { selectUser, selectIsAuthenticated } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router';
import { categories } from '../../services/userService';

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

    <div>
      <h2>Welcome, {user?.username}!</h2>
      <p>Thank you for logging in.</p>     

      <div className="blog">
        <div className="blog_title">categories</div>
        <div className="blog_categories">
          {categories.map((category, key) => (
            <div onClick={() => navigate(`/groups/${category.id}`)} className="blog_categories_item" key={key}>
              <div className="blog_categories_item_img">
                <img src={category.image} alt={category.name}/>
              </div>
              <div className="blog_categories_item_title">
                <span>{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
