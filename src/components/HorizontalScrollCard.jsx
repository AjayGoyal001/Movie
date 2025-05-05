import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 1300;
  };

  const handlePrev = () => {
    containerRef.current.scrollLeft -= 1300;
  };

  return (
    <div className="container mx-auto px-5.5 my-12">
      <h1 className="text-2xl lg:text-3xl font-bold mb-5 text-white capitalize">
        {heading}
      </h1>

      <div className="relative">
        <div
          ref={containerRef}
          className="scrollbar-none grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-7 overflow-hidden relative overflow-x-scroll z-10 scroll-smooth transition-all"
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id + "heading" + index}
                data={data}
                index={index + 1}
                trending={trending}
                media_type={media_type}
              />
            );
          })}
        </div>

        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrev}
            className="bg-white p-1 text-black rounded-full cursor-pointer -ml-2 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-1 text-black rounded-full cursor-pointer -mr-2 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
