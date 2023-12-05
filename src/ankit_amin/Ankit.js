import React from 'react'
import styles from "./Ankit.module.css";

function Ankit() {
    return (
<body class={styles.container}>
    <h1 class={styles.font1}>Welcome All!</h1>
    <h2 class={styles.font2}>My name is Ankit Amin and I am Computer Science a freshman from Dubai (originally from India)</h2>
    <h2 class={styles.font3}>Favourite Movies: </h2>
    <h3 class={styles.font2}>
        <ul class={styles.ul}>
            <li>Inception</li>
            <div>
                <img src="./ankit_amin/hp.jpeg" alt="Harry Potter Movie Poster" />
            </div>
            <li>Entire Harry Potter Series</li> 
        </ul>
    </h3>
    <h2 class="font3">Hobbies:</h2>
    <h3 class="font2">
        <ul class={styles.ul}>
            <li>Coding</li>
            <li>Hitting the gym</li>
            <li>Listening to music</li>
        </ul>
    </h3>
    </body>
    );
}

export default Ankit
