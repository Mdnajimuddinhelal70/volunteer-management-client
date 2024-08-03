import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="justify-center items-center">
          <img
            src="https://i.ibb.co/dk2z51f/voluter4.jpg"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="items-center justify-center">
        <img
            src="https://i.ibb.co/s3cypWt/valutr2.jpg"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="items-center justify-center">
        <img
            src="https://i.ibb.co/w6yRzTR/voluter3.jpg"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
