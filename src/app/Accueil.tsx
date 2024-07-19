"use client"

import React, {useState} from 'react';
import classes from "./Acceuil.module.css";
import Image from "next/image";
import {Button} from "@/app/libs/core";
import {useContent} from "@/app/libs/data/Content";


export const Acceuil = () => {
    const content = useContent()

    return (
        <div className={classes.container} id="home">
            <div className={classes.imageContainer}>
                <Image className={classes.image} src="https://evanhays98.github.io/stdphocea/workers_online.png" alt="workers" fill/>
            </div>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Studio Phocea</h1>
                <h2 className={classes.open}>Découvrez notre formation sur mesure</h2>
                <div style={{paddingTop: 16}}>
                    <a href={content.buttonFormation.href}>
                        <Button text={content.buttonFormation.title} style={{margin: '0 auto'}}/>
                    </a>
                </div>
            </div>
        </div>
    );
};
