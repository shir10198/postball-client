// Register.tsx

import React, { useState } from 'react';
import { User } from '../../types/generalTypes';
import { sports } from '../../services/userService';

const Register: React.FC = () => {
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    image: '',
    favoriteSport: '',
  });

  const [errors, setErrors] = useState<Record<keyof User, string>>({
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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors: any = {};

    Object.entries(user).forEach(([key, value]) => {
      if (!value) {
        validationErrors[key as keyof User] = `${key} is required`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with registration logic
    console.log('User registered:', user);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <span style={{ color: 'red' }}>{errors.username}</span>
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
          <span style={{ color: 'red' }}>{errors.email}</span>
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
          <span style={{ color: 'red' }}>{errors.password}</span>
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
          <span style={{ color: 'red' }}>{errors.image}</span>
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
          <span style={{ color: 'red' }}>{errors.favoriteSport}</span>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
