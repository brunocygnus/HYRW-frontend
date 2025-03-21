import {FaLock} from "react-icons/fa";
import individual_therapy_img from "../../assets/individual_therapy_img.png";

export default function IndividualTherapy() {
  return (
    <div className='w-full flex flex-col mt-14 items-center pb-10 justify-center'>
      <h2 className='w-9/12 text-center text-6xl text-secondary-typo font-DM mb-2'>
        Individual Therapy for Adults
      </h2>
      <div className='w-full flex flex-col md:flex-row gap-6 mt-12 px-6 md:px-12'>
        {/* Left Side */}
        <div className='flex flex-col items-start justify-center gap-4 bg-[#F5F5F5] p-6 rounded-lg w-full md:w-1/2'>
          <div className='flex  gap-10 px-5'>
            <div className='flex items-center justify-center -mt-6 w-72 h-14 rounded-full bg-white'>
              <FaLock className='text-primary-purple text-xl' />
            </div>
            <p className='text-lg text-secondary-purple'>
              Do you feel unfulfilled in your relationships or career?
              Struggling with people-pleasing, codependency, or finding your
              voice? Maybe you feel lost and unsure of your next steps. At Heal
              Your Roots Wellness, we help you gain clarity, confidence, and a
              deeper understanding of yourself—so you can create the life you
              truly want.
            </p>
          </div>
          <div className='flex w-full mt-16 items-center justify-center'>
            <button className='h-10 px-6 bg-secondary-purple text-white rounded-full text-sm md:text-base hover:bg-purple-700 transition'>
              Get Started →
            </button>
          </div>
        </div>

        <div className='relative w-full md:w-1/2'>
          <img
            src={individual_therapy_img}
            alt='Individual Therapy'
            className='w-full rounded-lg'
          />
          <div className='absolute inset-0 flex justify-center items-end p-6 rounded-lg'>
            <div className='w-10/12 text-white pb-2'>
              <h3 className='text-xl md:text-3xl mb-2'>
                You deserve to feel fulfilled, confident and in control of your
                life
              </h3>
            </div>
            <button className='w-72 h-10 px-6 bg-primary-purple text-white rounded-full text-sm md:text-base hover:bg-secondary-purple transition'>
              Get Started →
            </button>
          </div>
        </div>
      </div>
      <div className='w-48 h-10 bg-black mt-16 mb-10 flex items-center justify-center rounded-2xl'>
        <p className='text-white font-inter text-lg'># Issues</p>
      </div>
    </div>
  );
}
