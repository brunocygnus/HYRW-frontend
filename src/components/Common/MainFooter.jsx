import {IoArrowForward, IoCallOutline} from "react-icons/io5";
import {FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import Logo from "../../assets/HYRW_Logo.png";

export default function MainFooter() {
  return (
    <footer className='bg-[#c8c8c822] w-full py-10 px-6 md:px-20 text-gray-700 text-sm'>
      <div className='max-w-7xl mx-auto flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
          <div className='flex w-1/3 flex-col items-start gap-4'>
            <img src={Logo} alt='Heal Your Roots Wellness' className='h-16' />
            <div className='flex mt-5 items-center'>
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

          <div className='flex justify-center w-1/3 gap-6 text-3xl text-primary-purple'>
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
            <IoCallOutline />
          </div>

          <div className='w-1/3'>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-2 text-primary-purple text-sm'>
              <a href='#'>Book Now</a>
              <a href='#'>FAQ</a>
              <a href='#'>Services</a>
              <a href='#'>Insurance and Fees</a>
              <a href='#'>Career</a>
              <a href='#'>Privacy policy</a>
              <a href='#'>Therapists</a>
              <a href='#'>Collaborate</a>
              <a href='#'></a>
              <a href='#'>Sitemap</a>
            </div>
            <button className='px-4 py-2 rounded-full bg-secondary-pink text-primary-purple hover:bg-primary-green transition'>
              Back to Top
            </button>
          </div>
        </div>

        <div className='w-full text-center text-gray-600'>
          <p className=''>
            Pennsylvania:{" "}
            <span className='underline'>
              2617 Street Rd, #282, Bensalem, PA
            </span>
          </p>
          <p>
            Florida:{" "}
            <span className='underline'>
              150 East Palmetto Park Rd., Suite 800, Boca Raton, FL 33432
            </span>
          </p>
          <p className="mt-2">Copyright © HealYourRootsWellness 2025</p>
        </div>
      </div>
    </footer>
  );
}
