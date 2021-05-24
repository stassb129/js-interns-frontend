import css from './gallery.module.scss'
import Gallery from 'react-grid-gallery';
import {useState} from "react";


const GalleryModal = ({active, setActive, pictures}) => {
    // const IMAGES =
    //     [{
    //         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    //         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    //     },
    //         {
    //             src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //             thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         },
    //
    //         {
    //             src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //             thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         },
    //     ]

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