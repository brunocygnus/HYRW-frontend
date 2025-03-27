const steps = [
  {
    title: "Interview",
    description: "Submit your application for a remote therapy position.",
  },
  {
    title: "Sign Contract",
    description:
      "If accepted, you will complete the signing process through DocuSign.",
  },
  {
    title: "Onboarding",
    description:
      "Familiarize yourself with our procedures and policies, complete insurance credentialing, and record an introduction video for PsychologyToday and our website.",
  },
  {
    title: "Start Receiving Clients",
    description:
      "Begin working with clients and become a valued member of the Heal Your Roots Wellness community of mental health professionals.",
  },
];

export default function TherapyProviderSteps() {
  return (
    <div className='w-full py-12 px-6 md:px-12 bg-[#F5F5F5]'>
      <div className='flex flex-col items-center text-center mb-16 gap-12'>
        <div className='bg-primary-green text-secondary-purple text-xl font-DM px-7 py-3 rounded-full mb-4'>
          Join our team of dedicated therapists at a private practice
        </div>
        <h2 className='text-3xl md:text-6xl font-semibold text-secondary-typo font-DM'>
          Become a Heal Your Roots Wellness Therapy Provider
        </h2>
      </div>

      <div className='md:w-full flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-7/12'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='flex flex-col justify-between bg-secondary-pink p-10 rounded-lg h-96 shadow-md'
            >
              <p className='text-secondary-typo text-2xl mb-3 font-DM'>
                {step.description}
              </p>
              <p className='text-secondary-purple font-semibold text-3xl'>
                {index + 1}. {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <button className='w-48 h-12 border border-secondary-typo text-secondary-typo font-DM rounded-3xl hover:bg-primary-green'>
          Apply Now
        </button>
      </div>
    </div>
  );
}
