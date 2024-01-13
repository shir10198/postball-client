
import { useState } from "react";
import "./Login.scss"; 
import { checkUserExistence } from "../../services/userService";
import { useDispatch } from "react-redux";
import { loginUser,selectIsAuthenticated,User } from "../../store/slices/authSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);
  const usernameChangeHandler = (e:any) => {
    setErrorMessage('');
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e:any) => {
    setErrorMessage('');
    setPassword(e.target.value);
  };

  console.log(isAuth);
  const loginHandler = () => {
    const userExists = checkUserExistence(username, password);

    if (userExists) {
      const userData: User = { username: 'exampleUser' };

      dispatch(loginUser(userData));
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
