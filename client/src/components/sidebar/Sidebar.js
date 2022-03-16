import React from "react";
import { Link } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineUnorderedList } from "react-icons/ai";
import "./Sidebar.css";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const Sidebar = ({ user }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };
  return (
    <div className="sidebar">
      <div className="text-center">
        <img src="" alt="" />
        <h4>{user?.name}</h4>
        <p>{user?.role}</p>
      </div>
      <hr className="text-primary fw-bold" />
      <div className="links">
        <Link to="/me" className="link">
          <RiUser3Line className="me-3" size={20} /> My Profile
        </Link>
        <Link to="/me/update" className="link">
          <FaUserEdit className="me-3" size={20} /> Edit Profile
        </Link>
        <Link className="link">
          <AiOutlineUnorderedList className="me-3" size={20} /> All User
        </Link>
        <Link to="/" onClick={logoutHandler} className="link">
          <AiOutlineLogout className="me-3" size={20} /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
