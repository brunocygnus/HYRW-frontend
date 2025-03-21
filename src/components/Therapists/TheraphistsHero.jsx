import services_bg_img from "../../assets/services_bg_img.png";
import {Input} from "@heroui/react";

export default function TherapistsHero() {
  return (
    <div
      className='relative h-96 flex mt-24 flex-col justify-center md:items-center md:justify-start md:pt-24 md:h-[550px] md:pb-20 md:mt-20 bg-cover bg-bottom lg:bg-center'
      style={{
        backgroundImage: `url(${services_bg_img})`,
      }}
    >
      <h2 className='w-9/12 text-center text-7xl text-secondary-purple font-DM mb-2'>
        Meet our Therapists
      </h2>
      <div className='w-full flex items-center justify-center gap-7 mt-24'>
        <input
          placeholder='State'
          className='w-52 h-10 rounded-xl bg-primary-green text-secondary-typo placeholder:text-secondary-typo px-5 py-2'
          type='text'
        />
        <input
          placeholder='Speciality'
          className='w-52 h-10 rounded-xl bg-primary-green text-secondary-typo placeholder:text-secondary-typo px-5 py-2'
          type='text'
        />
        <input
          placeholder='Availability'
          className='w-52 h-10 rounded-xl bg-primary-green text-secondary-typo placeholder:text-secondary-typo px-5 py-2'
          type='text'
        />
      </div>
    </div>
  );
}
