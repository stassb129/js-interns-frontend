import css from './rangeSlider.module.scss'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useEffect, useState} from "react";


const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range);


const RangeSlider = ({initValue, maxValue, style, callback}) => {
    const [range, setRange] = useState([0, maxValue])
    const [isMax, setIsMax] = useState(true)

    const rangeSliderHandler = (value) => {
        setRange(value)
    }

    useEffect(() => {
        if (initValue)
            setRange(initValue)
    }, [])

    useEffect(() => {
        if (range[1] === maxValue) {
            setIsMax(true)
        } else
            setIsMax(false)
    }, [range, setRange])


    return (
        <div className={css.slider}>
            <p className={css.title}>
                price range: min {range[0]}$ max {range[1]}$ {isMax && '+'}
            </p>
            <Range min={0} max={maxValue}
                   defaultValue={range}
                   value={range}
                   onAfterChange={() => callback(range)}
                   allowCross={false}
                   onChange={rangeSliderHandler}
                   tipFormatter={value => `${value} $`}/>
        </div>
    )
}

export default RangeSlider