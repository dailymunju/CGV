
import { useEffect, useState } from 'react';
import styles from './MovieSub.module.scss'
import MovieList from '../MovieList/MovieList';
import movieData from '../../assets/api/movieData';
import MovieCon from '../MovieCon/MovieCon';
import MovieSlide from './MovieSlide';

const MovieSub = () => {
    const [InfoData, setInfoData] = useState(movieData)
    const [gallery, setGallery] = useState(movieData[0])
    const [ConCategory, setCategory] = useState('info')
    const [subMenu, setSubMenu] = useState('무비차트')
    const [cnt, setCnt] = useState(0)

    const cateChange = (category) => {
        setCategory(category)
    }

    const SubMenuChange = (e) => {
        const movie = e.target.textContent
        if(movie === subMenu) return
        setSubMenu(movie)
        if(movie === '무비차트'){ setInfoData(movieData)} else { setInfoData(movieData.filter(item=>item.category === movie)) }
    }
    const galleryChange = (id,idx) => {
        setGallery(movieData.find(item => item.id === id))
        setInfoData(InfoData.map(item => item.id === id ? {...item, isClass:true} : {...item, isClass:false}))
        setCnt(idx)
    }

    const onGallery = (item) => {
        setGallery({...gallery, mainImg:item.img})
    }
    
    useEffect(()=>{
        setCategory('info')
    },[InfoData])

    useEffect(()=>{
        setCnt(0)
        setGallery(InfoData[0])
        if(subMenu === '무비차트') { setInfoData(InfoData.map(item => item.movie === 'The Day' ? {...item , isClass:true} : item))}
        if(subMenu === '현재상영작') { setInfoData(InfoData.map(item => item.movie === 'The Day' ? {...item , isClass:true} : item))}
        if(subMenu === '상영예정작') { setInfoData(InfoData.map(item => item.movie === 'Single in Seoul' ? {...item , isClass:true} : item))}
     },[subMenu])

   /*  useEffect(()=>{
        setGallery(InfoData[cnt])
        setInfoData(InfoData.map(item => item.actor === InfoData[cnt].actor ? {...item, isClass:true} : {...item, isClass:false}))
    },[cnt]) */

    return (
        <main className={styles.container}>
            <section className={styles.content}>
                <div className={styles.conBox}>
                    <MovieSlide/>
                </div>
                <MovieList InfoData={InfoData}  galleryChange={galleryChange} SubMenuChange={SubMenuChange} subMenu={subMenu}/>
                <MovieCon gallery={gallery} ConCategory={ConCategory} cateChange={cateChange} onGallery={onGallery}  />
            </section>
        </main>
    );
};

export default MovieSub;