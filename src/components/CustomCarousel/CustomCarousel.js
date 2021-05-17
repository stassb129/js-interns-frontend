import css from './carousel.module.scss'
import Slider from "react-slick";
import {useEffect, useRef, useState} from "react";


const CustomCarousel = ({items}) => {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)

    let slider1 = []
    let slider2 = []

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])


    const settingsSliderFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    };
    const settingsSliderNav = {
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
    };


    return (
        <div className={css.carousel}>
            <Slider
                asNavFor={nav2}
                ref={slider => (slider1 = slider)}
                {...settingsSliderFor}>

                {
                    items.map(e => (
                        <div>
                            <div style={{backgroundImage: `url(${e})`}}
                                 className={css.mainPicture}>
                            </div>
                        </div>
                    ))
                }
            </Slider>


            <Slider
                asNavFor={nav1}
                ref={slider => (slider2 = slider)}
                {...settingsSliderNav}>

                {
                    items.map(e => (
                        <div>
                            <div style={{backgroundImage: `url(${e})`}}
                                 className={css.secondaryPictures}>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default CustomCarousel