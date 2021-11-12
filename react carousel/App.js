import React,{Component} from 'react';
import CarouselComponent from './Components/ImageGalleryCarousels';
// import Antd from "./Components/Antd";
import Gallery from './Components/Gallery';

import SliderCarousel from './Components/SliderCarousel';

class App extends Component{
    render(){
        return(
            <div>
                  
                <Gallery/>
                 {/* <Antd/> */}
              
              <SliderCarousel/>

              <CarouselComponent/>
            </div>
        )
    }
}

export  default App;