import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function Slider() {
  return (
    <>
      <div className="bg-section">
        <div className="bg-box">
          <img src="images/slider-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6">
              <div class="detail-box">
                <h1>
                  <span>20 درصد تخقیف</span>
                  <br />
                  تمامی محصولات
                </h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع است.
                </p>
                <div class="btn-box">
                  <a href="" class="btn1">
                    خرید کنید
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
