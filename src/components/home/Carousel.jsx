
import { lazy, Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import One from '../../assets/static/svg/carousel/one.png';
import Two from '../../assets/static/svg/carousel/two.png';
import Three from '../../assets/static/svg/carousel/three.png';
import Four from '../../assets/static/svg/carousel/four.png';
import Five from '../../assets/static/svg/carousel/five.png';
import Six from '../../assets/static/svg/carousel/six.png';
import Seven from '../../assets/static/svg/carousel/seven.png';

// Import The Slider as Lazy component
const Slider = lazy(() => import("react-slick"));

const Carousel = () => {

      // Handling arrows and Carousel Settings

      const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
          <IoIosArrowForward
            className='arrow'
            onClick={onClick}
          />
        );
      }

    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
          <IoIosArrowBack
            className='arrow'
            onClick={onClick}
          />
        );
      }


    const settings = {
        initialSlide: 1,
        infinite: true,
        centerMode: false,
        centerPadding: "0",
        slidesToShow: 7,
        speed: 500,
        dots: false,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: { slidesToShow: 4 },
            },
            {
              breakpoint: 480,
              settings: { dots: true, slidesToShow: 3 },
            }
          ]
    };


    return(
        <div className="carousel-container">
            <div className="clients-slider">
                
                <Suspense fallback={null}>
                    <Slider {...settings}>
                        <img src={One} />
                        <img src={Two} />
                        <img src={Three} />
                        <img src={Four} />
                        <img src={Five} />
                        <img src={Six} />
                        <img src={Seven} />
                    </Slider>
                </Suspense>

            </div>
        </div>
    )
}


export default Carousel;