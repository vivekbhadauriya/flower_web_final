import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import AuthModal from "./AuthModal";
import logo from "../assets/logo1.jpg";
const Header = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/home");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser(token);
    }
  }, []);

  const fetchUser = async (token) => {
    try {
      const res = await fetch("http://localhost:4000/auth", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      console.error("Failed to fetch user data");
    }
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/home")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="Pagesname" style={{ marginLeft: "50px" }}>
        <Link to="/home" className="Home">
          Home
        </Link>
        <Link to="/romance-love">Romance & Love</Link>
        <Link to="/about">About us</Link>
        <Link to="/more">More</Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
      </div>

      {/* User Profile */}
      <div className="user-profile">
        {user ? (
          <>
            <img src="https://via.placeholder.com/30" alt="User" />
            <span>{user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </div>

      {/* Modal for login/signup */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={(user) => {
          setUser(user);
          navigate("/home");
        }}
      />
    </header>
  );
};

export default Header;
