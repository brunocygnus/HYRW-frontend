import {useParams, useNavigate} from "react-router-dom";
import {therapistsData} from "../components/Therapists/therapistsData";
import {Button, Chip} from "@heroui/react";
import {FaHome, FaRegHeart} from "react-icons/fa";
import {IoHappyOutline} from "react-icons/io5";
import {HiMiniCurrencyDollar} from "react-icons/hi2";

export default function TherapistPage() {
  const navigate = useNavigate();
  const {name} = useParams();
  const therapist = therapistsData.find(
    (t) => t.name === decodeURIComponent(name)
  );

  if (!therapist) {
    return <div className='p-6'>Therapist not found</div>;
  }

  return (
    <div className='w-1/2 mt-24'>
      <div className='relative w-full'>
        <img
          src={therapist.image}
          alt={therapist.name}
          className='w-full object-cover rounded-t-lg'
        />
        <div className='absolute bottom-3 left-3 bg-secondary-pink text-secondary-typo px-3 py-1 rounded-xl font-DM text-xl z-10'>
          {therapist.position}
        </div>
      </div>
      <div className='p-6 pt-4'>
        <div className='text-left'>
          <h2 className='text-3xl font-semibold text-secondary-typo font-DM'>
            {therapist.name}{" "}
            <span className='text-secondary-typo-grey text-base'>
              ({therapist.pronouns})
            </span>
          </h2>

          <div className='mt-4 grid grid-cols-2 gap-y-3 text-gray-700'>
            <div className='flex items-center gap-2'>
              <FaHome className='text-secondary-pink text-4xl' />
              <span className='text-2xl font-DM text-secondary-typo'>
                {therapist.location}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <HiMiniCurrencyDollar className='text-secondary-pink text-4xl' />
              <span className='text-2xl font-DM text-secondary-typo'>
                {therapist.payment}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <FaRegHeart className='text-secondary-pink text-4xl' />
              <span className='text-2xl font-DM text-secondary-typo'>
                {therapist.traits[0]}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <IoHappyOutline className='text-secondary-pink text-4xl' />
              <span className='text-2xl font-DM text-secondary-typo'>
                {therapist.traits[1]}
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-5 border-t pt-5 border-secondary-typo-grey'>
          <p className='text-2xl font-DM text-secondary-typo'>About me</p>
          <p className='mt-4 text-secondary-typo text-base font-DM leading-relaxed'>
            {therapist.about.map((paragraph, index) => (
              <span key={index} className='block mb-2'>
                {paragraph}
              </span>
            ))}
          </p>
        </div>

        <div className='mt-6 border-t border-secondary-typo-grey pt-4 flex flex-col'>
          <h4 className='text-2xl font-DM text-secondary-typo'>Specialties</h4>
          <div className='flex flex-wrap gap-2 mt-4'>
            {therapist.specialties.map((specialty, index) => (
              <Chip
                key={index}
                className='bg-secondary-pink text-secondary-typo px-3 py-1 rounded-full text-md font-DM'
              >
                {specialty}
              </Chip>
            ))}
          </div>
        </div>

        <div className='mt-6 border-t border-secondary-typo-grey pt-4 flex flex-col'>
          <h4 className='text-2xl font-DM text-secondary-typo'>Fees</h4>
          <div className='flex flex-col mt-4 gap-4'>
            <div className='flex w-72 items-center justify-center gap-2 text-secondary-typo bg-primary-green rounded-xl px-2 py-1 text-md'>
              Individual Session Rate: ${therapist.fees.individual}
            </div>
            {therapist.fees.couples && (
              <div className='flex w-72 items-center justify-center gap-2 text-secondary-typo bg-primary-green rounded-xl px-2 py-1 text-md'>
                Couples Session Rate: ${therapist.fees.couples}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='p-4 flex justify-center'>
        <Button
          className='border rounded-xl hover:bg-secondary-pink'
          onPress={() => navigate("/therapists")}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
