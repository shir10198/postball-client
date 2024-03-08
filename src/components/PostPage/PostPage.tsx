import React, { useEffect, useState } from 'react';
import { selectUser, selectIsAuthenticated } from '../../store/slices/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './PostPage.scss';
import { posts } from '../../services/userService'; // Importing only posts from userService
import { Post } from '../../types/generalTypes'; // Assuming you have defined the Post type

const PostPage: React.FC<{}> = () => {
  const isAuth = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState<Post>();

  const initPost = () => {
    const currentPost = posts.find((x) => x.id === id);
    if (!currentPost) {
      navigate('/');
    } else {
      setPostData(currentPost);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    initPost();
  }, [id, navigate, user]);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  console.log(postData);

  return (
    <div className="post-page">
  
      <div className="posts-container">
        {postData ? (
            <>
            <div key={postData.id} className="post">
                <img src={postData.image} alt={postData.content} />
                <p>{postData.content}</p>
                <div className="author-info">
                    <img src={postData.author?.image} alt={postData.author.username} />
                    <p className="author-name">{postData.author.username}</p>
                </div>
                <p className="date-info">{postData.date.toLocaleString()}</p>
            </div>
            <div key={postData.id} className="post-comments">
                <h2>Comments</h2>
                {postData.comments.map((comment) => (
                  <div className="post-comment">
                  <div className="author">
                      <img src={comment?.author.image} alt={comment.author.username} />
                      <p className="author-name">{comment.author.username}</p>
                      <span className="comment-time">{comment.date.toLocaleString()}</span>
                  </div>
                  <div className="comment-text">{comment.content}</div>
                </div>
                ))}
                
                <div className="post-new-comment">
                  <div className="author">
                      <img src={user?.image} alt={user?.username} />
                      <p className="author-name">{user?.username}</p>
                  </div>
                  <div className="comment-input">
                    <input type="text" placeholder='Send comment..' />
                    <div className="send-comment">Send</div>
                  </div>
                </div>

            </div>
            </>
          ) : null}
        </div>
    </div>
  );
};

export default PostPage;
