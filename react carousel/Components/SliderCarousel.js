import React from "react";
import CarouselSlider from 'react-carousel-slider';
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import image4 from "./image/image4.jpg";
import image5 from "./image/image5.jfif";
import image6 from "./image/image6.jpg";
import image7 from "./image/image7.jpg";

class SliderCarousel  extends React.Component{
    render(){
        var data=[
            {
                // des:1,
                imgSrc:image1,
        },{
            // des:2,
            imgSrc:image2,
        },{
            // des:3,
            imgSrc:image3,
        },{
            // des:4,
            imgSrc:image4,
        },{
            // des:5,
            imgSrc:image5,
        },
        {
            // des:4,
            imgSrc:image6,
        },{
            // des:5,
            imgSrc:image7,
        }
    ]
    return <CarouselSlider slideItems={data}/>
    }
}

export default SliderCarousel;