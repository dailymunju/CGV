import styles from './MovieMenu.module.scss'
const MovieMenu = ({SubMenuChange,subMenu}) => {
    return (
        <div className={styles.MovieMenu}>
            <div className={subMenu === '무비차트' ? `${styles.on}`:``} onClick={SubMenuChange}>무비차트</div>
            <div className={subMenu === '현재상영작' ? `${styles.on}`:``} onClick={SubMenuChange}>현재상영작</div>
            <div className={subMenu === '상영예정작' ? `${styles.on}`:``} onClick={SubMenuChange}>상영예정작</div>
        </div>
    );
};

export default MovieMenu;