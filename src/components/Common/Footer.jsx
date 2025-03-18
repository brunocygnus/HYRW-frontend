import {IoArrowForward} from "react-icons/io5";
import Logo from "../assets/HYRW_Logo.png";

export default function Footer() {
  return (
    <footer className='bg-gray-50 w-full py-10 px-6 md:px-20 text-gray-700'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
       
        <div className=''>
          <img
            src={Logo}
            alt='Heal Your Roots Wellness'
            className='h-12 mb-4'
          />
          <p className='text-sm text-gray-600'>
            We are mental health experienced therapists that are passionate
            about our goal on empowering you mentally with our wellness journey.
          </p>
          <div className='flex mt-12 items-center'>
            <input
              type='email'
              placeholder='Enter email address for newsletter ...'
              className='w-96 px-4 py-2 border border-primary-purple rounded-full outline-none text-sm'
            />
            <button className='-ml-10 p-2 text-purple-600'>
              <IoArrowForward size={20} />
            </button>
          </div>
        </div>

        <div className='flex w-full flex-col justify-center'>
          <div className='grid grid-cols-3 gap-4 text-sm text-primary-purple pl-24'>
            <div className='flex flex-col gap-2'>
              <a href='#'>About Us</a>
              <a href='#'>Our Stories</a>
              <a href='#'>Career</a>
              <a href='#'>Testimonials</a>
            </div>
            <div className='flex flex-col gap-2'>
              <a href='#'>FAQ</a>
              <a href='#'>Price List</a>
              <a href='#'>User Policy</a>
              <a href='#'>Support</a>
            </div>
            <div className='flex flex-col gap-2'>
              <a href='#'>Phone</a>
              <a href='#'>Email</a>
              <a href='#'>Location</a>
              <a href='#'>Social Media</a>
            </div>
          </div>
          <div className='w-full mx-auto mt-6 flex justify-around items-center text-sm text-gray-500'>
            <p>Copyright © HealYourRootsWellness 2025</p>
            <button className='px-4 py-2 bg-gray-200 rounded-full text-primary-purple bg-secondary-pink hover:bg-primary-green transition'>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
