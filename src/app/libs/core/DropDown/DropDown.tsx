'use client'

import React from 'react';
import classes from "./DropDown.module.css";
import Image from 'next/image'
import {useRouter} from "next/navigation";
import classnames from "classnames";

interface LinkDropDown {
    title: string;
    href: string;
}

interface Props {
    title: string;
    linksDropDown?: LinkDropDown[];
    onClick?: () => void;

}


export const DropDown = ({title, linksDropDown, onClick}: Props) => {

    const router = useRouter()

    return (
        <div className={classes.container} onClick={onClick}>
            <div className={classes.titleContainer}>
                <p className={classes.mainTitle}>{title}</p>
                {linksDropDown &&
                    <Image className={classnames(classes.dropDownIcon, classes.dropDownBlack)} src='https://evanhays98.github.io/stdphocea/Expand_down.svg'
                           alt="arrow" width="24" height="24"></Image>}
                {linksDropDown && <Image className={classnames(classes.dropDownIcon, classes.dropDownWhite)}
                                         src='https://evanhays98.github.io/stdphocea/Expand_down_white.svg' alt="arrow" width="24" height="24"></Image>}
            </div>

            {linksDropDown &&
                <ul className={classes.linksContainer}>
                    {linksDropDown.map(element => {
                        return (
                            <li key={element.title} className={classes.linkBox} onClick={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                                router.push(element.href)
                            }}>
                                <p className={classes.linkTitle}>{element.title}</p>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>

    );
};
