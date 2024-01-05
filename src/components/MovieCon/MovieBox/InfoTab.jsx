import styles from './InfoTab.module.scss'
const InfoTab = ({cateChange,ConCategory}) => {
    return (
        <ul className={styles.infoTab}>
            <li className={ConCategory === 'info' ? `${styles.on}`: ''} onClick={()=>cateChange('info')}>info</li>
            <li className={ConCategory === 'actor' ? `${styles.on}`: ''} onClick={()=>cateChange('actor')}>actor</li>
            <li className={ConCategory === 'trailer' ? `${styles.on}`: ''} onClick={()=>cateChange('trailer')}>trailer</li>
        </ul>
    );
};

export default InfoTab;