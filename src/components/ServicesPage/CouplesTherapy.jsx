import {FaHeartbeat} from "react-icons/fa";
import couples_therapy_img from "../../assets/couples_therapy_img.png";

export default function CouplesTherapy() {
  return (
    <div className='w-full flex flex-col mt-14 items-center pb-10 justify-center'>
      <h2 className='w-9/12 text-center text-6xl text-secondary-typo font-DM mb-2'>
        Couples Therapy
      </h2>
      <div className='w-full flex flex-col md:flex-row gap-6 mt-12 px-6 md:px-12'>
        <div className='relative w-full md:w-1/2'>
          <img
            src={couples_therapy_img}
            alt='Individual Therapy'
            className='w-full rounded-lg'
          />
          <div className='absolute inset-0 flex justify-center items-end p-5 rounded-lg'>
            <div className='w-10/12 text-white pb-2'>
              <h3 className='text-xl md:text-3xl mb-2 pl-2'>
                You deserve to feel fulfilled, confident and in control of your
                life
              </h3>
            </div>
            <button className='w-72 h-10 px-6 bg-primary-purple text-white rounded-full text-sm md:text-base hover:bg-secondary-purple transition'>
              Get Started →
            </button>
          </div>
        </div>

        {/* Texto */}
        <div className='flex flex-col items-start justify-center gap-4 bg-[#F5F5F5] p-6 rounded-lg w-full md:w-1/2'>
          <div className='flex items-center justify-center -mt-6 w-14 h-14 rounded-full bg-white'>
            <FaHeartbeat className='text-primary-purple text-xl' />
          </div>
          <div className='flex gap-10 px-5'>
            <p className='text-lg text-secondary-purple'>
              Every relationship has its challenges, but you don’t have to
              navigate them alone. We start with a couples intake session to
              understand your journey together—your history, concerns, and hopes
              for the future. Then, we meet with each of you individually to
              explore your personal experiences, communication styles, and
              family influences. By understanding both the "we" and the "me," we
              help you build a stronger, healthier partnership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
