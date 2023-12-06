import React from 'react';
import fav_styles from './FavThing.module.css';

const FavThing = (props) => (
    <div className={fav_styles.favThings}>
        {props.items.map((itemObject => (
          <div className = {fav_styles.thing}>
            <h4>{itemObject.name}</h4>
            <img src={itemObject.link} alt={itemObject.name} />
        </div>
        )))}
    </div>
);

export default FavThing;