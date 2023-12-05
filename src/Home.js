// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Home.module.css";

const Home = () => (
  <>
    <div className={styles.home}>
      <img className={styles.about_image}  src="./homeImage.png" alt="Homepage" />
      {/* centered trademark at top <div className="trademark">A Bootcamp Group 3 Production</div>*/}
    </div>

    <div className={styles.container}>
      <div className={styles.names}>
        <div className={styles.slice}>
          <Link to="/ankit" className={styles.rotated_link}>Ankit Amin</Link>
        </div>
        <div className={styles.slice}>
          <Link to="/christopher" className={styles.rotated_link}>Christopher Giang</Link>
        </div>
        <div className={styles.slice}>
          <Link to="/gavin" className={styles.rotated_link}>Gavin Crisologo</Link>
        </div>
        <div className={styles.slice}>
          <Link to="/helen" className={styles.rotated_link}>Helen Li</Link>
        </div>
        <div className={styles.slice}>
          <Link to="/will-josh" className={styles.rotated_link}>Will-Josh Njeumi</Link>
        </div>
      </div> 
    </div>



  </>
);

export default Home;
