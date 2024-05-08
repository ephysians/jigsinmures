import image4 from '../../Asset/images/four-bottle.webp';
import image2 from '../../Asset/images/small bottle.webp';
import image1 from '../../Asset/images/cleanest_1bottle-removebg-preview.png';
import image3 from '../../Asset/images/two-size-removebg-preview.png';
import image6 from '../../Asset/images/bottles.jpg';
import image5 from '../../Asset/images/one-full-carton.webp';
import image7 from '../../Asset/images/beneficiary1.jpg';
import image8 from '../../Asset/images/beneficiary5.jpg';
import image9 from '../../Asset/images/beneficiary7.jpg';
import image10 from '../../Asset/images/couple-winner.jpg';
import image11 from '../../Asset/images/group beneficiary.webp';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';


const Hero = () => {
  const slickRef = useRef(null);

  useEffect(() => {
    // Initialize Slick Carousel
    if (slickRef.current) {
      slickRef.current.slickGoTo(0); // Go to the first slide (optional)
    }
  }, []);

  const sliderSettings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-between items-center border p-12 text-#252525">
      <div className="flex flex-col justify-center w-1/2 relative bottom-2 pb-10 pl-10">
        <h1 className="text-4xl font-bold mb-4 font-segeo text-green-900">JIGSIMUR HERBAL</h1>
        <p className="text-lg font-segeo text-green-900">
          <span className="bold text-green-900 ">TRUSTED SOLUTION TO STUBBORN AILMENTS! <br /></span>
          <span>
             Jigsimur-natural-health-drink is a herbal product drink for curing of Arthritis, Gout, Fibrosis, Diabetes, Migraines, Insomnia, Gall and Kidney stones, Throat infections, Heart burn Colic, Stomach ulcers, Bladder infections, Haemorrhoids, Shingles, Constipation, Osteoporosis, and more.
             Jigsimur is a blend of Aloe Ferox and all its phytonutrients that have been scientifically proven to prevent and cure common ailments and stubborn diseases. 
          </span>
        </p>
        <div className="flex space-x-4 items-center pl-9 p-8">
        <div className="border-[1px] border-black px-8 py-3 hover:shadow-xl relative right-10 uppercase rounded-tr-lg rounded-bl-lg shadow-5">
          <Link to="/shop">
            buy jigsimur
          </Link>
        </div>
        <div className="bg-black px-8 py-3 hover:shadow-xl uppercase relative right-10 rounded-tr-lg rounded-bl-lg text-yellow-400  ">
          <Link to="/register">
            become a distributor
          </Link>
        </div>
        </div>

      </div>

      <div className="w-1/2 h-[400px] ">
        <Slider ref={slickRef} {...sliderSettings} >
          <div>
            <img src={image1} alt="Slider 1" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image2} alt="Slider 2" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image3} alt="Slider 3" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image4} alt="Slider 4" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image5} alt="Slider 5" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image6} alt="Slider 6" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image7} alt="Slider 7" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image8} alt="Slider 8" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image9} alt="Slider 9" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image10} alt="Slider 10" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          <div>
            <img src={image11} alt="Slider 11" className="w-full h-[400px] object-cover object-scale-down" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
