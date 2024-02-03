import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/General/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './components/Homepage/Homepage';
import UserProfile from './components/UserProfile/UserProfile';
import { USERS_DATA } from './services/userService';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from './store/slices/usersSlice';
import GroupPage from './components/GroupPage/GroupPage';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setUsers(USERS_DATA));
  },[])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/groups/:id" element={<GroupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
