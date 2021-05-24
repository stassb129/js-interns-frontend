import css from './gallery.module.scss'
import Gallery from 'react-grid-gallery';
import {useState} from "react";


const GalleryModal = ({active, setActive, pictures}) => {

    const IMAGES = pictures.map((e, index) => {
            if (index % 2 === 0) {
                return {
                    src: `${e}`,
                    thumbnail: `${e}`,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212
                }
            } else
                return {
                    src: `${e}`,
                    thumbnail: `${e}`,
                    thumbnailWidth: 320,
                    thumbnailHeight: 170
                }
        }
    )
    return (
        <div className={css.modal}>
            <div className={css.content}>
                <i onClick={setActive} className="icon-cancel"></i>
                <Gallery images={IMAGES}/>
            </div>
        </div>
    )
}


const GalleryContainer = ({pictures}) => {
    const [galleryActive, setGalleryActive] = useState(false)

    const galleryActiveHandler = () => {
        setGalleryActive(!galleryActive)
    }

    return (
        <div>

            <div onClick={galleryActiveHandler} className={css.imagesContainer}>
                <div style={{backgroundImage: `url(${pictures[0]})`}}
                     className={css.main}></div>

                <div style={{backgroundImage: `url(${pictures[1]})`}}>
                </div>

                <div style={{backgroundImage: `url(${pictures[2]})`}}>
                </div>

                <div style={{backgroundImage: `url(${pictures[3]})`}}>
                </div>

                <div style={{backgroundImage: `url(${pictures[4]})`}}>
                </div>
            </div>

            <div>
                {galleryActive &&
                <GalleryModal active={galleryActive}
                              setActive={galleryActiveHandler}
                              pictures={pictures}/>}
            </div>

        </div>


    )
}

export default GalleryContainer