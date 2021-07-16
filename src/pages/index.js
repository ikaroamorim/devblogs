import Head from 'next/head';
import styles from '../styles/home.module.scss';

import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Head>
        <title>DevBlogs - Home</title>
        <meta property="og:title" content="DevBlogs - Home" key="title" />
      </Head>

      <div className={styles.container}>
        <Hero />
      </div>

    </main>
  )
}
