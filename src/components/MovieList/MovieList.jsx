import MovieMenu from "../MovieMenu/MovieMenu";
import MovieItem from "./MovieItem";
import styles from './MovieList.module.scss'
const MovieList = ({InfoData,SubMenuChange, subMenu,galleryChange}) => {
    return (
        <>
            <div className={styles.movieList}>
                <MovieMenu SubMenuChange={SubMenuChange} subMenu={subMenu}/>
                <div className={styles.inner}>
                    <ul>
                        {
                            InfoData.map((item,idx) => <MovieItem item ={item} key={item.id} galleryChange={galleryChange} idx={idx} /> )
                        }
                    </ul>
                </div>
            </div>
            
        </>
       
    );
};

export default MovieList;