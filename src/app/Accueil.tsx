"use client"

import React, {useState} from 'react';
import classes from "./Acceuil.module.css";


export const Acceuil = () => {
    const [random, setRandom] = useState(0); // Initialize random state

    return (
        <div className={classes.container} id="home">
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Cabinet Ophtalmologique Pariwest</h1>
                <h2 className={classes.open}>Prenez rendez-vous dès maintenant !</h2>
            </div>
        </div>
    );
};
