import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const HomeNavbar = () => (
    <nav className={styles.nav}>
        <Link to="/" className={styles.title}>Home</Link>
    </nav>
);

export default HomeNavbar;