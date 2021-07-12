import '../styles/globals.scss';
import styles from '../styles/app.module.scss';



import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';

function MyApp({ Component, pageProps }) {
  return (

    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.mainPageBottom}>
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
