"use client"

import {Footer, Header, Page} from "@/app/libs/core";
import {Acceuil} from "@/app/Accueil";
import {Contact} from "@/app/Contact";

const Home = () => {

    return (
        <Page>
            <Header/>
            <Acceuil/>
            <Contact/>
            <Footer/>
        </Page>
    );
}

export default Home;

