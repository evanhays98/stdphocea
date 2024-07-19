import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Studio Phocea - Formation en Ligne pour Auto-Entrepreneurs",
    description: "Rejoignez Studio Phocea pour une formation en ligne complète sur la création et la gestion d'une auto-entreprise. Accessible sans prérequis, cette formation vous guide à travers les étapes essentielles, des formalités administratives à la gestion quotidienne de votre activité. Apprenez à recruter, gérer les salaires, optimiser votre protection sociale et planifier votre retraite. Inscrivez-vous dès aujourd'hui pour développer vos compétences entrepreneuriales avec des modules interactifs et un suivi personnalisé.",
    keywords: "formation auto-entrepreneur, création entreprise, gestion entreprise, formation en ligne, Studio Phocea, e-learning, auto-entrepreneur, protection sociale, gestion salariale, stratégie retraite, administration entreprise, cours en ligne, entrepreneuriat, formalités administratives, recrutement, contrats de travail, optimisation fiscale, activité indépendante."
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
