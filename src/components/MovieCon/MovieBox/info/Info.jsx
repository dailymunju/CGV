import InfoTab from '../InfoTab';
import styles from './Info.module.scss'
const Info = ({gallery}) => {
    const {title,day,genre,country,director,actor,rating,score,brief, runtime} = gallery.infoData[0]
    return (
        <div className={styles.movieInfo}>
                <div className={styles.infoBox}>
                    <h2>{title} <span>상영중</span></h2>
                    <ul className={styles.infoList}>
                        <li>개봉날짜 : { day }</li>
                        <li>평점 : { score } </li>
                        <li>국가 : { country } </li>
                        <li>장르 : { genre } </li>
                        <li>등급 : { rating} </li>
                        <li>러닝타임: { runtime } </li>
                        <li>출연: { actor }</li>
                        <li>감독: { director }</li>
                    </ul>
                    <p> { brief }</p>
                </div>
        </div>
    );
};

export default Info;