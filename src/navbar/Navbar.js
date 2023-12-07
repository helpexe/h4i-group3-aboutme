import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const HomeNavbar = () => (
    <section>
    <nav className={styles.nav}>
        <Link to="/" className={styles.title}>Home</Link>
    </nav>
    <hr className={styles.border}></hr>
    </section>
);

export default HomeNavbar;