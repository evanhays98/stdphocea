"use client"

import React from 'react';
import classes from "./Contact.module.css";
import {FaMapMarkerAlt, FaTrain} from "react-icons/fa";
import {FaPhoneFlip} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";


export const Contact = () => {


    return (
        <div className={classes.container} id="contact">

            <div className={classes.content}>
                <h2 className={classes.title}>Contact</h2>
                <div className={classes.box}>
                    <div className={classes.infoContainer}>
                        <div className={classes.infoContent}>
                            <FaMapMarkerAlt className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a
                               className={classes.info}>14 rue de Monfort, Maurepas, 78310</a>
                        </div>
                        <div className={classes.infoContent}>
                            <FaPhoneFlip className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a  className={classes.info}>01 30 62 23 24</a>
                        </div>
                        <div className={classes.infoContent}>
                            <MdEmail className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a
                               className={classes.info}>cab.oph.pariwest@gmail.com</a>
                        </div>
                        <div className={classes.infoContent}>
                            <FaTrain className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <p className={classes.info}>15min à pied de la gare (La Verrière)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
