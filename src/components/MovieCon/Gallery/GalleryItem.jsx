const GalleryItem = ({item,onGallery}) => {
    const {img} = item
    return (
        <>
            <li onClick={()=>onGallery(item)}><img src={img} alt="" /></li>
        </>
        
    );
};

export default GalleryItem;