import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "./assets/Image/image1.jpeg";
import image2 from "./assets/Image/image2.jpg";
import image3 from "./assets/Image/image3.jpeg";
import image4 from "./assets/Image/image4.avif";
import image5 from "./assets/Image/image5.jpeg";
import thumb from "./assets/Image/thumb.png";
import hug from "./assets/Image/hug.png";
import heart from "./assets/Image/heart.png";
import trophy from "./assets/Image/trophy.png";

const images = [
  { img: image1, top: "15%", left: "30%" },
  { img: image2, top: "40%", left: "20%" },
  { img: image3, bottom: "10%", left: "33%" },
  { img: image4, bottom: "0%", right: "30%" },
  { img: image5, top: "20%", right: "30%" },
];
const emojis = [
  { emoji: thumb, top: "25%", left: "50%" },
  { emoji: hug, top: "60%", left: "25%" },
  { emoji: trophy, bottom: "0%", left: "50%" },
  { emoji: heart, bottom: "38%", right: "23%" },
];

function App() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-white to-blue-50 text-center overflow-hidden flex flex-col items-center justify-center">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-[20px]">Hear How They Level Up Their Game!</h1>
        <p className="text-[25px] font-bold">
          Skill <span className="text-green-600">Masters</span> Unite! 🤝
        </p>
        <h2 className="flex items-center gap-2 font-semibold">
          View all Testimonials <FaArrowRightLong />
        </h2>
      </div>
      {images.map((item, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          <img src={item.img} alt="" className="w-16 h-16 rounded-2xl " />
        </div>
      ))}

      {emojis.map((item, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          <img src={item.emoji} alt="" className="w-16 h-16 rounded-2xl " />
        </div>
      ))}
    </div>
  );
}

export default App;
