
import { useState } from "react";
import "./Login.scss"; 
import { checkUserExistence } from "../../services/userService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const usernameChangeHandler = (e:any) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e:any) => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    const userExists = checkUserExistence(username, password);

    if (userExists) {
      console.log(`Hello ${username}!`);
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }  
};

  const registerHandler = () => {
    console.log(`Need to be registered`);
  };

  return (
    <div className="login-container">
      <input
        className="input-field"
        onChange={usernameChangeHandler}
        placeholder="Username"
        type="text"
      />
      <input
        className="input-field"
        onChange={passwordChangeHandler}
        placeholder="Password"
        type="password"
      />
      <button className="button" onClick={loginHandler}>
        Login
      </button>
      <button className="button" onClick={registerHandler}>
        Register
      </button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
