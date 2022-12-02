import React from "react";
import img1 from "../../assets/image1.avif";
import img2 from "../../assets/image2.avif";
import img3 from "../../assets/image3.avif";
import img4 from "../../assets/image4.avif";
const Banner = () => {
  return (
    //banner
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" alt="" />

        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
          <h1 className="text-6xl font-bold text-white">
            Lots of Lovely
            <br />
            Stuff available
            <br />
            For christmas
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2">
          <p className="text-3xl text-yellow-300 font-bold leading-10 tracking-wide">
            An early presents <br />
            only if you're quick
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
          <button className="btn btn-warning mr-5">SHOP NOW</button>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt="" />

        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
          <h1 className="text-6xl font-bold text-white">
            Lots of Lovely
            <br />
            Stuff available
            <br />
            For christmas
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2">
          <p className="text-3xl text-yellow-300 font-bold leading-10 tracking-wide">
            An early presents <br />
            only if you're quick
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
          <button className="btn btn-warning mr-5">SHOP NOW</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" alt="" />

        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
          <h1 className="text-6xl font-bold text-white">
            Lots of Lovely
            <br />
            Stuff available
            <br />
            For christmas
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2">
          <p className="text-3xl text-yellow-300 font-bold leading-10 tracking-wide">
            An early presents <br />
            only if you're quick
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
          <button className="btn btn-warning mr-5">SHOP NOW</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
          <h1 className="text-6xl font-bold text-white">
            Lots of Lovely
            <br />
            Stuff available
            <br />
            For christmas
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2">
          <p className="text-3xl text-yellow-300 font-bold leading-10 tracking-wide">
            An early presents <br />
            only if you're quick
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
          <button className="btn btn-warning mr-5">SHOP NOW</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
