import {
  FaCalendarCheck,
  FaShieldAlt,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";
import theraphist_img from "../../assets/theraphist_img.png";

const features = [
  {
    icon: <FaCalendarCheck className='text-white text-3xl' />,
    text: "Support in Scheduling",
  },
  {
    icon: <FaShieldAlt className='text-white text-3xl' />,
    text: "Billing and Insurance",
  },
  {
    icon: <FaBullhorn className='text-white text-3xl' />,
    text: "Marketing",
  },
  {
    icon: <FaUsers className='text-white text-3xl' />,
    text: "Community of Therapists",
  },
];

export default function JoinAsATherapists() {
  return (
    <section className='w-full px-24 bg-[#f6f6f6] rounded-3xl mt-16 py-16 text-center'>
      <h2 className='text-3xl md:text-6xl text-left  font-DM text-primary-purple mb-12'>
        Join our team of dedicated therapists
        <br />
        <span className='font-normal'>at a private practice</span>
      </h2>

      <div className='flex flex-col md:flex-row items-center justify-center gap-12 mx-auto'>
        <div className='w-full md:w-1/2'>
          <img
            src={theraphist_img}
            alt='Therapist'
            className='rounded-[30px] shadow-md w-full max-w-md mx-auto'
          />
        </div>

        <div className='w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center gap-3'>
              <div className="flex w-14 h-14 bg-primary-green items-center justify-center rounded-full">{feature.icon}</div>
              <p className='text-secondary-typo font-Inter text-xl'>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-12'>
        <button className='px-6 py-3 border border-secondary-typo-grey rounded-full text-secondary-typo font-Inter hover:bg-primary-green hover:text-white transition'>
          Join our team
        </button>
      </div>
    </section>
  );
}
