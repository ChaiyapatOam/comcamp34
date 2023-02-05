import { useState } from "react";
const FileUploaderComponent = ({
   name,
   label,
   fileType, /// "image or pdf"
   path,
   downloadURL,
   required,
}: {
   name: string;
   label?: string;
   fileType?: string;
   path: string;
   downloadURL?: string;
   required?: boolean;
}) => {
   const [file, setFile] = useState<null | undefined>();
   const [isUpload, setIsUpload] = useState<boolean>(false);
   const handleFile = (e: any) => {
      if (!(e.target instanceof HTMLInputElement)) return;
      setFile(e.target.files[0].name);
      uploadFile();
   };

   const uploadFile = () => {
      //   if (file == null) {
      //      alert("โปรดแนบไฟล์ " + label);
      //      return;
      //   }
      // else if upload submit, call method to store file in firebase storage maybe by format -> "userId_file" in defined path
      // * waiting for firebase setup
      setIsUpload(true);
   };
   const deleteFile = () => {
      if (!isUpload) return;
      // else if delete submit, call method to delete file in firebase storage maybe by format -> "userId_file" in defined path
      // * waiting for firebase setup
      setFile(null);
      setIsUpload(false);
   };

   return (
      <>
         <div className='grid lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 bg-white rounded-lg shadow-lg px-5 py-4 justify-center items-center'>
            <div className='xl:col-span-2 lg:col-span-2 col-span-1 w-full'>
               <div className='flex flex-row justify-center lg:justify-start'>
                  {label ? (
                     <p className='font-semibold text-sm lg:text-lg'>{label}</p>
                  ) : (
                     <p>{name}</p>
                  )}
                  <p className='text-orange'>{required ? "*" : null}</p>
               </div>
            </div>
            <div className='xl:col-span-3 lg:col-span-1 col-span-1 w-full h-full flex flex-col lg:flex-row justify-center lg:justify-center relative mt-4 lg:mt-0 items-center'>
               {downloadURL ? (
                  <a href={downloadURL} target="_blank" 
                  
                     className={
                        isUpload ? "w-1/2 mb-4 lg:mb-0 lg:w-1/3 bg-blue1 rounded-lg text-white font-teko tracking-wider py-0.5 lg:-mt-6":
                        "w-1/2 mb-4 lg:mb-0 lg:w-1/3 bg-blue1 rounded-lg text-white font-teko tracking-wider py-0.5"
                     }
                     
                  >
                     <div className='flex flex-row justify-center items-center'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           viewBox='0 0 24 24'
                           fill='currentColor'
                           className='w-4 h-4 bg-[#D9D9D9] rounded-full text-black mr-2'
                        >
                           <path
                              fillRule='evenodd'
                              d='M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z'
                              clipRule='evenodd'
                           />
                        </svg>
                        <p>Download</p>
                     </div>
                  </a>
               ) : null}
               {!isUpload ? (
                  <>
                     <input
                        type='file'
                        name={name}
                        onChange={handleFile}
                        className={ "form-control appearance-none bg-blue-100 h-full w-1/2 lg:w-1/3 xl:w-2/5 z-10 opacity-0 py-0 lg:py-2  xl:ml-0 2xl:ml-0" }
                        accept={
                           fileType == "pdf"
                              ? "application/pdf" //accept pdf document file
                              : fileType == "image"
                              ? "image/jpeg,image/png" //accpet image file only jpg and png
                              : "image/jpeg,image/png,application/pdf" /* accept both image and pdf if not pass props or wrong spell file format */
                        }
                     />
                     <button
                        className={
                           downloadURL
                              ? "absolute w-1/2 lg:w-1/3 bg-blue1 mt-8 lg:mt-0 lg:right-10 xl:right-12 2xl:right-16 rounded-lg text-white font-teko tracking-wider py-0.5"
                              : "absolute w-1/2 lg:w-1/3 bg-blue1 rounded-lg text-white font-teko tracking-wider py-0.5"
                        }
                     >
                        <div className='flex flex-row justify-center items-center'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-4 h-4 bg-[#D9D9D9] rounded-full text-black mr-2'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
                              />
                           </svg>
                           <p>Upload File</p>
                        </div>
                     </button>
                  </>
               ) : (
                  <div className="w-1/2 xl:w-1/3 lg:mr-3 lg:ml-3">
                  <button className='lg:h-full w-full bg-blue1 rounded-lg text-white font-teko tracking-wider py-0.5'>
                     <div className='flex flex-row justify-center items-center'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke-width='1.5'
                           stroke='currentColor'
                           className='w-4 h-4 mr-2'
                        >
                           <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                           />
                        </svg>

                        <p>Preview File</p>
                     </div>
                  </button>
                  {
               !isUpload ? null : (
                 <div className="grid grid-cols-5 mr-3" >
                     <div className="col-span-4 overflow-hidden"> 
                        <p className="truncate"> {file} </p>
                     </div>
                      <div className="col-span-1 flex justify-end">
                        <button className='' onClick={() => deleteFile()}>
                           <img src="assets/regisPage/trash.svg" className="w-5 h-5" />
                        </button>
                      </div>
                 </div>
               )}
               </div>
               )}
            </div>
         </div>
      </>
   );
};
export default FileUploaderComponent;
