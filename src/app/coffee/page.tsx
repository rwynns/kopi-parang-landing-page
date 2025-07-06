import AnimateOnLoad from "@/components/AnimateOnLoad";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";

const Coffee = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-6">
      <AnimateOnLoad animation="animate-fade-in-down" delay="delay-300">
        <div className="font-heading uppercase text-5xl font-bold text-center text-white">Coffee</div>
      </AnimateOnLoad>

      <AnimateOnLoad animation="animate-fade-in-up" delay="delay-300">
        <div className="font-body text-center text-white mt-4">Experience the rich and bold flavors of our coffee selection.</div>
      </AnimateOnLoad>

      <div className="w-full max-w-6xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimateOnLoad animation="animate-fade-in-left" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/coffee.png" alt="Arabica Beans" />
            </div>
          </AnimateOnLoad>

          <AnimateOnLoad animation="animate-fade-in-right" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/coffee/2.png" alt="Arabica Beans" />
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
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/menu-coffee.png" alt="Kopi Parang menu coffee" />
        </div>
      </AnimateOnScroll>

      <div className="w-full max-w-6xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimateOnScroll animation="animate-fade-in-left" delay="delay-300">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/coffee.png" alt="Arabica Beans" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <Image width={0} height={0} sizes="100vw" className="w-full h-auto" src="/images/coffee.png" alt="Arabica Beans" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <AnimateOnScroll animation="animate-fade-in-right" delay="delay-500">
        <div className="w-full max-w-6xl mt-4 bg-amber-100">
          <Image width={3000} height={3000} className="w-full h-auto" src="/images/menu-coffee.png" alt="Kopi Parang menu coffee" />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Coffee;
