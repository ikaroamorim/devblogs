import Head from 'next/head';
import styles from '../styles/home.module.scss';

import { Hero } from '../components/Hero';
import { Card } from '../components/Card';

export default function Home() {
  const cards = ["1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ]

  return (
    <main className={styles.mainContainer}>
      <Head>
        <title>DevBlogs - Home</title>
        <meta property="og:title" content="DevBlogs - Home" key="title" />
      </Head>

      <div className={styles.container}>
        <Hero />

        <div className={styles.cardContainer}>
          {cards.map(item => {
            return <Card
              imageUrl={"https://via.placeholder.com/1600x900"}
              articleTitle={"Titulo da Notícia"}
              articleDate={"14 de janeiro 2002"}
              articleSummary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et faucibus dolor, vel vehicula mauris. Nunc luctus commodo ligula in hendrerit. Phasellus at nulla blandit, lacinia ipsum ut, venenatis justo. Sed dapibus ultricies metus, in gravida lectus volutpat eget. Nullam finibus dui at auctor varius. Sed tincidunt purus neque, in aliquam libero accumsan ut. Suspendisse velit neque, iaculis nec nunc vel, bibendum placerat libero."} />
          })}



        </div>
      </div>

    </main>
  )
}
