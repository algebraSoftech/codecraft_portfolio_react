import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      content:
        "Vinay delivered an excellent MERN project! The UI was super clean and the performance was outstanding.",
    },
    {
      name: "Sarah Smith",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      content:
        "Very professional, great communication, and on-time delivery. Highly recommended!",
    },
    {
      name: "Michael Lee",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
      content:
        "Amazing front-end skills! The components were reusable, clean, and perfectly aligned.",
    },
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      content:
        "Vinay delivered an excellent MERN project! The UI was super clean and the performance was outstanding.",
    },
    {
      name: "Sarah Smith",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      content:
        "Very professional, great communication, and on-time delivery. Highly recommended!",
    },
    {
      name: "Michael Lee",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
      content:
        "Amazing front-end skills! The components were reusable, clean, and perfectly aligned.",
    },
  ];

  return (
    <div className="py-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <h2 className="text-3xl font-bold text-center mb-10">
        ⭐ What Clients Say
      </h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-xl mx-auto">
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{t.name}</h3>

                    <div className="flex text-yellow-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
