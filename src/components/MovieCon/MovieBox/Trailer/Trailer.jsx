import styles from './Trailer.module.scss'
const Trailer = ({gallery}) => {
    const {teaser} = gallery.infoData[2]
    return (
        <>
            <video autoPlay muted loop className={styles.movieVideo}>
                <source src={teaser} type="video/mp4"/>        
            </video>
        </>
    );
};

export default Trailer;