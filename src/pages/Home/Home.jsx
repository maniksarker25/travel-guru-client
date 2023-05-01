import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import './Home.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);


  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  }
  const params = {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  }
  const currentPlace = places.find((p,i)=>i === currentIndex);
  return (
    <div className="max-w-screen-xl mx-auto mt-12 lg:mt-36 lg:px-32 lg:flex gap-4 ">
      <div className="lg:w-4/12 ps-6 lg:ps-0 text-white ">
        <h1 className="text-4xl">{currentPlace?.name}</h1>
        <p className="mt-6 text-xl">{currentPlace?.description}</p>
        <Link to='/booking'><button className="booking-btn px-3 flex items-center gap-2 py-1 mt-6 text-black">Booking <ArrowRightIcon className="w-4"></ArrowRightIcon> </button></Link>
      </div>
      <div className="lg:w-8/12 ps-6 mt-8 lg:mt-0 lg:ps-0">
        <h2 className="text-3xl text-white ">Choice Your Destination</h2>
        <Swiper
          onSlideChange={handleSlideChange}
          {...params}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-12"
        >
          {places.map((place) => {
            return (
              <SwiperSlide key={place.id}>
                <div>
                  <Link to="/booking" className="cursor-pointer">
                    <div>
                      <img
                        className="h-72 w-64 relative rounded-md"
                        src={place.image_url}
                        alt=""
                      />
                      <h3 className="text-2xl text-white relative bottom-11 ps-4 z-10">
                        {place.name}
                      </h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
