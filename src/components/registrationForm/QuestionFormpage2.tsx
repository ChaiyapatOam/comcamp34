import Textarea from "@/components/Textareainput";
import { useState, useEffect } from "react";
import { QuestionPage2 } from "@/types/RegistrationType";
import { getData, updateData } from "@/lib/Fetch";

export const QuestionFormpage2 = ({ data, setData }: { data: QuestionPage2; setData: any }) => {
   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-red2 bg-opacity-10 flex flex-col font-bai-jamjuree w-11/12 lg:rounded-2xl rounded-lg lg:mx-40 mx-6 lg:px-8 xl:px-32 px-6 py-4 pb-8'>
               <div className=' text-5xl font-bold lg:mb-12 mb-4 flex'>
                  <img
                     src='/assets/regisPage/yellow_postit.svg'
                     className='lg:w-16 lg:mt-8 mt-2 w-8'
                  />
                  <p className='text-red2 lg:text-5xl text-2xl font-semibold lg:mt-8 mt-2 ml-2'>
                     คำถามในการเลือก
                  </p>
               </div>
               <Textarea
                  question='4.น้อง ๆ คิดว่า ในอีก 10 ปีข้างหน้า อะไรจะเปลี่ยนแปลงไป และอะไรจะยังคงเหมือนเดิมบ้าง (ยกตัวอย่างมาอย่างน้อย 3 ข้อ ไม่จำเป็นต้องเป็นเรื่องเทคโนโลยี) และน้อง ๆ คิดว่าตัวเองจะปรับตัวให้เข้ากับสิ่งที่เปลี่ยนแปลงอย่างไร และจะใช้ประโยชน์จากสิ่งที่จะไม่เปลี่ยนแปลงได้อย่างไรบ้าง'
                  name='q4'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q4}
               />
               <Textarea
                  question='5.ถ้าหากน้องได้รับทุนในการทำธุรกิจก้อนหนึ่ง น้องจะเลือกทำธุรกิจอะไร เพราะอะไรน้องถึงเลือกทำธุรกิจนั้น และจะสร้างเทคโนโลยีอะไรมาเพื่อมาพัฒนาธุรกิจของตนเอง และเพราะอะไรถึงเลือกเทคโนโลยีนั้น'
                  name='q5'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q5}
               />
               <Textarea
                  question='6.จงแต่งเรื่องจากคำที่กำหนดให้ต่อไปนี้  comcamp34, นัมโดซาน, ห่านบางมด, y2k, พุดดิ้งมะพร้าวอ่อน, ทรงอย่างแบด, โมโม่, ตึกแดง'
                  name='q6'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q6}
               />
               <Textarea
                  question='7.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur orci nisl, vel lacinia massa viverra eu. Nullam sit amet turpis rhoncus, interdum massa ut, dapibus mi. Pellentesque porta, ante sed fermentum gravida, ante enim faucibus augue, at dignissim ligula nisi et mauris. Suspendisse elementum, sapien sed pulvinar fringilla, leo orci finibus mi, molestie tincidunt massa nulla id orci. Etiam luctus mattis elit pretium pretium. Suspendisse vitae malesuada libero, vitae suscipit quam.'
                  name='q7'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q7}
               />
            </div>
         </div>
      </>
   );
};
