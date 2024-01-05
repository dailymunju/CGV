
import Gallery from './Gallery/Gallery';
import InfoTab from './MovieBox/InfoTab';
import MovieBox from './MovieBox/MovieBox';
import styles from './MovieCon.module.scss'
const MovieCon = ({gallery,ConCategory,cateChange,onGallery }) => {
    return (
        <div className={styles.movieCon}>
            <InfoTab cateChange={cateChange} ConCategory={ConCategory}/>
            <div className={styles.inner}>
                <Gallery gallery={gallery} onGallery={onGallery}/>
                <MovieBox gallery={gallery} ConCategory={ConCategory} cateChange={cateChange}/> 
            </div>
        </div>
    );
};

export default MovieCon;