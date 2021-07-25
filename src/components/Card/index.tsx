import styles from './styles.module.scss';
import { DiHtml5, DiCss3, DiJsBadge, DiDatabase, DiGit, DiReact, DiVisualstudio } from "react-icons/di";
import { cardProps } from './props';
import { IconChooser } from '../IconChooser';


export function Card(props: cardProps) {

    return (
        <div className={styles.cardContainer}>
            <div
                className={styles.imageContainer}
                style={{
                    backgroundImage: `url(${props.imageUrl}`
                }}>
                <IconChooser option={props.tecnology}></IconChooser>
            </div>
            <div className={styles.description}>
                <h3> {props.articleTitle} </h3>
                <h4> {props.articleDate}</h4>
                <div className={styles.summaryContainer}>
                    <p> {props.articleSummary.length > 196 ? props.articleSummary.slice(0, 196).concat('...') : props.articleSummary} </p>
                </div>

            </div>
        </div>);
}