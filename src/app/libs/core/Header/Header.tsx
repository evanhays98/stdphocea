"use client";

import React, {useEffect, useState} from 'react';
import {DropDown} from "@/app/libs/core/DropDown/DropDown";
import Image from "next/image";
import classnames from "classnames";
import {useRouter} from "next/navigation";
import {createUseStyles} from "react-jss";
import {theme, Theme} from "@/app/libs/Theme/Theme";


const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    container: {
        width: '100%',
        padding: theme.marginBase * 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: theme.boxWidth.large,
        margin: '0 auto',
    },
    mainContainer: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: theme.colors.blue0,
        width: '100%',
        borderBottomLeftRadius: theme.marginBase * 2,
        borderBottomRightRadius: theme.marginBase * 2,
        boxShadow: '0 4px 16px 0 rgba(var(--black), 0.07)',
    },
    dropDownContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: theme.marginBase * 2,
        [theme.media.tablet]: {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'flex-start',
        },
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        alignItems: 'center',
    },
    logoContainer: {
        width: 64,
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        [theme.media.tablet]: {
            width: 48,
            height: 48,
        },
    },
    name: {
        color: 'rgb(var(--green-5))',
    },
    logo: {
        width: 64,
        height: 64,
        objectFit: 'cover',
        [theme.media.tablet]: {
            width: 48,
            height: 48,
        },
    },
    closeMenuButtonContainer: {
        display: 'none',
        [theme.media.tablet]: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row-reverse',
            padding: '0 16px',
        },
    },
    meetingMenu: {
        display: 'none',
        [theme.media.tablet]: {
            display: 'block',
            paddingBottom: theme.marginBase * 2,
        },
    },
    menuButton: {
        display: 'none',
        [theme.media.tablet]: {
            display: 'block',
            width: 40,
            height: 40,
            cursor: 'pointer',
        },
    },
    menuContainer: {
        [theme.media.tablet]: {
            zIndex: 100,
            transform: 'translateX(400px)',
            position: 'fixed',
            width: '95%',
            top: 0,
            bottom: 0,
            right: 0,
            maxWidth: '400px',
            borderBottomLeftRadius: '16px',
            borderTopLeftRadius: '16px',
            background: 'rgba(var(--green-5), 0.997)',
            display: 'flex',
            alignItems: 'flex-start',
            padding: '32px 16px',
            overflowY: 'scroll',
        },
        '&.openMenu': {
            transform: 'translateX(0px)',
            animation: '$openMenu 0.3s ease-in-out',
        },
        '&.closeMenu': {
            transform: 'translateX(400px)',
            animation: '$closeMenu 0.3s ease-in-out',
        },
    },
    separator: {
        display: 'block',
        borderRadius: 2,
        width: '90%',
        height: 1,
        margin: '0 auto',
        background: 'rgb(var(--green-2))',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
    },
    '@keyframes openMenu': {
        '0%': {
            transform: 'translateX(400px)',
        },
        '100%': {
            transform: 'translateX(0px)',
        },
    },
    '@keyframes closeMenu': {
        '0%': {
            transform: 'translateX(0px)',
        },
        '100%': {
            transform: 'translateX(400px)',
        },

    },
}));


export const Header = () => {

    const classes = useStyles({theme});

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