import Image from "next/image";
import Link from "next/link"; // Import Link component
import AnimateOnLoad from "@/components/AnimateOnLoad";
import { JetBrains_Mono } from "next/font/google";

const headingFont = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`${headingFont.className} uppercase text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-center text-white`}>WHAT WE SERVE</h1>

      <div className="w-full max-w-4xl mt-6 sm:mt-8 lg:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <Link href="/coffee" className="block group">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-[3/2] relative bg-gray-800 cursor-pointer">
                  <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300" src="/images/coffee.png" alt="Coffee" />
                  {/* Overlay and text that appear on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`${headingFont.className} text-white text-base sm:text-lg lg:text-xl font-bold px-3 py-2 sm:px-4 rounded-xl bg-black/50`}>See here</span>
                  </div>
                </div>
                <h1 className={`${headingFont.className} text-base sm:text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Coffee</h1>
              </div>
            </Link>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-right" delay="delay-500">
            <Link href="/non-coffee-and-mocktail" className="block group">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-[3/2] relative bg-gray-800 cursor-pointer">
                  <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300" src="/images/mocktail.png" alt="Non-Coffee & Mocktail" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`${headingFont.className} text-white text-base sm:text-lg lg:text-xl font-bold px-3 py-2 sm:px-4 rounded-xl bg-black/50`}>See here</span>
                  </div>
                </div>
                <h1 className={`${headingFont.className} text-base sm:text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Non-Coffee & Mocktail</h1>
              </div>
            </Link>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <Link href="/bites" className="block group">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-[3/2] relative bg-gray-800 cursor-pointer">
                  <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300" src="/images/Bites.png" alt="Buttersome" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`${headingFont.className} text-white text-base sm:text-lg lg:text-xl font-bold px-3 py-2 sm:px-4 rounded-xl bg-black/50`}>See here</span>
                  </div>
                </div>
                <h1 className={`${headingFont.className} text-base sm:text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Bites</h1>
              </div>
            </Link>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-right" delay="delay-500">
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-[3/2] relative bg-gray-800">
                <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300 grayscale" src="/images/logo parang 2.png" alt="Merchandise" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                  <span className={`${headingFont.className} text-white text-base sm:text-lg lg:text-xl font-bold px-3 py-2 sm:px-4 rounded-xl bg-black`}>Coming Soon</span>
                </div>
              </div>
              <h1 className={`${headingFont.className} text-base sm:text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Merchandise</h1>
            </div>
          </AnimateOnLoad>
        </div>
      </div>
    </div>
  );
}
