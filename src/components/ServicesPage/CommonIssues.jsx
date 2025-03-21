import CommonIssuesCarousel from "./CommonIssuesCarousel";

export default function CommonIssues() {
  return (
    <div className='w-full flex flex-col items-center pb-10 justify-center'>
      <h2 className='w-9/12 text-center text-6xl text-secondary-typo font-DM mb-2'>
        Common Mental Health
      </h2>
      <h2 className='w-9/12 text-center text-5xl text-secondary-typo font-DM mb-7'>
        Issues We Address
      </h2>
      <CommonIssuesCarousel />
      <button className="w-48 h-8 border border-secondary-typo text-secondary-typo font-DM rounded-2xl hover:bg-primary-green">
        Learn More
      </button>
    </div>
  );
}
