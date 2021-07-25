import styles from './styles.module.scss';
import { IconChooser } from '../IconChooser';


export function Hero() {

    const renderIndividualCard = (imageUrl, tituloNoticia, dataNoticia, tecnologia) => {
        return (
            <div
                className={styles.cardContainer}
                style={{
                    backgroundImage: imageUrl
                }}>
                <div className={styles.cardInfoContainer}>
                    <span> {tituloNoticia} </span>
                    <p> {dataNoticia}</p>
                </div>
                <div
                    className={styles.cardIconContainer}
                >
                    <IconChooser option={tecnologia}/>
                </div>

            </div>
        )
    }

    return (
        <div className={styles.principal}>
            <div className={styles.heroContainer}>
                <div className={styles.twinContainers} >
                    {renderIndividualCard(`url('https://via.placeholder.com/1600x900')`, 'Titulo da notícia', 'Data da notícia', 'html')}
                </div>
                <div className={styles.twinContainers}>
                    <div className={styles.smallItem}>
                        {renderIndividualCard(`url('https://via.placeholder.com/800x450')`, 'Titulo da notícia', 'Data da notícia', 'css')}
                    </div>
                    <div className={styles.smallItem}>
                        {renderIndividualCard(`url('https://via.placeholder.com/800x450')`, 'Titulo da notícia', 'Data da notícia', 'js')}
                    </div>
                    <div className={styles.smallItem}>
                        {renderIndividualCard(`url('https://via.placeholder.com/800x450')`, 'Titulo da notícia', 'Data da notícia', 'dataBase')}
                    </div>
                    <div className={styles.smallItem}>
                        {renderIndividualCard(`url('https://via.placeholder.com/800x450')`, 'Titulo da notícia', 'Data da notícia', 'git')}
                    </div>
                </div>
            </div>
        </div>
    )
}