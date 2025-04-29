import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PopularAirLines() {
  const { t } = useTranslation();
  return (
    <section className="how_we_work_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h3>{t("popularAirlines.title")}</h3>
            <p>{t("popularAirlines.subtitle")}</p>
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
              <SwiperSlide>
                <img src="/airlines/E5.webp" alt="Egypt Air" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/airlines/EK.webp" alt="Lufthansa" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/airlines/MS.webp" alt="Etihad" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/airlines/NP.webp" alt="Kuwait Airways" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/airlines/SV.webp" alt="Emirates" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/airlines/TK.webp" alt="Turkish Airlines" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/airlines/XY.webp" alt="Turkish Airlines" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
