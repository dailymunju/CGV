import styles from './MovieSub.module.scss'
import slideData from '../../assets/api/slideData';
import { useEffect, useState } from 'react';
const MovieSlide = () => {
    const [ data , setData ] = useState( slideData )
    const [ imgItem , setImgItem ] = useState( data[0] )
    const [cnt, setCnt] = useState(0)
    const { imgurl } = imgItem
    const total = data.length 
    
    useEffect(()=>{
        setData( data.map( item => item.id === cnt + 1 ? {...item, isClass:true } : {...item, isClass:false } ))
        setImgItem(data[cnt])
        
        const timer = setInterval(() => {
            if(cnt < total-1){
                setCnt(cnt + 1)
            }else{
                setCnt(0)
                setImgItem(data[0])
            }
        }, 4000);
        
        return() => {
            clearTimeout(timer)
        }
    },[cnt])

    return (
        <div className={styles.intro}>
            <img src={imgurl} alt=""/>
        </div> 
    );
};

export default MovieSlide;