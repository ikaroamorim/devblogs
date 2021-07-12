import styles from './styles.module.scss';

import { BsSearch } from 'react-icons/bs';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.searchContainer}>
                <input type="text" name="searchBar" id="search-bar-input" placeholder={'Pesquisar...'} />
                <button type="submit">
                    <BsSearch/>
                </button>
            </div>
            <div className={styles.userContainer}>
                <button>Login</button>
                <button>Criar Conta</button>
            </div>
        </header>);
}