import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/authSlice";
const UserProfile = () => {
    const user = useSelector(selectUser);
    return <>
    <h1>Hello {user?.username}</h1>
    </>;
}

export default UserProfile;