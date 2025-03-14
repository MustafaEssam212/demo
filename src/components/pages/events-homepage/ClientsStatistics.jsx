import { lazy, Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AnimatedCounter from "../../reusable/AnimatedCounter";
import ResponsiveTypography from "../../reusable/ResponsiveTypography";


// Import The Slider as Lazy component
const Slider = lazy(() => import("react-slick"));



const ClientsStatistics = () => {

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
        <div className="clients-statistics-container">
            
                <div className="clients-slider">
                    
                    <Suspense fallback={null}>
                        <Slider {...settings}>
                            <img src="https://s3-alpha-sig.figma.com/img/fa00/bafc/b9ab16ea4dfb961abaa1791f9c3de09f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nTkC1BQssDdmpGS~yb2ysoy-Y5MuKiEty8ujTL1aHDv6XHXD0gqO9eLdlSohq~dLdzlyNxlZ0hhrRB8nQq23JOOGKq91nj2KfDXbZdt~wyFbSd7SqsNK8eDWIwLgXMlD6~6NQDkcIx5P2Nf6HQFTDJEL2AXAqUmm9LKxaHhQtHJ3n1LUxCbRiQWnyvmuyA7naUrF4txk7DXqr6Abw0QR7fGLQcPl9SjyElWUk8CcfoOJRxk79Z~4jVdqFAzvKKD1hpPT3iMix5jxFDrveUShgnO8HPnOspqs6eMDfgDI0qJbMhvjrGfco4bZXdJwglJ4uktyRcTOQpsfHuTT3P2mWw__" />
                            <img src="https://s3-alpha-sig.figma.com/img/28a1/2ba8/9d71f22fa362748de3a67ed7ed99b6dc?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lYh~osG1ILYkwc1G94FQHC5JrRyUwfyOzweiv4sPO0mLw6TEm9aLaQjD9l1s-LSC2umRBaYTTx99Nf1dp6QKU~M7~OBRh~1~I5Xsd2Ts33on-LIVN4xMz~gdGnynzJQ7DXpyLdilLzSKMtPL3k~MBJuLIM4T1jiYjrTWhKO6lhLrrOKzkTYfPaNyocXvdRbeE-rNYuVkxN8PqvsCu151pberDvfdGK7jGA8h31un18wzuYnzeyifgOCozM94qcQ0pUQs3TAL23I7t5LMH5tS~T8zZg3K7BIN5oi83W~mDHOm3SePqBnzkSjHP4TFB2nRSms1G8XAGwdwnz6O65eYlw__" />
                            <img src="https://s3-alpha-sig.figma.com/img/e53b/5686/46baa4b28a0044cd397c4dd855b24c64?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DWua4CIh7nhFM5~3Z-lY5XAoVRIJ3j1d-JaNMowH94rx4Vd8Ru5vuYfPzj9oe1Xh6zzAfzfxEeJmFe8Dg-MoVzCA4Ij-ApEzJUG4qnR3Oqu-8w1tx~BXUDCQRCrRbt7uGrjOhgeOnUWbXH9LO9Yzq83aI35eEDCH97q9hQYYDyd9K1NdXHZAJ9j4jHex0jZU6uoiWVD4aSZm3rrX2VsMz8u46PmKdVauLByvHx9k4fmvx3ow9GNJDyxTwtHg6uvyWeQP7LWXejbiVXhKFd8wwEJirnDWcttcCtCFhkL2-VnW0mpBIJnK8ppa~V1-epOvH5LOfKD75-cViaLzxn2mGg__" />
                            <img src="https://s3-alpha-sig.figma.com/img/3c7a/4280/4e4ec42ed55a4deeaa8fde8a083ab082?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hQEXBBi~k4KNvCjir-csEyjW53iOze2BSyb8lqE4qruVpPClFPcTu5N9VV~vFlKLRWB8d-lx8sagUpJ53ynYVjHnO1NZECIpi5PdMpj66IUtBCemvqg-hVUWQVXlMmoDCH0gh5-vcRGz7cFDEONpvGGDk5rYAGXxsQWS2HyAgld-IlJ1GnodXINg3F-lrVCIsmfM3RCrMxaxWvCBrw-xoswPzAeod6fjIPFUSunDh4Qg8iu670KUXu9lXywpXhPA9jVw3j~aJSeQHXog6qHKgeCqAwXiwFW7zu11x0hm2fZTV~Cc-pSa1h2XtrVvpFHMnYoXfQDo~ge1WYETwVJQ5w__" />
                            <img src="https://s3-alpha-sig.figma.com/img/766b/db2b/c3926ef0c7f46502ac14ac6747ae6ed4?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ILeZ-GLsG0DAoGvyS8IiwO9hgrGLJ995aE3Ur5FKwkDiy4ERuRKoH8M0heV8JJ5kijgDf94puSLS6Hqt2jCY2wo12Mrnv4moPMAI9qh5dwQ8eEA5ebTVfvboacL6SmSG9BYkVWIlIe8Xs21-5xBquhhqju-oPhCBxRrSZ8MgInyXn6kdzqgX-5i0Hh7WZW5A5vSdku8xMJGEs7IpW1dIIiRzE2vdcNzVbLiRxoZVjCaOsyfsxOd6SN8Ty4tNYluGS8yPi8f8Jhtfj6gn1ltAoxE8Us1736L2axw2yIPCuQhf6xbKz8wg2byJhUxVI2g-F04V4XxGAVyvottT96iZSw__" />
                            <img src="https://s3-alpha-sig.figma.com/img/b52d/33af/0a93d61a663aface47de78d73f8f15f1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xv0g71QNrZA-cdgJoQwW03KpTZvqXdhAcJqphOiCkm12cTdq8EDKNCFtPLMoU-WLO9dMeXQM-csO6oSizWiDvh510quwqUXPHQj6rfEBx0jhC4RcL6YojrwYlcnxufIfB1CCXuqxFMbAzaEBr9poRZQRPTyRP1bnePjj8ww9B1fwaAoSSDnCLqYAxZxD-CnLnYPC~PXe7ZzxBNZYHANa913G~hu6giiftHMqp2DR7Nqu7o5-FYt71heRNjmTvpD93Pvtl8TpzQSmm24bSMeYArQs8Vtq-hVyo4NV-iYNzIIf1iSnyAg2vSDlOjcVU9MjECjB1xIHL6Or9iHnnD~UZQ__" />
                            <img src="https://s3-alpha-sig.figma.com/img/8525/e038/cd86f0ce92de15f96d9c7113cbf38eae?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cMghFgSoXwoBcHw77Wpp7H3oNzx~i9XGE7Ll2H8PWZuoc63pt3uo9b27HWllRqMkGWVca660TD1q6YrWcPvydmGvZC9vpV5SDQ22PQMX8z6a8dmyv6gDBq7B9R7oixawv8wrHwx1knHsSLkdrK2kCI79lurQvL9aTMWrteUnBw769QXb8kRO3NZPcWXpoTQRSI9kid7dolLgCTLPGfshY-W4QNpNfycR6-gN9ovf0JsDLQ~vJMASOxowCH1DeOKJLOp6bqN0XJocrDjPIFS7eEj031HwIccW-fajeFg-PGFSpPZ~w4OUqWBxB1ehr-GG99msVZLlxWQcZj-qG9do3Q__" />
                        </Slider>
                    </Suspense>

                </div>
      

                <div className="clients-nums">
                    
                    <div className="number">
                        <ResponsiveTypography HTMLTag="h3" txt={<><AnimatedCounter targetNumber={350} duration={3000} />k+</>} startFontSizeInPX={56} endFontSizeInPX={18} />
                        <ResponsiveTypography HTMLTag="h5" txt="Happy Customers" startFontSizeInPX={38} endFontSizeInPX={14} />
                    </div>

                    <div className="number">
                        <ResponsiveTypography HTMLTag="h3" txt={<><AnimatedCounter targetNumber={98} duration={3000} />%</>} startFontSizeInPX={56} endFontSizeInPX={18} />
                        <ResponsiveTypography HTMLTag="h5" txt="Customer Satisfaction" startFontSizeInPX={38} endFontSizeInPX={14} />
                    </div>

                    <div className="number">
                        <ResponsiveTypography HTMLTag="h3" txt={<><AnimatedCounter targetNumber={5700} duration={3000} />+</>} startFontSizeInPX={56} endFontSizeInPX={18} />
                        <ResponsiveTypography HTMLTag="h5" txt="Sponsors and Vendors" startFontSizeInPX={38} endFontSizeInPX={14} />
                    </div>

                </div>

        </div>
    )
}


export default ClientsStatistics;