import AnimateOnLoad from "@/components/AnimateOnLoad";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";
import Link from "next/link";
import { headingFont, bodyFont } from "@/lib/fonts";
import { ArrowLeft } from "lucide-react";

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

      <h1 className={`${headingFont.className} uppercase text-4xl sm:text-6xl lg:text-8xl font-bold text-center text-white mt-8`}>COFFEE</h1>
      <p className={`${bodyFont.className} text-center text-white text-base sm:text-lg mt-4`}>Experience the rich and bold flavors of our coffee selection.</p>

      <div className="w-full max-w-6xl mt-8 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden relative">
              <Image
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                src="/images/coffee/1.png"
                alt="Premium Arabica Coffee Beans"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
              />
            </div>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-right" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <Image
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                src="/images/coffee/2.png"
                alt="Coffee Brewing Process"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
              />
            </div>
          </AnimateOnLoad>
        </div>
      </div>

      <AnimateOnLoad animation="animate-zoom-in" delay="delay-500">
        <div className="mt-6 sm:mt-8">
          <Image
            width={208}
            height={208}
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52"
            src="/images/logo-white.png"
            alt="Kopi Parang Logo"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnLoad>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-6 sm:mt-8">
          <Image
            width={3000}
            height={3000}
            className="w-full h-auto"
            src="/images/coffee/menu-coffee.png"
            alt="Kopi Parang Coffee Menu"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnScroll>

      <div className="w-full max-w-6xl mt-8 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
            <div className="rounded-lg overflow-hidden relative">
              <Image
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                src="/images/coffee/3.png"
                alt="Coffee Preparation Techniques"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
            <div className="rounded-lg overflow-hidden relative">
              <Image
                width={800}
                height={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                src="/images/coffee/4.png"
                alt="Special Coffee Blend"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-7xl mt-6 sm:mt-8 mb-8 relative">
          <Image
            width={1400}
            height={1400}
            className="w-full h-auto"
            src="/images/coffee/5.jpg"
            alt="Coffee Shop Interior Experience"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLAKcqvvNe2g0R0j8UJKNgA/8AFUGpvEOaGVMAg="
          />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Coffee;
