import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from "@/app/libs/Theme/Theme";

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    container: {
        width: '100%',
        background: theme.colors.blue0,
        margin: '-32px auto 0',
        borderRadius: '32px 32px 0 0',
        boxShadow: '0 0 50px 16px rgba(235, 245, 255, .25)',
        borderTop: 'solid 1px rgba(35, 55, 75, .8)',
        position: 'relative',
        padding: theme.marginBase * 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyright: {
        fontSize: 13,
        fontWeight: 400,
        color: theme.colors.blue5,
    },
    circle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        filter: 'blur(80px)',
    }
}));

export const Footer = () => {

    const classes = useStyles({ theme });

    return (
        <div className={classes.container} id="home">
            <div className={classes.circle}/>
                <p className={classes.copyright}>© studio phocea</p>
        </div>
    );
};
