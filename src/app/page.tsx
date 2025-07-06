import Card from "@/components/Card";
import AnimatedHeader from "@/components/AnimatedHeader";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <AnimatedHeader title="What We Serve" subtitle="We serve more than just drinks. It's about taste, comfort, and an experience to remember." />

      <div className="max-w-4xl w-full grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-6 justify-center items-center mx-auto mt-10">
        <Card title="Coffee" imageSrc="/images/coffee.png" />
        <Card title="Non-Coffee & Mocktail" imageSrc="/images/mocktail.png" />
        <Card title="Buttersome" imageSrc="/images/croissant.png" />
        <Card title="Kombucha Series" imageSrc="/images/croissant.png" />
        {/* <Card title="Merchandise (Coming Soon)" imageSrc="/images/merchandise.png" /> */}
      </div>
    </div>
  );
}
