import hero_background from "../../assets/hero_background.png";
import FreeConsultForm from "./FreeConsultForm";

export default function Hero() {
  return (
    <div
      className='relative h-96 flex flex-col justify-end md:items-start md:mb-7 md:h-auto md:mt-20 bg-cover bg-bottom lg:bg-center'
      style={{
        backgroundImage: `url(${hero_background})`,
      }}
    >
      <div className='h-[calc(100vh-80px)] w-full flex'>
        <div className='w-1/2 h-[calc(100vh-80px)] flex flex-col items-start justify-end'>
          <div className='w-9/12 ml-7 bg-primary-purple h-16 rounded-2xl flex items-center justify-center'>
            <p className='text-white font-inter text-xl'>
              THERAPY FOR ADULTS IN FLORIDA AND PENNSYLVANIA{" "}
            </p>
          </div>

          <div className='w-full mt-16 items-center md:items-start md:justify-end flex flex-col md:mt-12'>
            <div className='bg-white px-7 py-3 rounded-tr-3xl'>
              <h1 className='text-3xl text-center font-DM mt-2 text-primary-purple md:text-7xl '>
                Online therapy
              </h1>
            </div>
            <div className='w-10/12 bg-white px-10 pb-2 rounded-tr-3xl'>
              <h2 className='text-3xl text-center font-DM mt-2 text-primary-purple md:text-[75px] md:text-left'>
                in your terms
              </h2>
            </div>
          </div>
        </div>
        <div className='w-1/2 h-auto lg:py-20 flex items-center justify-center'>
          <FreeConsultForm />
        </div>
      </div>
    </div>
  );
}
