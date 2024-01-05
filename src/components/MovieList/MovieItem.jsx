
import styles from './MovieList.module.scss'
const MovieItem = ({ item, galleryChange,idx}) => {
    const {id,tumImg,isClass} = item
    return (
        <li onClick={()=>galleryChange(id,idx)} className={isClass ? `${styles.on}` : ''} >
           <span className={styles.grade}>{id}</span>
           <img src={tumImg} alt="" />
        </li>
    );
};

export default MovieItem;