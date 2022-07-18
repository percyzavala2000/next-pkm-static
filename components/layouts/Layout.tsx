import Head from 'next/head'
import React, {FC, Fragment} from "react";
import {Navbar} from '../ui';


const origin=(typeof window !== 'undefined')?window.location.origin:'';

type PropsChildren = {
    children?: React.ReactNode;
    title: string;
};

export const Layout : FC < PropsChildren > = ({children, title}) => {

  console.log(origin);
  
    return (
        <Fragment>
            <Head>
                <title>{title || "Pokemonn APP"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content={`informacion sobre ${title}`}/>
                <meta name="keywords" content={`${title},pokemon, pokedex`}/>
                <meta name="author" content="Percy Zavala"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta property="og:title" content={`informacion sobre ${title} `}/>
                <meta property="og:description" content={`Aqui tenemos una breve informacion de ${title} `}/>
                <meta property="og:image" content={`${origin}/img/bannner.png`}/>
            </Head>
            {/* navbar */}
            <Navbar/>
            <main style={{
                padding: "0px 20px"
            }}>{children}</main>
        </Fragment>
    );
};
