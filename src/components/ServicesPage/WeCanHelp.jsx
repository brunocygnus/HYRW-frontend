import {FaLock} from "react-icons/fa";

export default function WeCanHelp({issues}) {
  return (
    <div className='w-full flex flex-col mt-14 items-center pb-10 justify-center'>
      <h2 className='w-9/12 text-left text-6xl text-secondary-typo font-DM mb-2'>
        We can help you
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-10 w-9/12'>
        {issues.map((issue) => (
          <div
            key={issue.id}
            className={`flex flex-col items-start p-6 rounded-lg shadow-md transition w-full aspect-square
            ${
              issue.locked
                ? "bg-secondary-purple text-white"
                : "bg-white text-black shadow-md"
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full mb-4
                ${
                  issue.locked ? "bg-white text-black" : "bg-black text-white"
                }`}
            >
              {issue.locked ? <FaLock /> : issue.icon && <issue.icon />}
            </div>
            <p className='text-lg font-semibold'>{issue.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
