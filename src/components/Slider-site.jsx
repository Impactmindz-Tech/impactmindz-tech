import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { sliderData } from "../data/SliderSite";

const SliderSite = ({ sliderData }) => {

    var settings = {
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            {
                sliderData.map((item, i) => (
                    <>
                        <img key={i} width='100%' src={item.src} alt="" />
                    </>
                ))
            }
        </Slider>
    )
}

export default SliderSite