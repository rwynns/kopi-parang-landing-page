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
    <div className="bg-black min-h-screen flex flex-col items-center py-6 relative">
      {/* Back Arrow Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/" className="flex items-center text-white hover:text-amber-400 transition-colors duration-300">
          <ArrowLeft className="w-6 h-6 mr-2" />
        </Link>
      </div>

      <h1 className={`${headingFont.className} text-center text-white text-8xl font-bold`}>NON-COFFEE & MOCKTAIL</h1>
      <p className={`${bodyFont.className} text-center text-white text-lg mt-4`}>Enjoy the refreshing taste of our non-coffee beverages and mocktails with exceptional flavors.</p>

      <div className="w-full max-w-6xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden relative">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/coffee.png" alt="Arabica Beans" />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">Example Photo</h3>
              </div>
            </div>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-right" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/non-coffee-and-mocktail/2.png" alt="Arabica Beans" />
            </div>
          </AnimateOnLoad>
        </div>
      </div>

      <AnimateOnLoad animation="animate-fade-in-up" delay="delay-500">
        <div className="mt-2">
          <Image width={200} height={200} src="/images/logo-white.png" alt="Kopi Parang logo" />
        </div>
      </AnimateOnLoad>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-4 bg-amber-100">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/non-coffee-and-mocktail/menu-milk-based.png" alt="Kopi Parang menu coffee" />
        </div>
      </AnimateOnScroll>

      <div className="w-full max-w-6xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
            <div className="rounded-lg overflow-hidden relative">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/coffee.png" alt="Arabica Beans" />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">Example Photo</h3>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
            <div className="rounded-lg overflow-hidden relative">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/coffee.png" alt="Arabica Beans" />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">Example Photo</h3>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-4 bg-amber-100">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/non-coffee-and-mocktail/menu-mocktail-and-homemade.png" alt="Kopi Parang menu coffee" />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Coffee;
