"use client"

import {Footer, Header, Page} from "@/app/libs/core";
import {Acceuil} from "@/app/Accueil";
import {Contact} from "@/app/Contact";
import {Formation} from "@/app/Formation";
import {Programme} from "@/app/Programme";
import {AdditionalInfo} from "@/app/libs/core/AdditionalInfo/AdditionalInfo";
import {useEffect} from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Page>
            <Header/>
            <Acceuil/>
            <Formation />
            <Programme />
            <AdditionalInfo />
            <Contact/>
            <Footer/>
        </Page>
    );
}

export default Home;

