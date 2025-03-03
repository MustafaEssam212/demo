import { lazy, Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithPlaceholder from "./ImageWithPlaceholder";


// Use this custom component to make a responsive slider || carousel => Dots + No Arrows + 3 Images To Show => of an array of images (src as string or statically imported) (Array of strings).
// This custom component uses ImagesWithPlaceholder that manage onLoad attr to show loading circle to user untill load the pic
// Example =>  <ImageSlider imgs={['https://link-to-image', 'or imported pic statically', Pic]} />



// Import The Slider as Lazy component
const Slider = lazy(() => import("react-slick"));




const ImageSlider = ({imgs}) => {



    const settings = {
      initialSlide: 1,
      infinite: imgs.length > 3,
      centerMode: true,
      centerPadding: "0",
      slidesToShow: Math.min(imgs.length, 3),
      speed: 500,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: { slidesToShow: 1, centerMode: true, centerPadding: "20%" },
        }
      ]
    };
  
  
    return (
      <div className="slider-container">
        <Suspense fallback={null}>
            <Slider {...settings}>
            {imgs.map((src, index) => {
                return(
                    <ImageWithPlaceholder key={index} src={src} alt="Event Image" title="Event Image" />
                )
            })}
            </Slider>
        </Suspense>
      </div>
    );
  };
  
  export default ImageSlider;