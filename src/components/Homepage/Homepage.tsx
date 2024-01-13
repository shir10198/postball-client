import React from 'react';

interface WelcomeMessageProps {
  username: string;
}

const Homepage: React.FC<WelcomeMessageProps> = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>Thank you for logging in.</p>
    </div>
  );
};

export default Homepage;
