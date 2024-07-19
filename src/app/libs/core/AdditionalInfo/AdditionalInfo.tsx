"use client"

import React, {ReactNode, useMemo} from 'react';
import classes from "./AdditionalInfo.module.css";
import {Carousel} from "@/app/libs/core/Carousel/Carousel";
import {useContent} from "@/app/libs/data/Content";
import {SimpleBoxContent} from "@/app/libs/core/SimpleBoxContent/SimpleBoxContent";

export const AdditionalInfo = () => {

    const content = useContent();

    const contentList = useMemo(() => {
        const res: ReactNode[] = []
        Object.values(content.keyIndicators.content).forEach((item) => {
            const Element = <SimpleBoxContent title={item.title} white transparent>
                {item.content.map((goal, index) => (
                    <li key={index} dangerouslySetInnerHTML={{__html: goal}}/>
                ))}
            </SimpleBoxContent>

            res.push(Element)
        })
        return res;
    }, [])

    const contentListAdditional = useMemo(() => {
        const res: ReactNode[] = []
        Object.values(content.additional).forEach((item) => {
            const Element = <SimpleBoxContent title={item.title} blueLight>
                {Array.isArray(item.content) ? item.content.map((goal, index) => (
                    <li key={index} dangerouslySetInnerHTML={{__html: goal}}/>
                )) : <p>{item.content}</p>}</SimpleBoxContent>

            res.push(Element)
        })
        return res;
    }, [])

    return (
        <div className={classes.container} id="additional">
            <div className={classes.listContainer}>
                {contentListAdditional.map((item, index) => (
                    item
                ))}
                <SimpleBoxContent title={content.support.title} blueLight>
                    {content.support.content.map((goal, index) => (
                        <React.Fragment key={index}>
                            <p className={classes.customP}>
                                <strong>{index + 1}. {goal.title}</strong>
                            </p>
                            <ul className={classes.customLI}>
                                {goal.content.map((childGoal, childIndex) => (
                                    <li key={childIndex} dangerouslySetInnerHTML={{__html: childGoal}}/>
                                ))}
                            </ul>
                            {index !== content.support.content.length - 1 && <br/>}
                        </React.Fragment>
                    ))}
                </SimpleBoxContent>
            </div>

            <div className={classes.content}>
                <h3>Indicateurs de Résultats</h3>
                <Carousel content={contentList}/>
            </div>
        </div>

    );
};
