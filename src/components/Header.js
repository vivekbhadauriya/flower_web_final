import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import AuthModal from "./AuthModal";
import logo from "../assets/logo1.jpg";
import { FaBars } from "react-icons/fa"; // Menu icon
import { IoMdClose } from "react-icons/io"; // Close icon for drawer

const Header = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer
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

      {/* Menu Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={() => setIsDrawerOpen(true)}>
        <FaBars size={24} />
      </div>

      {/* Navigation Links */}
      <nav className="Pagesname">
        <Link to="/home">Home</Link>
        <Link to="/romance-love">Romance & Love</Link>
        <Link to="/about">About Us</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/more">More</Link>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* User Profile */}
      <div className="user-profile">
        {user ? (
          <>
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
        onRequestClose={() => setIsModalOpen(false)}
        onLoginSuccess={(user) => {
          setUser(user);
          navigate("/home");
        }}
      />

      {/* Drawer for Mobile */}
      {isDrawerOpen && (
        <div className="mobile-drawer">
          <div className="close-icon" onClick={() => setIsDrawerOpen(false)}>
            <IoMdClose size={24} />
          </div>
          <nav className="mobile-nav">
            <Link to="/home" onClick={() => setIsDrawerOpen(false)}>Home</Link>
            <Link to="/romance-love" onClick={() => setIsDrawerOpen(false)}>Romance & Love</Link>
            <Link to="/about" onClick={() => setIsDrawerOpen(false)}>About Us</Link>
            <Link to="/more" onClick={() => setIsDrawerOpen(false)}>More</Link>
            <Link to="/Gallery" onClick={() => setIsDrawerOpen(false)}>More</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
