import React, { useEffect, useState } from 'react';
import { categories, posts } from "../../services/userService";
import { selectUser } from '../../store/slices/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Category, Post } from '../../types/generalTypes';
import './GroupPage.scss';

const GroupPage: React.FC<{}> = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState<Category>();
  const [categoryPosts, setCategoryPosts] = useState<Post[]>([]);

  const initCategory = () => {
    const currentCategory = categories.find((x) => x.id === id);

    if (!currentCategory) navigate('/');
    else {
      setCategory(currentCategory);
      const categoryPosts = posts.filter((post) => post.category.id === id);
      setCategoryPosts(categoryPosts);
    }
  };

  useEffect(() => {
    if (!user) navigate('/login');
    initCategory();
  }, []);

  return (
    <div className="group-page">
        <div className="group-cover">
            <img src={category?.image} alt={category?.name} />
        </div>
        <div className="group-name">
            <div>
                <img src={category?.image} alt={category?.name} />
                <h1>{category?.name}</h1>
            </div>
            <div className="actions">
                <div className="button">Add Post</div>
            </div>
        </div>
        <div className="posts-container">
        {categoryPosts.map((post) => (
            <div key={post.id} className="post">
                <img src={post.image} alt={post.content} />
                <p>{post.content}</p>
                <div className="author-info">
                    <img src={post.author?.image} alt={post.author.username} />
                    <p className="author-name">{post.author.username}</p>
                </div>
                <p className="date-info">{post.date.toLocaleString()}</p>
            </div>
        ))}
        </div>
    </div>
  );
};

export default GroupPage;