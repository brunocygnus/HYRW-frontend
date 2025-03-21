import about_us_img_1 from "../../assets/about_us_img_1.png";
import about_us_img_2 from "../../assets/about_us_img_2.png";

export default function Header() {
  return (
    <div className='w-full mt-32 px-12'>
      <div className='w-full bg-white mb-10 pb-2 rounded-tr-3xl'>
        <h2 className='text-3xl ml-10 font-DM text-primary-purple md:text-[80px] md:text-left'>
          What Drives Us
        </h2>
      </div>
      <div className='w-full flex flex-col'>
        <div className='w-full flex relative'>
          <div className='flex flex-col items-center justify-center gap-5 w-full md:w-1/2 px-2'>
            <h3 className='text-4xl w-11/12 text-center font-DM mt-2 text-primary-purple md:text-5xl md:text-left'>
              Make Mental Health More Accessible
            </h3>
            <p className='text-base text-secondary-typo-grey w-11/12'>
              Discover the heart behind our mental health platform. At our core,
              we are a compassionate community of experts dedicated to guiding
              you on your journey to emotional well-being and resilience.
            </p>
          </div>

          <div className='relative w-full md:w-1/2'>
            <img
              src={about_us_img_1}
              alt='Counseling'
              className='w-full rounded-lg'
            />

            <div className='absolute inset-0 flex justify-center items-end p-6 md:px-10 md:py-4 rounded-lg'>
              <div className='w-8/12 pb-1'>
                <h3 className='text-white text-2xl md:text-4xl font-bold'>
                  Counseling
                </h3>
                <p className='text-white text-sm md:text-base mt-2'>
                  One-on-one sessions with our expert also experienced mental
                  health therapists.
                </p>
              </div>
              <button className='h-8 w-56 mt-2 bg-secondary-blue text-white px-6 rounded-full text-sm md:text-base hover:bg-blue-600 transition'>
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <div className='w-full flex relative'>
          <div className='relative w-full md:w-5/12'>
            <img
              src={about_us_img_2}
              alt='Counseling'
              className='w-full rounded-lg'
            />

            <div className='absolute inset-0 flex justify-center items-end p-6 md:px-10 md:py-4 rounded-lg'>
              <div className='w-8/12 pb-1'>
                <h3 className='text-white text-2xl md:text-4xl font-bold'>
                  Counseling
                </h3>
                <p className='text-white text-sm md:text-base mt-2'>
                  One-on-one sessions with our expert also experienced mental
                  health therapists.
                </p>
              </div>
              <button className='h-8 w-48 mt-2 ml-10 bg-secondary-blue text-white px-6 rounded-full text-sm md:text-base hover:bg-blue-600 transition'>
                Get Started →
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-5 w-full md:w-1/2 px-2'>
            <h3 className='text-4xl w-11/12 text-center font-DM mt-2 text-primary-purple md:text-5xl md:text-left'>
              Profitable & Sustainable for Therapists
            </h3>
            <p className='text-base text-secondary-typo-grey w-11/12'>
              Being a mental health provider is tough. We strive to help make it
              more profitable and sustainable for therapists. We take away the
              worry and provide the support, so therapists can focus on
              providing the best care for their clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
