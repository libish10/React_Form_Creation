import React,{Component} from "react";
import "./ImageGallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";
import image5 from "../image/image5.jfif";
import image6 from "../image/image6.jpg";
import image7 from "../image/image7.jpg";

class ImageGalleryCarousels extends Component{
    render(){
        return(
            <div id="galleryContainer">
                <Carousel>
                    <div>
                        <img src={image1} alt="image1"></img>
                    </div>
                    <div>
                        <img src={image2} alt="image2"></img>
                    </div>
                    <div>
                        <img src={image3} alt="image3"></img>
                    </div>
                    <div>
                        <img src={image4} alt="image4"></img>
                    </div>
                    <div>
                        <img src={image5} alt="image5"></img>
                    </div>
                    <div>
                        <img src={image6} alt="image6"></img>
                    </div>
                    <div>
                        <img src={image7} alt="image7"></img>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default ImageGalleryCarousels;