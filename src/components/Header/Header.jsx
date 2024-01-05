import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
            <header>
                <div className={styles.inner}>
                    <h1><a href="#"><img src="./images/logo.png" alt="logo" /></a></h1>
                    <ul className={styles.topMenu}>
                        <li><a href="#">영화</a></li>
                        <li><a href="#">극장</a></li>
                        <li><a href="#">예매</a></li>
                        <li><a href="#">스토어</a></li>
                        <li><a href="#">이벤트</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;