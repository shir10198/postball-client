import React, { useEffect, useState } from 'react';
import { selectUser, selectIsAuthenticated } from '../../store/slices/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './AddPost.scss';
import { categories } from '../../services/userService';


const AddPost: React.FC<{}> = () => {

  const isAuth = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  //const [file, setFile] = useState([null]);
  const [file, setFile] = useState<File | null>(null);


  useEffect(()=>{
      if(!isAuth){
      navigate('/login');
    }
  },[isAuth,navigate])


  const filePreview = (file: Blob | MediaSource) => {
    if(file) {
      const fileUrl = URL.createObjectURL(file)
      return <img src={fileUrl} />
    }
  } 

  return (
    <div className="add-post">
        <div className="add-post-cover">
            <h1>Add Post</h1>
        </div>
        <div className="form">
            <form className="a-form addpost" id="post-form">
                <label>Select category:</label>
                {/* choose category */}
                <div className="select">
                    <select>
                    {categories.map((category, key) => (
                        <option value={category.name} key={key}>{category.name}</option>
                    ))}
                    </select>
                </div>
                <label>Text:</label>
                <input type="text" id="post_text" className="" name="post_text" placeholder="Text here.." required />
                <label>Upload file:</label>
                {/* add if has file */}
                { file == null ? (
                <div className="dropzone">
                    <img src="./assets/upload.svg" className="upload-icon" />
                    <input 
                      type="file" 
                      id="customFile" 
                      className="upload-input"
                      onChange={(event) => {
                        const selectedFile = event.currentTarget.files && event.currentTarget.files[0];
                        if (selectedFile) {
                          setFile(selectedFile);
                        }
                      }}
                    />
                </div>
                ) : (
                <div className="file-selected">
                    {filePreview(file)}
                    <div className="delete-file" id="delete-file"
                      onClick={() => {setFile(null)}}
                    >Delete file</div>
                </div>
                )}
            </form>

            <div className="a-form">
                <input type="submit" id="btn" className="upload-file" value="Upload" disabled />
            </div>
        </div>
    </div>
  );
};

export default AddPost;