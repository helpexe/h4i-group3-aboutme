import React from 'react';
import list_styles from './ListItems.module.css';

const ListItems = (props) => (
    <div id = "hobbies">
        <h1>{props.title}</h1>
        <div className={list_styles.hobbyItems}>
            {props.items.map((itemObject => (
            <li>{itemObject.info}</li>
        )))}
    </div>
    </div>
    
);

export default ListItems;