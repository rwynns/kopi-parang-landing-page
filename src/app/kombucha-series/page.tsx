import AnimateOnLoad from "@/components/AnimateOnLoad";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import Link from "next/link";
import { headingFont, bodyFont } from "@/lib/fonts";
import { ArrowLeft } from "lucide-react";

const Kombucha = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8 relative">
      {/* Back Arrow Button */}
      <div className="absolute top-6 left-4 sm:left-6 z-50">
        <Link href="/" className="flex items-center text-white hover:text-amber-400 transition-colors duration-300 p-2">
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span className={`${headingFont.className} text-xs sm:text-sm hidden sm:block`}>Back</span>
        </Link>
      </div>

      <AnimateOnLoad animation="animate-fade-in-down" delay="delay-300">
        <div className={`${headingFont.className} uppercase text-4xl sm:text-6xl lg:text-8xl font-bold text-center text-white`}>Kombucha Series</div>
      </AnimateOnLoad>

      <AnimateOnLoad animation="animate-fade-in-up" delay="delay-300">
        <div className={`${bodyFont.className} text-center text-white text-base sm:text-lg mt-4`}>Home Made Kombucha Tea</div>
      </AnimateOnLoad>

      <AnimateOnLoad animation="animate-zoom-in" delay="delay-500">
        <div className="w-full max-w-6xl mt-8 sm:mt-12 lg:mt-16 flex justify-center">
          <Image
            width={550}
            height={550}
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-auto lg:h-auto max-w-full"
            src="/images/kombucha/mascot.png"
            alt="Kopi Parang Kombucha Mascot"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnLoad>

      {/* Logo Section */}
      <AnimateOnLoad animation="animate-zoom-in" delay="delay-700">
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-6 sm:gap-8">
          <Image
            width={208}
            height={208}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full object-cover"
            src="/images/logo-white.png"
            alt="Kopi Parang Logo"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
          <Image
            width={208}
            height={208}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full object-cover"
            src="/images/logo-buttersome.jpg"
            alt="Buttersome Logo"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJCtODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnLoad>

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-3xl sm:text-5xl lg:text-8xl font-bold text-left`}>ORIGINAL</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-lg sm:text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-3xl sm:text-5xl lg:text-8xl font-bold text-left`}>KOMBUCHA</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-lg sm:text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-3xl sm:text-5xl lg:text-8xl font-bold text-left`}>KOMBUCHA</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-lg sm:text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-3xl sm:text-5xl lg:text-8xl font-bold text-left`}>PITAHAYA</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-lg sm:text-xl font-bold text-left mt-2`}>Home Made Kombucha Tea</div>
        </AnimateOnScroll>
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${headingFont.className} text-white text-3xl sm:text-5xl lg:text-8xl font-bold text-left`}>SEASONAL</div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
          <div className={`${bodyFont.className} text-white text-lg sm:text-xl font-bold text-left mt-2`}>Ask Our Barista</div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8">
          <Image
            width={1200}
            height={1200}
            className="w-full h-auto"
            src="/images/kombucha/2.png"
            alt="Kombucha Variety Collection"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-4 px-4 sm:px-6 lg:px-8">
          <Image
            width={1200}
            height={1200}
            className="w-full h-auto"
            src="/images/kombucha/3.png"
            alt="Premium Kombucha Flavors"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-4 mb-8 px-4 sm:px-6 lg:px-8">
          <Image
            width={1200}
            height={1200}
            className="w-full h-auto"
            src="/images/kombucha/4.png"
            alt="Artisanal Kombucha Brewing Process"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Kombucha;
