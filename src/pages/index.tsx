import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <>
    <Head>
      <title>Hotel App</title>
      <meta name="description" content="Hotel NextJS App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <button className="bg-blue-500 text-white font-bold">Button</button>
    <h1 className="text-left">Hello World</h1>
    </>
  )
}

export default HomePage
