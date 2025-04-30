import { Facebook, Instagram, Headset, Mail } from "lucide-react";
import telegramImage from "../../public/telegram.png";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <section className="md:flex flex-col md:py-10 md:justify-between">
        <div className="p-10 space-y-10 md:space-y-0 md:text-center md:flex justify-between md:px-80 md:space-x-20">
          <div>©2025 Tresure Hunter. All rights reserved.</div>

          <div className="flex items-center justify-center space-x-2">
            <div className="bg-black p-2 rounded-full">
              <Link href="mailto:treasurehunters437@gmail.com">
                <Mail className="h-6 w-6 text-white" />
              </Link>
            </div>

            <div className="bg-black p-2 rounded-full">
              <Link href="https://web.facebook.com/">
                <Facebook className="h-6 w-6 text-white" />
              </Link>
            </div>

            <div className="bg-black p-2 rounded-full">
              <Link href="https://t.me/TreasureHuntersx">
               <Image
                        className="w-full md:max-w-[50px]"
                        src={telegramImage}
                        alt="telegram"
                        width={50}
                        height={50} // adjust according to image
                      />
                {/* <Headset className="h-6 w-6 text-white" telegram/> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
