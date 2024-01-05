import styles from './Actor.module.scss'
const ActorItem = ({item}) => {
    const { name, born, job, work, des,img, birth } = item
    return (
        <div className={styles.ActorInfo}>
            <div className={styles.imgWrap}><img src={img}/></div>
            <div className={styles.txtWrap}>
                <h3>{ name }</h3>
                <p>국적 : { born }</p>
                <p>출색 : { birth }</p>
                <p>직업 : { job } </p>
                <p>대표작품 : { work }</p>
                <p className={styles.desc}>{ des }</p>
            </div>
        </div>
    );
};

export default ActorItem;