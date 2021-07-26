import React from 'react'
import Head from 'next/head';
import styles from '../styles/home.module.scss';

import { Hero } from '../components/Hero';
import { Card } from '../components/Card';

import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

//export default function Home() {
const Home = () => {
  const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",];

  const AuthUser = useAuthUser();

  return (
    <main className={styles.mainContainer}>
      <Head>
        <title>DevBlogs - Home</title>
        <meta property="og:title" content="DevBlogs - Home" key="title" />
      </Head>

      <div className={styles.container}>
        <Hero />

        <div> \nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3XoJHwHv0tk5a\nQpVSn6aOP/4Wu3c0z2uXIGTCflOngQEZvIsHZu8xBiujE/lI1RJbWVjso86xnFBP\nP4k94VEi+7vk6lNovI5jdpDv7LkoRZKcwjkmKPTGbPcRDXls3f6yOmJXkUo0tPC4\nnUzoMLXUwUEcpUyD2FJ3aqJa+ZoRZZbXYy/pmXYrEqP9e5AZRXMCIi4IcXfk3GRR\nBsZYoeLTRfifDm+yIBu+ApsC0eXtCGKI3ai8+i6DYztnu4TQqFjkKAJuoSBI65Du\nnYfWuHkOOl3IhRfyY0RFUUIYjR+f0fEfa64zdS/rA33rVw+5OoCCAKvkkJn9j/nK\ns7ufHLABAgMBAAECggEAA6iHid3tuyqd8pAMgZr8zC67p4Fy9eNDfr7fM8AodBmP\nR4+q6Gll0UERws2ltg3GMXtdWk9EUufO9F3Mo6boov2JuJ3yLw8/+f0GFDtRUFve\n+nCnijrb809+OGFf8EuXhr/CcYPNCrMncE93FtTN8+ItJeCoX6MDti0y8wSyzbED\n9cC6fAqk9h9MLK/aDDIRK6sCxFy142byzWPrhkB6kemmzP0BZkuMPGxDlJG67Cen\nKL0PvWeI82I2poqjQ3UFvqJ7GO3Nv+vBrbqiDBM9D2gwq2z7sYYgvjfOYXIdXvfr\njHb0NrQlfo5Ig7Vqnst0H9EYaBIsMYK8z4YWlLOhRwKBgQD0TVlgr44EVc2d8yYu\nQLVq76IBAVwUvkojh95QkJafpanXNHaMxZcPxxbOhQLBvuSXNmkaxD+H2cZmsTO3\nfsFBEfHdiwPe4Y+pteEf7XA+enfVxPNkc5h3U33r0DPkRX4q4q0DL/QdX8vNXjiz\nwsbg2Tq08AXFlZi+zaVY/NNb2wKBgQDAJj6gkzQSO9CQ9XnzHY6v6051AbQgdf9e\nL7XW9ZC7BmhmNd1qQZ4vs9yfyQfsTb7mKsOPvYuwXsmQIqZiTNqe40ydau1M0E2X\nPig76jSGay5/FSkfxIeXU89/7/LeI4vEmHk5bC7l9hEBtZA/I8Ns5VQRKLStgVWj\nS5bVNto4UwKBgA5rMkc+lUc0OTqFS0+Xih2RnyIoDmM7B+0o67odjoZFpMyK0CRm\n1Q+dVH9D4nHE7oDuOS3XP1ipRchx1PeTh5xrjrbgqY3SCkSd83eK8AEAAWqggS0A\nlZMVXm04kJd8coHddxClF+dT7Bdm5DnX2R0UNR7Qu8Z5mdZJFOU3ptHZAoGBAIWB\nTRxGivRsSOKfHIc1rzE9vfqAH4Y6Vh876Q0c+91me10g6eFtDBq6znzasb2W2x+S\n8OPLX+ZARa321UIRggjJhy8M3ynyxSZjkpLmjG4kxF6Z9kPTSh5zpgWPU2DSs8b5\n5ahnKUKwMGrOmxWzpJHh2QI/FSJEbZsS5w7nmMFvAoGAD1CIvWASbG5s7RdOelSz\nTUrJls4nDYSZfjIU5tGOYrOZ1iRZCz0axPiCGwjxMxob5ZQE6SjeUUzufU+86TzN\nvwXkJM6i1lng+mQK2kr3ohG7tSDzSkBiJ+6YEbVak4CIN6/d9kOLrbXgf2dwrFud\nZYeEfbQM99qnQnBJk4j8Z2c=\n-----END PRIVATE KEY-----\n</div>

        <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>

        <div className={styles.cardContainer}>
          {cards.map((item, index) => {
            return <Card
              key={index}
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

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Home)