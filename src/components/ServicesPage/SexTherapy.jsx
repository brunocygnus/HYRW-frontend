import {FaHeartbeat} from "react-icons/fa";
import sex_therapy_img from "../../assets/sex_therapy_img.png";

export default function SexTherapy() {
  return (
    <div className='w-full flex flex-col mt-14 items-center pb-10 justify-center'>
      <h2 className='w-9/12 text-center text-6xl text-secondary-typo font-DM mb-2'>
        Sex Therapy
      </h2>
      <div className='w-full flex flex-col md:flex-row gap-6 mt-12 px-6 md:px-12'>
        <div className='relative w-full md:w-1/2'>
          <img
            src={sex_therapy_img}
            alt='Individual Therapy'
            className='w-full rounded-lg'
          />
          <div className='absolute inset-0 flex justify-center items-end p-6 rounded-lg'>
            <div className='w-10/12 text-white pb-2'>
              <h3 className='text-xl md:text-4xl mb-2'>
                Reclaim Your Pleasure, Your Way
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
              Sex and intimacy are deeply personal, but outdated taboos can make
              these conversations feel difficult. That’s why our sex therapy
              sessions provide a safe and professional space—without nudity,
              physical exams, or any form of touch. Our holistic approach helps
              you develop a healthier relationship with your body, communicate
              openly about your needs, and release any shame or discomfort
              around pleasure. Before diving into deeper discussions, we focus
              on building trust and stable communication to ensure you feel
              fully supported.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
