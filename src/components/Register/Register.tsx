// Register.tsx

import React, { useState } from 'react';
import { User } from '../../types/generalTypes';
import { sports } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/usersSlice';
import './Register.scss'; 

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    email: '',
    password: '',
    image: '',
    favoriteSport: '',
  });

  const [errors, setErrors] = useState<any>({
    username: '',
    email: '',
    password: '',
    image: '',
    favoriteSport: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    // Clear the error when the user starts typing in a field
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors: any = {};

    Object.entries(user).forEach(([key, value]) => {
      if (key !== 'id' && !value) {
        validationErrors[key as keyof User] = `${key} is required`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with registration logic
    dispatch(addUser(user));
  };

  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.username}</span>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.email}</span>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.password}</span>
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={user.image}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.image}</span>
        </label>
        <br />
        <label>
          Favorite Sport:
          <select
            name="favoriteSport"
            value={user.favoriteSport}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a sport
            </option>
            {sports.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
          <span className="error">{errors.favoriteSport}</span>
        </label>
        <br />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
