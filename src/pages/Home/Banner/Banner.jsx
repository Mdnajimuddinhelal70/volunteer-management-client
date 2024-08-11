import { Swiper, SwiperSlide } from "swiper/react";
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
        <SwiperSlide className="relative flex items-center justify-center mx-auto">
          <img
            src="https://i.ibb.co/dk2z51f/voluter4.jpg"
            alt="Volunteer Management"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">Volunteer Management</h2>
                <p className="text-sm">
                  Effective volunteer management ensures that volunteers are well-coordinated, engaged, and motivated. It involves recruiting, training, and supporting volunteers to help achieve organizational goals and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/s3cypWt/valutr2.jpg"
            alt="Volunteer Management"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">Volunteer Management</h2>
                <p className="text-sm">
                  Effective volunteer management ensures that volunteers are well-coordinated, engaged, and motivated. It involves recruiting, training, and supporting volunteers to help achieve organizational goals and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/w6yRzTR/voluter3.jpg"
            alt="Volunteer Management"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">Volunteer Management</h2>
                <p className="text-sm">
                  Effective volunteer management ensures that volunteers are well-coordinated, engaged, and motivated. It involves recruiting, training, and supporting volunteers to help achieve organizational goals and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
