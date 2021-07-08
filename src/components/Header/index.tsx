import styles from './styles.module.scss';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.siteLogoContainer}> Dev Blogs</div>
            <div className={styles.searchContainer}>
                <input type="text" name="searchBar" id="search-bar-input" placeholder={'Digite o conteúdo a ser buscado'} />
                <button type="submit">Pesquisar</button>
            </div>
            <div className={styles.userContainer}>
                <button>Login</button>
                <button>Criar Conta</button>
            </div>
        </header>);
}