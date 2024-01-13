
import { useState } from "react";
import "./Login.scss"; 
import { checkUserExistence } from "../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { loginUser,selectIsAuthenticated } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  
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
    const user = checkUserExistence(username, password);
    if (user) {
      dispatch(loginUser(user));
      navigate('/');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }  
};

  const registerHandler = () => {
    navigate('/register');
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
