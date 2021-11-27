import Head from "next/head"
import React from "react"
const Layout = ({ children }: any) => {
    return (
        <main>
            <Head>
                <title>Hotel App</title>
                <meta name="description" content="Hotel NextJS App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto py-10">
            <>{children}</>
            </div>
        </main>
    )
}

export default Layout;