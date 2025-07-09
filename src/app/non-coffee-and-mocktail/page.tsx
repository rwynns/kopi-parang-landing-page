import AnimateOnLoad from "@/components/AnimateOnLoad";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { ArrowLeft } from "lucide-react";

const headingFont = JetBrains_Mono({ subsets: ["latin"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["400"] });

const Coffee = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8 relative">
      {/* Back Arrow Button */}
      <div className="absolute top-6 left-4 sm:left-6 z-50">
        <Link href="/" className="flex items-center text-white hover:text-amber-400 transition-colors duration-300 p-2">
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span className={`${headingFont.className} text-xs sm:text-sm hidden sm:block`}>Back</span>
        </Link>
      </div>

      <h1 className={`${headingFont.className} text-center text-white text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-bold mt-8`}>NON-COFFEE & MOCKTAIL</h1>
      <p className={`${bodyFont.className} text-center text-white text-sm sm:text-base lg:text-lg mt-4 px-4`}>Enjoy the refreshing taste of our non-coffee beverages and mocktails with exceptional flavors.</p>

      <div className="w-full max-w-6xl mt-8 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden relative">
              <Image width={0} height={0} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto" src="/images/non-coffee-and-mocktail/1.png" alt="Non-Coffee Beverage" />
            </div>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-right" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <Image width={0} height={0} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto" src="/images/non-coffee-and-mocktail/2.png" alt="Non-Coffee Beverage" />
            </div>
          </AnimateOnLoad>
        </div>
      </div>

      <AnimateOnLoad animation="animate-zoom-in" delay="delay-500">
        <div className="mt-6 sm:mt-8">
          <Image width={200} height={200} className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52" src="/images/logo-white.png" alt="Kopi Parang logo" />
        </div>
      </AnimateOnLoad>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-6 sm:mt-8">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/non-coffee-and-mocktail/menu-milk-based.png" alt="Milk-based menu" />
        </div>
      </AnimateOnScroll>

      <div className="w-full max-w-6xl mt-8 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
            <div className="rounded-lg overflow-hidden relative">
              <Image width={0} height={0} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto" src="/images/non-coffee-and-mocktail/3.png" alt="Beverage Example" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
            <div className="rounded-lg overflow-hidden relative">
              <Image width={0} height={0} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto" src="/images/non-coffee-and-mocktail/4.png" alt="Beverage Example" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-6 sm:mt-8 mb-8">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/non-coffee-and-mocktail/menu-mocktail-and-homemade.png" alt="Mocktail and homemade menu" />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Coffee;
