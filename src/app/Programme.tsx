"use client"

import React from 'react';
import classes from "./Programme.module.css";
import {useContent} from "@/app/libs/data/Content";
import {Module} from "@/app/libs/core/Module/Module";
import {SimpleBoxContent} from "@/app/libs/core/SimpleBoxContent/SimpleBoxContent";
import {IoMdPricetag} from "react-icons/io";
import {Button} from "@/app/libs/core";

export const Programme = () => {

    const content = useContent();

    return (
        <div className={classes.container} id="programme">
            <div className={classes.content}>
                <h2>{content.programme.title}</h2>
                <h4 style={{textAlign: "center"}} dangerouslySetInnerHTML={{__html: content.programme.description}}/>
                <div className={classes.listContainer}>
                    {content.programme.modules.map((module, index) => (
                        <Module key={index} title={module.title} image="/worker_plan.png">
                            {module?.submodules?.map((submodule, index) => (
                                <SimpleBoxContent key={index} title={submodule.title} time={submodule.time} white>
                                    <ul>
                                        {submodule?.steps?.map((step, index) => (
                                            <li key={index}>{step}</li>
                                        ))}
                                    </ul>
                                </SimpleBoxContent>
                            ))}
                        </Module>
                    ))}
                </div>
                <div className={classes.modalityContainer}>
                    <SimpleBoxContent title={content.programme.modalities.title} light>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: content.programme.modalities.modality}}/>
                            <li>{content.programme.modalities.delay.title}</li>
                            <ul>
                                {content.programme.modalities.delay.content.map((delay, index) => (
                                    <li key={index}>{delay}</li>
                                ))}
                            </ul>
                        </ul>
                    </SimpleBoxContent>
                    <SimpleBoxContent title={content.programme.costs.title} content={content.programme.costs.content}
                                      light icon={<IoMdPricetag style={{fontSize: 30, rotate: '-90deg'}}/>}/>
                </div>
            </div>
            <div style={{paddingTop: 16}}>
                <a href={content.buttonFormation.href}>
                    <Button text={content.buttonFormation.title} style={{margin: '0 auto'}} white/>
                </a>
            </div>
        </div>

    );
};
