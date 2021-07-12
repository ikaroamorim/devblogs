import { DiHtml5, DiCss3, DiJsBadge, DiDatabase, DiGit, DiReact, DiVisualstudio } from "react-icons/di";

import Image from 'next/image';
import onlineLearning from './online-learning.png';

import styles from './styles.module.scss';

import './online-learning.png';



export function SideBar() {

   return (
      <aside className={styles.sideBarComponent}>
         <div className={styles.logoContainer}>
            <Image src={onlineLearning} width={60} height={60}></Image>
         </div>
         <ul>
            <li><DiHtml5 /></li>
            <li><DiCss3 /></li>
            <li><DiJsBadge /></li>
            <li><DiDatabase /></li>
            <li><DiGit /></li>
            <li><DiReact /></li>
            <li><DiVisualstudio /></li>
         </ul>
      </aside>
   );
}

