import Link from "next/link";
import Image from "next/image";
import HeroImage from "../../public/tresure-image.jpg";
import TractorImage from "../../public/tractor-2.png";
import ArchitectImage from "../../public/set-architect-tools.jpg";
import CompassImage from "../../public/compass.jpg";

// Reusable ImageGrid component
const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-72 h-80 overflow-hidden rounded-lg border border-secondary transform ${
            index % 2 === 0
              ? "rotate-3 translate-x-4"
              : "-rotate-2 translate-x-2"
          } hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out`}
        >
          <Image
            src={image}
            alt={`Static Image ${index + 1}`}
            className="h-full w-full object-cover object-center"
            width={288}
            height={320}
            priority // Ensures faster loading
          />
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
  const images = [CompassImage, HeroImage, TractorImage, ArchitectImage];

  return (
    <div className="relative overflow-hidden bg-background my-14 md:my-10">
      <div className="lg:py-40 min-h-[650px]">
        <div className="relative mx-auto sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-xl text-start">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl lg:hidden max-md:mb-6 font-bold tracking-tight text-primary">
              At <span className="text-accent">50%</span> Off
            </h1>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-text">
              Treasure Hunter
            </h1>

            <p className="mt-4 line-clamp-3 text-lg sm:text-xl lg:text-2xl text-gray-500">
              Discover multiple ways to buy Equipment and Exploration
            </p>

            <div className="mt-10 flex flex-col max-sm:items-center max-sm:justify-center">
              {/* Mobile Image Grid */}
              <div className="lg:hidden">
                <ImageGrid images={images.slice(0, 2)} />
              </div>

              <div className="flex gap-4 items-center max-sm:justify-center max-sm:mt-6">
                <Link href="/cart">
                  <button className="mt-6 inline-block rounded-md border border-transparent bg-primary px-6 py-3 text-center font-medium text-white hover:text-accent">
                    Go to cart
                  </button>
                </Link>

                <Link
                  href="/products"
                  className="mt-6 inline-block rounded-md bg-transparent border border-accent px-6 py-3 text-center font-medium text-accent hover:text-primary hover:border-primary"
                >
                  All Products
                </Link>
              </div>
            </div>

            {/* Desktop Image Grid */}
            <div className="hidden lg:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <ImageGrid images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
