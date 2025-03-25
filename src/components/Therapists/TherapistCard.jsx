import {useNavigate} from "react-router-dom";
import {Card, CardBody, CardHeader, Image} from "@heroui/react";

export default function TherapistCard({therapist}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/therapists/${encodeURIComponent(therapist.name)}`)
      }
      className='cursor-pointer'
    >
      <Card className='pb-4 mb-3 h-auto w-80 relative flex flex-col shadow-lg rounded-xl'>
        <CardHeader className='p-0 w-80 relative'>
          <Image
            alt={therapist.name}
            src={therapist.image}
            className='object-cover w-80 h-auto rounded-t-lg rounded-b-none'
          />
        </CardHeader>
        <CardBody className='pb-4 pt-4 flex-1 flex flex-col'>
          <div className='flex flex-col gap-2 w-full items-center'>
            <h4 className='font-DM text-xl font-medium text-secondary-typo'>
              {therapist.name}
            </h4>
            <p className='font-Inter text-base text-secondary-typo-grey'>
              {therapist.shortDescription}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
