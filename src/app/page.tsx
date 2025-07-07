import Image from "next/image";
import Link from "next/link"; // Import Link component
import AnimateOnLoad from "@/components/AnimateOnLoad";
import { JetBrains_Mono } from "next/font/google";

const headingFont = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className={`${headingFont.className} uppercase text-8xl font-bold text-center text-white`}>WHAT WE SERVE</h1>

      <div className="w-full max-w-4xl mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <Link href="/coffee" className="block group">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-[3/2] relative bg-gray-800 cursor-pointer">
                  <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300" src="/images/coffee/2.png" alt="Arabica Beans" />
                  {/* Overlay and text that appear on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`${headingFont.className} text-white text-xl font-bold px-4 py-2 rounded-xl bg-black/50`}>See here</span>
                  </div>
                </div>
                <h1 className={`${headingFont.className} text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Coffee</h1>
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
                    <span className={`${headingFont.className} text-white text-xl font-bold px-4 py-2 rounded-xl bg-black/50`}>See here</span>
                  </div>
                </div>
                <h1 className={`${headingFont.className} text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Non-Coffee & Mocktail</h1>
              </div>
            </Link>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <Link href="/" className="block group">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-[3/2] relative bg-gray-800 cursor-pointer">
                  <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300" src="/images/croissant.png" alt="Croissant" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`${headingFont.className} text-white text-xl font-bold px-4 py-2 rounded-xl bg-black/50`}>See here</span>
                  </div>
                </div>
                <h1 className={`${headingFont.className} text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Buttersome</h1>
              </div>
            </Link>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-right" delay="delay-500">
            <Link href="/kombucha-series" className="block group">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-[3/2] relative bg-gray-800 cursor-pointer">
                  <Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-300" src="/images/kombucha/4.png" alt="Kombucha Series" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`${headingFont.className} text-white text-xl font-bold px-4 py-2 rounded-xl bg-black/50`}>See here</span>
                  </div>
                </div>
                <h1 className={`${headingFont.className} text-lg font-semibold text-white p-2 transition-colors duration-300 group-hover:text-amber-400`}>Kombucha Series</h1>
              </div>
            </Link>
          </AnimateOnLoad>
        </div>
      </div>
    </div>
  );
}
