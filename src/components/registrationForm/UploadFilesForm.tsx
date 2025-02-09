import { useState, useEffect } from "react";
import FileUploaderComponent from "@/components/FileUploaderComponent";
// import { getData, updateData } from "@/lib/Fetch";
import { UploadFile } from "@/types/RegistrationType";

const UploadFilesForm = ({ data, setData }: { data: UploadFile; setData: any }) => {
   const [status, setStatus] = useState<boolean>(false)

   useEffect(() => {
      if(status === true) {
         setStatus(false)
      }
   }, [status])

   return (
      <div className='flex justify-center mt-8'>
         <div className='bg-[#FAD9AA] bg-opacity-70 w-11/12 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 pb-12'>
            <div className='flex'>
               <img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-2 w-8' />
               <p className='text-red2 lg:text-5xl text-2xl font-semibold lg:mt-8 mt-2 ml-2'>
                  เอกสารที่ต้องอัพโหลด
               </p>
            </div>
            <div className='relative flex flex-col justify-center items-center h-full'>
               <div className='font-bai-jamjuree flex flex-col mt-4'>
                  <div className='flex xl:flex-row flex-col'>
                     <div className='mr-0 xl:mr-4 w-full'>
                        <FileUploaderComponent
                           label='ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน (JPG/JPEG/PNG)'
                           filePath='image_URL'
                           fileType='image'
                           obj={data}
                           fileName={data.image_Name}
                           setObj={setData}
                           value={data.image_URL}
                           setStatus={setStatus}
                           required
                        />
                     </div>
                     <div className='ml-0 mt-4 xl:mt-0 xl:ml-4 w-full h-full'>
                        <FileUploaderComponent
                           label='หนังสือขออนุญาตผู้ปกครอง (PDF)'
                           filePath='agreement_URL'
                           fileType='pdf'
                           downloadURL='https://drive.google.com/file/d/1SxCD5C3g3Vl715wNPhG89wBxjpwVk9-h/view'
                           obj={data}
                           fileName={data.agreement_Name}
                           setObj={setData}
                           value={data.agreement_URL}
                           setStatus={setStatus}
                           required
                        />
                     </div>
                  </div>
                  <div className='mt-4 xl:mt-8 w-full xl:w-3/4 2xl:w-4/5'>
                     <FileUploaderComponent
                        label='สำเนาบัตรประจำตัวประชาชนหรือสำเนาบัตรนักเรียนของผู้สมัคร (PDF)'
                        filePath='card_URL'
                        fileType='pdf'
                        obj={data}
                        fileName={data.card_Name}
                        setObj={setData}
                        value={data.card_URL}
                        setStatus={setStatus}
                        required
                     />
                  </div>
                  <div className='mt-4 xl:mt-8 w-full xl:w-3/4 2xl:w-4/5'>
                     <FileUploaderComponent
                        label='เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7) (PDF)'
                        filePath='pp7_URL'
                        fileType='pdf'
                        obj={data}
                        fileName={data.pp7_Name}
                        setObj={setData}
                        value={data.pp7_URL}
                        setStatus={setStatus}
                        required
                     />
                  </div>
                  <div className='mt-4 xl:mt-8 w-full xl:w-3/4 2xl:w-4/5'>
                     <FileUploaderComponent
                        label='ระเบียนแสดงผลการศึกษาของระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย (PDF)'
                        filePath='pp1_URL'
                        fileType='pdf'
                        obj={data}
                        fileName={data.pp1_Name}
                        setObj={setData}
                        value={data.pp1_URL}
                        setStatus={setStatus}
                        required
                     />
                  </div>
               </div>
               <img
                  className='hidden xl:block xl:absolute z-20 xl:-right-32 2xl:-right-24 bottom-0 h-3/4'
                  src='/assets/regisPage/uploadFormBG.png'
               />
            </div>
         </div>
      </div>
   );
};
export default UploadFilesForm;
