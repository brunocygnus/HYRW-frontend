import {IoPlaySharp} from "react-icons/io5";
import {FaLock, FaHeart, FaUsers} from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className='flex flex-col md:flex-row items-center gap-8 font-DM px-6 py-10 bg-white'>
      <div className='relative flex items-center justify-center bg-secondary-typo-grey rounded-2xl h-[400px] w-full md:w-1/2'>
        <button className='absolute top-4 right-4 bg-primary-purple hover:bg-primary-green text-white rounded-full p-3 hover:bg-opacity-90 transition'>
          <IoPlaySharp size={24} />
        </button>

        <div className='absolute left-6 bottom-6 flex gap-4'>
          <button className='bg-white px-4 py-2 rounded-full shadow hover:bg-opacity-80 transition hover:bg-primary-purple hover:text-white'>
            Book Now
          </button>
          <button className='border border-white text-white px-4 py-2 rounded-full hover:bg-opacity-10 transition hover:bg-primary-green'>
            Check Availability
          </button>
        </div>

        <div className='bg-secondary-typo-grey rounded-full px-4 py-2 flex items-center gap-2'>
          <span className='text-sm text-white'>Therapy Session</span>
          <div className='h-4 w-4 rounded-full bg-white flex justify-center items-center'>
            <div className='h-2 w-2 bg-primary-purple rounded-full' />
          </div>
        </div>
      </div>

      <div className='w-full md:w-9/12 flex flex-col md:flex-row gap-4'>
        <div className='w-full h-80 bg-primary-purple text-white rounded-xl p-6 flex flex-col justify-between shadow-lg'>
          <div>
            <FaLock size={24} className='mb-4 opacity-70' />
            <h3 className='text-lg font-semibold mb-2'>Individual Therapy</h3>
            <p className='text-sm opacity-90'>
              Identify problematic behaviors, set goals, and pinpoint tools to
              help you develop healthy coping skills.
            </p>
          </div>
          <button className='mt-4 bg-secondary-pink/60 hover:bg-primary-green py-2 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-80 transition'>
            Get Started →
          </button>
        </div>

        <div className='w-full bg-white text-black rounded-xl p-6 flex flex-col justify-between shadow-lg border border-gray-200'>
          <div>
            <FaHeart size={24} className='mb-4 text-gray-600' />
            <h3 className='text-lg font-semibold mb-2'>Couples Therapy</h3>
            <p className='text-sm text-gray-700'>
              Couples therapy is most often sought out to work on a particular
              issue or to simply strengthen the connection between partners.
            </p>
          </div>
          <button className='mt-4 bg-primary-green hover:bg-primary-purple py-2 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-80 transition text-white'>
            Get Started →
          </button>
        </div>

        {/* Card 3 */}
        <div className='w-full bg-white text-black rounded-xl p-6 flex flex-col justify-between shadow-lg border border-gray-200'>
          <div>
            <FaUsers size={24} className='mb-4 text-gray-600' />
            <h3 className='text-lg font-semibold mb-2'>Sex Therapy</h3>
            <p className='text-sm text-gray-700'>
              For individuals or couples looking to explore their sexuality and
              find better ways to connect emotionally and sexually.
            </p>
          </div>
          <button className='mt-4 bg-primary-green hover:bg-primary-purple py-2 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-80 transition text-white'>
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
