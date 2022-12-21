import React from "react";
import bike1 from "../Res/bike1.png";
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';

interface ISliderProps
{
    indicators?: boolean;
}

const Slider = ({indicators = true}:ISliderProps) => {
    return  <div className="CarouselIndi">
            <Carousel controls={false} interval={3000} indicators={indicators}>
            <Carousel.Item>
                <Image src={bike1} alt="Bike" style={{width: "100%", height: "auto", zIndex:0}} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={bike1} alt="Bike" style={{width: "100%", height: "auto", zIndex:0}} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={bike1} alt="Bike" style={{width: "100%", height: "auto", zIndex:0}} />
            </Carousel.Item>
            </Carousel>
        </div>
}

export default Slider;