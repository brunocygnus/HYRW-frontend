import {useEffect, useState} from "react";
import { therapistsData } from "./therapistsData";
import {Pagination, Skeleton} from "@heroui/react";
import TherapistCard from "./TherapistCard";

export default function TherapistsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSkeleton, setIsSkeleton] = useState(true);

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const therapistToShow = therapistsData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(therapistsData.length / itemsPerPage);

  const fetchData = async () => {
    therapistsData ? setIsSkeleton(false) : setIsSkeleton(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col pb-16 -mt-48 items-center justify-center">
      {isSkeleton && (
        <div className='grid grid-cols-3 gap-5 px-16'>
          <Skeleton className='h-96 w-80 rounded-md' />
          <Skeleton className='h-96 w-80 rounded-md' />
          <Skeleton className='h-96 w-80 rounded-md' />
          <Skeleton className='h-96 w-80 rounded-md' />
          <Skeleton className='h-96 w-80 rounded-md' />
          <Skeleton className='h-96 w-80 rounded-md' />
        </div>
      )}

      {therapistsData.length > 0 && (
        <>
          <div className='grid grid-cols-3 gap-5 px-16'>
            {therapistToShow.map((therapist) => (
              <TherapistCard therapist={therapist} key={therapist.id} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className='flex w-full justify-center mt-2'>
              <Pagination
                total={totalPages}
                initialPage={1}
                page={currentPage}
                onChange={(page) => setCurrentPage(page)}
                color='primary'
                size='sm'
                loop
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
