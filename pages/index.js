import React from 'react';
import Head from 'next/head';
import './styles/index.scss';


class Index extends React.Component {

  render() {
    return (
      <>
        <Head>
          <title>Next.js App</title>
          <link rel="shortcut icon" href="../static/favicon.ico" />
        </Head>

        <section className="app">
            <h1>Next.js App!</h1>
        </section>
      </>
    )
  }
}
  
export default Index;

