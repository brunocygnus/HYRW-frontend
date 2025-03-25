export default function JoinUs() {
  return (
    <div className='w-full px-12 mt-7'>
      <div className='w-full flex flex-col md:flex-row items-center justify-center bg-white p-8 rounded-3xl'>
        <div className='w-full md:w-7/12'>
          <h2 className='text-4xl md:text-6xl text-secondary-typo font-DM'>
            Join us as we work toward making mental health care accessible for
            all
          </h2>
          <p className='text-lg text-secondary-typo-grey mt-4'>
            Start your mental health transformation with our experienced
            therapists today. Get to be in your ultimate inner peace and lasting
            well-being with our programs, tailored special to your health needs.
          </p>
          <button className='mt-6 bg-primary-purple text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-purple-700 transition'>
            View open roles
          </button>
        </div>
        <div className='w-full md:w-4/12 flex flex-col md:flex-row items-center mt-6 md:mt-0 gap-4'>
          <div className='flex items-center justify-center bg-secondary-pink h-28 w-96 px-6 py-4 rounded-xl text-lg font-medium'>
            <p className='font-DM text-left font-semibold text-2xl'>
              #LetsStayHealthy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
