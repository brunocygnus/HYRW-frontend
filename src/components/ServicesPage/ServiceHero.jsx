import services_bg_img from "../../assets/services_bg_img.png";

export default function ServiceHero() {
  return (
    <div
      className='relative h-96 flex mt-24 flex-col justify-center md:items-center md:h-full md:pt-40 md:pb-20 md:mt-7 bg-cover bg-bottom lg:bg-center'
      style={{
        backgroundImage: `url(${services_bg_img})`,
      }}
    >
      <h2 className='w-9/12 text-center text-7xl text-secondary-purple font-DM mb-2'>
        Personalized Therapy Services for Your Unique Needs
      </h2>

      <button className='mt-28 w-40 h-10 text-primary-purple bg-primary-green hover:bg-primary-purple hover:text-white font-inter font-lg font-semibold rounded-xl'>
        Start Today
      </button>
    </div>
  );
}
