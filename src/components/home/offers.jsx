import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OffersSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 9,
    minutes: 52,
    seconds: 9,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference <= 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const cities = ["الصين", "نيويورك", "نيبال", "ميشور"];

  return (
    <section className="offers-section">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-8 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h6 className="text-white mb-2">عروض وخصومات</h6>
                <h2 className="text-white mb-0">عروض سفر لا تفوت</h2>
              </div>
              <div className="nav-buttons">
                <button ref={prevRef} className="custom-nav-btn">
                  <i className="fas fa-chevron-right"></i>
                </button>
                <button ref={nextRef} className="custom-nav-btn">
                  <i className="fas fa-chevron-left"></i>
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
            >
              {cities.map((city, index) => (
                <SwiperSlide key={index}>
                  <div className="card text-white border-0 h-100">
                    <img
                      src={`/images/offer${index + 1}.jpg`}
                      className="card-img"
                      alt={city}
                    />
                    <div className="card-img-overlay p-2">
                      <div className="card-badges">
                        <span className="badge One">خصم 50%- </span>
                        {index % 2 === 0 && (
                          <span className="badge Two">مميز</span>
                        )}
                        </div>
                        <div className="card-text">
                        <h5 className="card-title">{city}</h5>
                        <p>$160</p>
                        </div>
                  
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-4 discount-box">
            <img
              src="/images/price.png"
              alt="خصم 50%"
              className="img-fluid mb-3"
            />
            <div className="timer d-flex">
              <div className="time-box">
                <h4>{timeLeft.days}</h4>
                <span>يوم</span>
              </div>
              <div className="time-box">
                <h4>{timeLeft.hours}</h4>
                <span>ساعة</span>
              </div>
              <div className="time-box">
                <h4>{timeLeft.minutes}</h4>
                <span>دقيقة</span>
              </div>
              <div className="time-box">
                <h4>{timeLeft.seconds}</h4>
                <span>ثانية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
