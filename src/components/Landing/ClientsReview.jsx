import {IoArrowForward} from "react-icons/io5";

export default function ClientsReview() {
  const reviews = [
    {
      name: "Michael J.",
      review: "Very thorough, and sensitive, to individuals needs.",
    },
    {
      name: "Lauren J.",
      review:
        "You are in wonderful hands with whichever therapist you choose and if I could give 100 star rating I would!",
    },
    {
      name: "Jhon T.",
      review: "An amazingly impactful practice with top notch professionals!",
    },
  ];

  return (
    <section className='py-10 px-4 md:px-12 flex flex-col items-center '>
      <div className='w-52 h-8 bg-black mb-10 flex items-center justify-center rounded-2xl'>
        <p className="text-white font-inter">#Healing Journeys</p>
      </div>
      <h2 className='text-center text-5xl font-semibold font-DM mb-6'>
        What HYRW Clients Say
      </h2>

      <div className='flex flex-col md:flex-row gap-6 justify-center'>
        {reviews.map((client, index) => (
          <div className='shadow-xl rounded-2xl p-5 h-72'>
            <div
              key={index}
              className='relative h-full bg-[#dddddd] rounded-3xl p-6 max-w-sm flex flex-col justify-between'
            >
              <div className='absolute flex items-center justify-center top-0 right-0  h-16 w-16 rounded-bl-xl bg-white'>
                <button className=' bg-primary-green p-2 rounded-full'>
                  <IoArrowForward size={20} className='text-white opacity-80' />
                </button>
              </div>
              <div className='mt-10 rounded-2xl'>
                <p className='text-xl text-gray-800 leading-relaxed font-DM '>
                  {client.review}
                </p>
              </div>
              <div className='flex items-center justify-center w-1/2 text-xl mt-4 h-12 absolute bottom-0 left-0 bg-white rounded-tr-lg font-medium font-DM text-gray-900'>
                {client.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-8'>
        <button className='text-sm font-Inter text-gray-600 border border-gray-700 w-32 h-8 rounded-full hover:text-primary-purple hover:bg-secondary-pink transition'>
          Learn More
        </button>
      </div>
    </section>
  );
}
