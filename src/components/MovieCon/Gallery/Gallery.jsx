import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem';
const Gallery = ({gallery,onGallery}) => {
    const {mainImg,galler} = gallery
    return (
        
        <div className={styles.galler}>
            <img src={mainImg} />
            <ul className={styles.galleryNav}>
                {
                    galler.map(item =><GalleryItem key={item.id} item={item} onGallery={onGallery}/> )
                }
                
            </ul>
        </div>
    );
};

export default Gallery;