import styles from './styles.module.scss';

import { BsSearch } from 'react-icons/bs';
import Link from 'next/link'

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
                <Link href={'/auth'}><button>Login</button></Link>
                <button>Criar Conta</button>
            </div>
        </header>);
}