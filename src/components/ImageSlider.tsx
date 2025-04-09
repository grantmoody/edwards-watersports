import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';

interface ImageSliderProps {
    images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-scroll
        autoplaySpeed: 10000,
    };

    return (
        <Slider {...settings}>
            {images.map((imageUrl, index) => (
                <div key={index} className='slider-div'>
                    <Typography variant='h5' mt={3} >
                        <strong>
                            {imageUrl === 'yamaha.png' ? 'Yamaha Waverunner' : `Sea-Doo Spark Trixx ${index + 2}up`}
                        </strong>
                    </Typography>
                    <img src={imageUrl} alt={`Slide ${index + 1}`} className='trixxImage' />
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;
