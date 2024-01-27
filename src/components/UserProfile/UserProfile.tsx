import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser, selectIsAuthenticated, loginUser } from "../../store/slices/authSlice";
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slices/usersSlice";
import { User } from "../../types/generalTypes";
import { sports } from '../../services/userService';
import './UserProfile.scss'; // Import your CSS file for styling

const UserProfile = () => {
  const user = useSelector(selectUser) as User;
  const isAuth = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate])

  const handleEditToggle = () => {
    setEditing(!editing);
    setEditedUser({ ...user }); // Reset editedUser to current user when toggling edit mode
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedUser((prevUser: User) => ({ ...prevUser, [name]: value }));
  };

  const handleSaveChanges = () => {
    console.log('Save changes:', editedUser);
    if (!editedUser.id) {
      setEditing(false);
    }
    dispatch(updateUser({ id: editedUser.id, updatedUser: editedUser }));
    dispatch(loginUser(editedUser));
    setEditing(false);
  };

  if (!isAuth) {
    navigate('/login');
    return null;
  }

  return (
    <div className="user-profile-container">
      <h1 className="user-profile-header">Hello {user?.username}</h1>
      <div className="user-profile-info">
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Image: {user.image}</p>
        <p>Favorite Sport: {user.favoriteSport}</p>
      </div>

      {editing ? (
        <div className="edit-form">
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={editedUser.email}
              required
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={editedUser.password}
              required
              onChange={handleInputChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={editedUser.image}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Favorite Sport:
            <select
              name="favoriteSport"
              value={editedUser.favoriteSport}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a sport
              </option>
              {sports.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>))}
            </select>
          </label>
          <button className="save-button" onClick={handleSaveChanges}>Save Changes</button>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEditToggle}>Edit Details</button>
      )}
    </div>
  );
};

export default UserProfile;
