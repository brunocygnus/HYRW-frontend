import {
  FaCalendarAlt,
  FaBullhorn,
  FaHeart,
  FaUsers,
  FaFileInvoice,
  FaClipboardList,
} from "react-icons/fa";

export default function GrowPractices() {
    const features = [
      {
        icon: <FaCalendarAlt size={30} className='text-white' />,
        title: "Appointment Scheduling",
        description:
          "Keep track of appointments by viewing your weekly schedule alongside personal commitments.",
      },
      {
        icon: <FaBullhorn size={30} className='text-white' />,
        title: "Free Marketing",
        description: "Get referrals from online directories at no cost to you.",
      },
      {
        icon: <FaHeart size={30} className='text-white' />,
        title: "Dedicated Support",
        description:
          "Stay focused on your clients while we handle the rest. Our team is here to support you every step of the way.",
      },
      {
        icon: <FaUsers size={30} className='text-white' />,
        title: "Community of Peers",
        description:
          "Connect with HYRW therapists through our dedicated online community.",
      },
      {
        icon: <FaFileInvoice size={30} className='text-white' />,
        title: "Invoicing and Billing",
        description:
          "Our team will take care of all the billing and invoicing.",
      },
      {
        icon: <FaClipboardList size={30} className='text-white' />,
        title: "EHR",
        description:
          "Access client contact details, document session notes, and update treatment plans seamlessly.",
      },
    ];

  return (
    <div className='w-full flex flex-col px-10 items-center justify-center mt-20'>
      <h3 className="font-DM text-6xl mb-5">We make it easy to start and grow a successful practice</h3>
      <div className='w-full md:w-11/12 px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-secondary-pink mb-4'>
              {feature.icon}
            </div>
            <h3 className='text-lg font-semibold font-exo text-secondary-typo'>
              {feature.title}
            </h3>
            <p className='text-sm text-secondary-typo-grey mt-2'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
