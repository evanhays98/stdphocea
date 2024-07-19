"use client"

import React from 'react';
import classes from "./Module.module.css";
import Image from "next/image";

interface Props {
    title: string;
    children?: React.ReactNode;
    image?: string;
    id?: string;
}

export const Module = ({title, id, children, image}: Props) => {

    return (
        <div key={id}>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.container}>
                {image && <div className={classes.imageContainer}>
                    <Image className={classes.image} src="/workers_plan.png" alt="workers" fill/>
                </div>}
                <div className={classes.listContainer}>
                    {children}
                </div>
            </div>
        </div>

    );
};
