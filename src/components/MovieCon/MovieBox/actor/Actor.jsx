import styles from './Actor.module.scss'
import ActorItem from './ActorItem';

const Actor = ({gallery}) => {
    const {actorData} = gallery.infoData[1]
    const actorList = [...actorData]
    return (
        <div className={styles.Actor}>
            {actorList.map(item=> <ActorItem key={item.id} item={item}/>)}
        </div>
    );
};

export default Actor;