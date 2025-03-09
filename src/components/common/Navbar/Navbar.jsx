import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping as ShoppingCart } from "react-icons/fa6";
import { FaSearch as Search } from "react-icons/fa";
import { IoPersonCircleOutline as Profile } from "react-icons/io5";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>Demon</h1>
        <h3>Hot Sauce</h3>
      </Link>
      <div className={styles.flexSpacer}></div>
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
      <div className={styles.flexSpacer}></div>
      <nav className={styles.nav}>
        <SearchBar />
        <NavLink
          to="/signin"
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
          <div className={styles.icon}>
            <ShoppingCart />
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = React.createRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target))
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

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          ref={inputRef}
          className={`${styles.searchInput} ${
            isExpanded ? styles.expanded : ""
          }`}
        />
        <button
          className={`${styles.searchButton} ${
            isExpanded ? styles.expanded : ""
          }`}
          onClick={() => handleExpand()}
        >
          <div className={styles.icon}>
            <Search className="icon" />
          </div>
        </button>
      </div>
    </>
  );
};
