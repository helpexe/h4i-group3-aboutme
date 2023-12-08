import React from 'react'
import styles from "./Will-Josh.module.css"
import HomeNavbar from "../navbar/Navbar"
import me from './suit.JPG'
import me2 from './IMG-0531.jpg'
import me3 from './IMG-3043 (2).jpg'
import me4 from './IMG-4009.jpg'
import me5 from './hat.JPG'
import me6 from './fam.JPG'

function Will_Josh() {
    return (
        <div>
            <HomeNavbar/>
            <h1 className={styles.pageTitle}>
        <u>Will-Josh's Exquisite Page</u>
      </h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <img src={me} alt="1" />
        </div>
        <div className={styles.column}>
          <img src={me2} alt="2" />
        </div>
        <div className={styles.column}>
          <img src={me3} alt="3" />
        </div>
        <div className={styles.column}>
          <img src={me4} alt="4" />
        </div>
        <div className={styles.column}>
          <img src={me5} alt="5" />
        </div>
        <div className={styles.column}>
          <img src={me6} alt="6" />
        </div>
      </div>
      <h2 className={styles.sectionTitle}>
        <u>Favorite Movies</u>
      </h2>
      <ul className={styles.list}>
        <li>The Spongebob Squarepants Movie (2004)</li>
        <li>Scott Pilgrim vs. the World</li>
        <li>Rush Hour 3</li>
        <li>The Big Lebowski</li>
        <li>The Godfather</li>
      </ul>
      <h2 className={styles.sectionTitle}>
        <u>Hobbies</u>
      </h2>
      <ul className={styles.list}>
        <li>Sports/Gym</li>
        <li>Video games, anime</li>
        <li>Nature walks</li>
        <li>Fashion</li>
        <li>Reading</li>
      </ul>
        </div>  
    );
}

export default Will_Josh