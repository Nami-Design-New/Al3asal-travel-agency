import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PopularAirLines({ airlines }) {
  return (
    <section className="how_we_work_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h3>{airlines?.title}</h3>
            <p>{airlines?.content}</p>
          </div>

          <div className="col-12 p-2">
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              dir="ltr"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {airlines?.data?.map((airline) => (
                <SwiperSlide key={airline?.id}>
                  <img src={airline?.image} alt={airline?.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
