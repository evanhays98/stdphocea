"use client";

import React, {useEffect, useState} from 'react';
import classes from "./Header.module.css";
import {DropDown} from "@/app/libs/core/DropDown/DropDown";
import Image from "next/image";
import classnames from "classnames";
import {useRouter} from "next/navigation";

export const Header = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [tab, setTab] = useState<string | null>(null);

    const router = useRouter();

    const closeOrOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    const scrollTo = (id: string) => {
        if (typeof window !== 'undefined') {
            const targetDiv = document.getElementById(id);
            let scrollPosition = (targetDiv?.getBoundingClientRect().top || 0) + window.scrollY - 116;
            if (id === "home") {
                scrollPosition = 0;
            }
            window.scrollTo({top: scrollPosition, behavior: 'smooth'});
            setOpenMenu(false);
        }
    }

    const goTo = (id: string) => {
        if (tab !== "/") {
            router.push(`/?tab=${id}`);
        } else {
            scrollTo(id);
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const pathname = window.location.pathname;


        const param = searchParams.get("tab");
        if (param) {
            scrollTo(param);
        }

        setTab(pathname);

    }, []);

    return (
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div className={classes.nameContainer}>
                    <div className={classes.logoContainer} onClick={() => goTo('home')}>
                        <Image className={classes.logo} src="/logo.svg" alt="corp78" fill
                               sizes="(max-width: 64px) , (max-width: 64px)"/>
                    </div>
                </div>
                <div className={classes.separator}/>
                <div className={classnames(classes.menuContainer, {
                    [classes.openMenu]: openMenu,
                    [classes.closeMenu]: !openMenu,
                })}>
                    <div className={classes.dropDownContainer}>
                        <div className={classes.closeMenuButtonContainer}>
                            <div className={classes.menuButton} onClick={closeOrOpenMenu}>
                                <Image className={classes.image} src="/IoClose.svg" alt="menu" width={40} height={40}/>
                            </div>
                        </div>
                        <div className={classes.separator}/>
                        <DropDown title="Accueil" onClick={() => goTo('home')}></DropDown>
                        <div className={classes.separator}/>
                        <DropDown title="Actualités" onClick={() => router.push("/actu")}/>
                        <div className={classes.separator}/>
                        <DropDown title="Contact" onClick={() => goTo('contact')}></DropDown>
                    </div>
                </div>
                <div className={classes.separator}/>
                <div className={classes.menuButton} onClick={closeOrOpenMenu}>
                    <Image className={classes.image} src="/IoMenu.svg" alt="menu" width={40} height={40}/>
                </div>
            </div>
        </div>
    );
};