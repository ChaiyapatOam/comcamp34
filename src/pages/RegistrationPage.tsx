import { Link } from "react-router-dom";
import { useState } from "react";
import LeftArrow from "/assets/svg/LeftArrow.svg";
import RightArrow from "/assets/svg/RightArrow.svg";
import { ConsentForm } from "@/components/registrationForm/ConsentForm";
import { PersonalInfoForm } from "@/components/registrationForm/PersonalInfoForm";
import UploadFilesForm from "@/components/registrationForm/UploadFilesForm";
export const RegistrationPage = () => {
   const [page, setPage] = useState<number>(0);
   const nextPage = () => {
      if (page >= 1 && page < 7) setPage(page + 1);
   };

   const prevPage = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };
   return (
      <>
         <div className='bg-base-white h-full min-h-screen overflow-hidden font-bai-jamjuree relative'>
            <div className='flex justify-between py-4'>
               <div className='flex flex-row ml-8'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth='1.5'
                     stroke='currentColor'
                     className='w-12 h-12'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                     />
                  </svg>
                  <p className='text-base-black font-semibold mt-2.5 ml-4'>
                     administrator@comcamp.io
                  </p>
               </div>
               <Link to='/'>
                  <button className='bg-red2 text-white py-2 px-8 rounded-lg font-semibold mr-12'>
                     Log out
                  </button>
               </Link>
            </div>
            <div className='flex justify-center'>
               <p className='xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-teko tracking-widest text-red2 font-semibold mt-3 mb-3'>
                  {page === 1 || page <= 1 ? "Registration" : "Registration"}
               </p>
            </div>
            <div>
               <div className='w-full h-full relative z-10'>
                  {page === 0 || page <= 0 ? <ConsentForm setPage={setPage} /> : null}
                  {page === 1 ? <PersonalInfoForm /> : null}
               </div>
            </div>
            <div className='flex justify-center pt-4'>
               {page > 0 ? (
                  <div className='flex items-center gap-y-4 bottom-5 z-10'>
                     <button onClick={prevPage}>
                        <img src={LeftArrow} className='w-6 lg:w-9' />
                     </button>
                     <h1 className='text-red2 text-lg lg:text-2xl px-6'>{page} of 7</h1>
                     <button onClick={nextPage}>
                        <img src={RightArrow} className='w-6 lg:w-9' />
                     </button>
                  </div>
               ) : null}
            </div>
            <div className='absolute z-0 bottom-0 w-full'>
               <img src='/assets/regisPage/building.svg' className='w-full' />
            </div>
         </div>
      </>
   );
};
