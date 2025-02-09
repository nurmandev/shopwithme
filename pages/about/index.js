"use client";

import React from "react";
import secondImage from "../../public/tresure-image.jpg";
import Image from "next/image";
import { Download, PhoneCall } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="md:py-40 py-10 px-10">
        <div className="md:text-center">
          <div
            className="
        text-5xl
        md:text-7xl
        flex
        justify-center
        pb-10
        
        "
          >
            About Us
          </div>

          {/* <div
            className="
        text-5xl
        md:text-7xl
        flex
        justify-center
        font-medium
        pb-10
        text-[#681b58]
        "
          >
            Tresure Hunter is a globally leading online marketplace for selling
            and buying used equipment, Exploration and other durable assets that
            cater to all your business needs.
          </div> */}
          <p
            className="
        text-xl
        md:text-3xl
        font-light
        md:w-4/5
        md:mx-auto
        text-[#681b58]
        leading-normal
        "
          >
            شركه treasure hunters هي شركه عالميه تم تأسيسها في عام 2017 في
            الولايات المتحدة الأمريكية وهي شركه متخصصه في تكنولوجيا التنقيب حيث
            تقوم بصناعة اجهزه متقدمة متخصصه في الكشف والتنقيب عن ثروات باطن
            الأرض ولديها العديد من براءات الاختراع.
          </p>
        </div>
      </div>
    </>
  );
};

export default About; // Ensure a default export
