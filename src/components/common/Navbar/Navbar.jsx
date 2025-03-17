import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping as ShoppingCart } from "react-icons/fa6";
import { FaSearch as Search } from "react-icons/fa";
import { IoPersonCircleOutline as Profile } from "react-icons/io5";
import styles from "./Navbar.module.css";
import Icon from "../Icon/Icon";
import { useCart } from "../../../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>FLAME & GLORY</h1>
      </Link>
      <nav className={styles.nav}>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          SHOP
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          ABOUT
        </NavLink>
      </nav>
      <nav className={styles.nav}>
        <SearchBar />
        <NavLink
          to="/signin"
          style={{ borderRadius: 0 }}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <div className={styles.icon}>
            <Profile size={22} />
          </div>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <span className={styles.cartCount}>{cartCount}</span>
          <div className={styles.icon}>
            <ShoppingCart />
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = React.createRef();
  const buttonRef = React.createRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      )
        setIsExpanded(false);
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      inputRef.current.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, inputRef]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && inputRef.current) inputRef.current.focus();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    isExpanded ? handleSearch(e) : handleExpand();
  };

  return (
    <>
      <form className={styles.search} onSubmit={handleSearch}>
        <input
          type="text"
          ref={inputRef}
          className={`${styles.searchInput} ${
            isExpanded ? styles.expanded : ""
          }`}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className={`${styles.searchButton} ${
            isExpanded ? styles.expanded : ""
          }`}
          ref={buttonRef}
          onClick={handleClick}
        >
          <div className={styles.icon}>
            <Search size={15} className={styles.searchIcon} />
          </div>
        </button>
      </form>
    </>
  );
};
