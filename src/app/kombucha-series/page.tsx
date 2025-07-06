import AnimateOnLoad from "@/components/AnimateOnLoad";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import { Poppins } from "next/font/google";

const headingFont = JetBrains_Mono({ subsets: ["latin"] });
const bodyFont = Poppins({ subsets: ["latin"], weight: ["400"] });

const Kombucha = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-6">
      <AnimateOnLoad animation="animate-fade-in-down" delay="delay-300">
        <div className={`${headingFont.className} uppercase text-8xl font-bold text-center text-white`}>Kombucha Series</div>
      </AnimateOnLoad>

      <AnimateOnLoad animation="animate-fade-in-up" delay="delay-300">
        <div className={`${bodyFont.className} text-center text-white text-lg mt-4`}>Home Made Kombucha Tea</div>
      </AnimateOnLoad>

      <AnimateOnLoad animation="animate-zoom-in" delay="delay-500">
        <div className="w-full max-w-6xl mt-16">
          <Image width={550} height={550} src="/images/kombucha/mascot.png" alt="Kopi Parang logo" />
        </div>
      </AnimateOnLoad>

      <div className="self-start ml-32 mt-16">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-8xl font-bold text-left`}>ORIGINAL</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="self-start ml-32 mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-8xl font-bold text-left`}>KOMBUCHA</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="self-start ml-32 mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-8xl font-bold text-left`}>KOMBUCHA</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="self-start ml-32 mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-8xl font-bold text-left`}>PITAHAYA</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="self-start ml-32 mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-8xl font-bold text-left`}>SEASONAL</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-xl font-bold text-left mt-2`}>Ask Our Barista</div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-12 bg-amber-100">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/kombucha/2.png" alt="Kopi Parang menu coffee" />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-4 bg-amber-100">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/kombucha/3.png" alt="Kopi Parang menu coffee" />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-4 bg-amber-100">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/kombucha/4.png" alt="Kopi Parang menu coffee" />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Kombucha;
