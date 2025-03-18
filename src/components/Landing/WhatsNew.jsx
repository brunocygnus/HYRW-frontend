import whatsnew_bg from "../../assets/whatsnew_bg.png";
import WhatsNewCard from "./WhatsNewCard";
import {whatsNewData} from "./whatsNewData";

export default function WhatsNew() {
  return (
    <div
      className='relative h-96 flex flex-col justify-end md:items-center md:h-full md:py-16 md:mt-7 bg-cover bg-bottom lg:bg-center'
      style={{
        backgroundImage: `url(${whatsnew_bg})`,
      }}
    >
      <h2 className='w-1/3 text-center text-5xl font-semibold font-DM mb-2'>
        What’s New at
      </h2>
      <h2 className='w-1/2 text-center text-5xl font-semibold font-DM mb-12'>
        Heal Your Roots Wellness
      </h2>
      <div className='w-40 h-10 bg-black mb-10 flex items-center justify-center rounded-2xl'>
        <p className='text-white font-inter'>HYRW Blog</p>
      </div>
      <div className='w-full flex flex-col gap-7 md:flex-row justify-center items-center md:gap-12'>
        {whatsNewData.slice(0, 3).map((content, index) => (
          <WhatsNewCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
}
