import React from "react";
import Slider from "react-slick";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJsSquare,
  FaNode,
  FaGithubSquare,
  FaNpm,
  FaMicrosoft,
  FaPython,
  FaSass,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiMysql,
  SiNotion,
  SiWordpress,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // Increase speed for smoother transition
    slidesToShow: 8, // Default for large screens
    slidesToScroll: 1, // Scrolls one icon at a time for a smooth effect
    autoplay: true,
    autoplaySpeed: 0, // Remove delay between autoplay
    cssEase: "linear", // For smooth continuous scrolling
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // Extra large screens (xl)
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1024, // Large screens (lg)
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640, // Small screens (sm)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Very small screens (mobile)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-[#07090d] w-full flex justify-center">
      <div className="w-11/12 py-20">
        <Slider {...settings}>
          <div>
            <FaHtml5 color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaCss3Alt color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaBootstrap color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaReact color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaJsSquare color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaNode color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaGithubSquare color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaNpm color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaMicrosoft color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaPython color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaSass color="gray" size="72" className="icon" />
          </div>
          <div>
            <SiTailwindcss color="gray" size="72" className="icon" />
          </div>
          <div>
            <IoLogoVercel color="gray" size="72" className="icon" />
          </div>
          <div>
            <SiNetlify color="gray" size="72" className="icon" />
          </div>
          <div>
            <SiMysql color="gray" size="72" className="icon" />
          </div>
          <div>
            <FaJava color="gray" size="72" className="icon" />
          </div>
          <div>
            <SiNotion color="gray" size="72" className="icon" />
          </div>
          <div>
            <SiWordpress color="gray" size="72" className="icon" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
