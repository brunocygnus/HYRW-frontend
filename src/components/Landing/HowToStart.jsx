import discount_img from "../../assets/discount_img.png";
import faq_bg_img from "../../assets/faq_bg_img.png";

export default function HowToStart() {
  return (
    <div className='w-full h-auto px-12 mt-7'>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 bg-white p-8 rounded-3xl'>
        <div className='w-full md:w-6/12'>
          <h2 className='text-4xl md:text-6xl text-secondary-typo font-DM'>
            How to Start Therapy
          </h2>
          <p className='text-lg text-secondary-typo-grey mt-4'>
            Get expert insights, mental health tips, and exclusive updates
            straight to your inbox. Whether you're a therapist, practice owner,
            or someone passionate about wellness, we've got something for you.
            Join our community today!
          </p>
          <button className='mt-12 bg-[#6750A4] text-white w-48 h-10 font-inter rounded-full text-base md:text-base hover:bg-primary-purple transition'>
            Schedule now
          </button>
        </div>
        <div className='w-full md:w-4/12 flex flex-col gap-5'>
          <div className='relative w-full flex items-center mb-12 justify-left text-white py-4 px-4 '>
            <img
              src={faq_bg_img}
              alt='faq'
              className='absolute inset-0 w-full h-40 object-cover rounded-lg'
            />
            <div className='relative flex w-full'>
              <div className='flex w-full flex-col'>
                <p className='font-DM text-left mt-3 font-semibold text-2xl'>
                  FAQS
                </p>
                <p className='font-DM text-left mt-3 font-semibold text-xl'>
                  All you need to know
                </p>
              </div>
              <div className="flex items-end">
                <button className='w-40 h-8 bg-primary-green text-white font-DM rounded-2xl'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-4/12 flex flex-col md:flex-row items-center mt-6 md:mt-0 gap-4'>
            <div className='flex items-center justify-center bg-secondary-pink h-28 w-96 px-6 py-4 rounded-xl text-lg font-medium'>
              <p className='font-DM text-left font-semibold text-2xl'>
                #LetsStayHealthy
              </p>
            </div>
            <div className='relative w-full flex items-center justify-left text-white py-4 px-4 '>
              <img
                src={discount_img}
                alt='50% Discount'
                className='absolute inset-0 w-auto h-28 object-cover rounded-lg'
              />
              <span className='relative w-1/2'>
                <p className='font-DM text-left mt-3 font-semibold text-2xl'>
                  50% Discount
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
