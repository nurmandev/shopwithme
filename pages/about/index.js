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
      <div className="flex justify-center items-center min-h-screen md:mx-40 font-space-grotesk md:pt-36">
        <div className="p-8 rounded-lg max-w-6xl w-full">
          <div className="text-center mb-5 md:w-4/5 md:mx-auto">
            <h2 className="text-2xl font-bold mb-4 md:text-6xl">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 md:text-lg">
              We&apos;re here to help and answer any questions you might have.
              We look forward to hearing from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                    rows={4}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button className="bg-[#0d1132] border-2 border-black text-white py-2 px-4 flex gap-1 items-center rounded-lg mt-4 hover:bg-[#aab1ee] hover:text-[#0d1132]">
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center lg:block sm:hidden">
              <Image
                src={secondImage}
                width={300}
                height={50}
                alt="Team working"
                className="rounded-lg shadow-md object-cover w-full h-full max-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; // Ensure a default export
