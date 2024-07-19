"use client"

import React from 'react';
import classes from "./Contact.module.css";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaPhoneFlip} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {Button} from "@/app/libs/core";
import {useContent} from "@/app/libs/data/Content";


export const Contact = () => {

    const content = useContent();

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
                                className={classes.info}>6 boulevard Curie, 13013 Marseille, France</a>
                        </div>
                        <div className={classes.infoContent}>
                            <FaPhoneFlip className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a className={classes.info}>+33 6 35 31 73 90</a>
                        </div>
                        <div className={classes.infoContent}>
                            <MdEmail className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a
                                className={classes.info}>gregoryfavatapro@gmail.com</a>
                        </div>
                        <a href={content.buttonFormation.href}>
                            <Button text={content.buttonFormation.title} white/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};
