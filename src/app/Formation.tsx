"use client"

import React from 'react';
import classes from "./Formation.module.css";
import {SimpleBoxContent} from "@/app/libs/core/SimpleBoxContent/SimpleBoxContent";
import {useContent} from "@/app/libs/data/Content";
import {Button} from "@/app/libs/core";
export const Formation = () => {

    const content = useContent();

    return (
        <div className={classes.container} id="formation">
            <div className={classes.content}>
                <h2>{content.formation.title}</h2>
                <div className={classes.listContainer}>
                    <SimpleBoxContent title={content.formation.prerequisites.title}
                                      content={content.formation.prerequisites.content}/>
                    <SimpleBoxContent title={content.formation.format.title}
                                      content={content.formation.format.content}/>
                    <SimpleBoxContent title={content.formation.goals.title}>
                        <ul>
                            {content.formation.goals.childrenContent.map((goal, index) => (
                                <li key={index}>{goal}</li>
                            ))}
                        </ul>
                    </SimpleBoxContent>
                </div>
            </div>



        </div>

    );
};
