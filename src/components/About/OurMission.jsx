import our_mission_img from "../../assets/our_mission_img.png";

export default function OurMission() {
  const benefits = [
    {
      number: "1",
      title: "Expanding Access to Mental Health Care",
      description:
        "What started as a solo practice by an LMFT has grown into a mission-driven organization dedicated to making quality mental health support accessible. We strive to help as many individuals and couples as possible while also supporting the therapists who provide this essential care.",
    },
    {
      number: "2",
      title: "Financially Rewarding Careers",
      description:
        "Therapists work hard and deserve to be compensated fairly. Our model ensures that mental health professionals can earn a sustainable, competitive income—without burnout—through fair rate splits and a structure designed for long-term success.",
    },
    {
      number: "3",
      title: "Work-Life Balance",
      description:
        "Being a therapist is mentally and emotionally draining. We prioritize the wellbeing, job satisfaction, and growth of our therapists which is why we limit sessions to 30 per week to avoid burn out.",
    },
    {
      number: "4",
      title: "Empowering Therapists",
      description:
        "We handle the administrative tasks so therapists can focus on what truly matters—their clients. By marketing each therapist’s strengths and connecting them with their ideal clients, we create an environment where both therapists and clients thrive.",
    },
  ];

  return (
    <div className='w-full flex flex-col h-auto md:flex-row mt-16 px-6 md:px-24'>
      <div className='w-full hidden md:w-1/3 md:block'>
        <img
          src={our_mission_img}
          alt='Background'
          className='w-full h-[900px] rounded-lg object-top'
        />
      </div>

      <div className='w-full h-[900px] md:w-2/3 flex gap-10 flex-col justify-center pl-6 md:-ml-12'>
        <h3 className='font-DM text-5xl -mt-7 mb-12 ml-20'>Our Mission</h3>
        <div className=''>
          {benefits.map((benefit, index) => (
            <div key={index} className='flex items-start gap-6 mb-8'>
              <div className='w-12 h-12 flex items-center justify-center rounded-full bg-primary-green text-secondary-typo font-bold text-lg'>
                {benefit.number}
              </div>

              <div className='w-10/12'>
                <h3 className='text-xl md:text-2xl font-bold text-secondary-typo font-DM'>
                  {benefit.title}
                </h3>
                <p className='text-base md:text-lg text-secondary-typo-grey mt-2'>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
