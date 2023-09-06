
import { StyledModalImage } from './ImageGalleryItem.styled';
export const GallaryItem = ({ images }) => {
    return (
        images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return <StyledModalImage key={id}
        small={webformatURL}
        large={largeImageURL}
            alt={tags}
            showRotate/>
     
       }) )
}