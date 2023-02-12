import { useState, useEffect } from "react";
import { getData, updateData } from "@/lib/Fetch";

export const ConsentForm = ({ setPage }: { setPage: any }) => {
   const [acceptPolicy, setAcceptPolicy] = useState<boolean>(false);

   useEffect(() => {
      const token = sessionStorage.getItem("token") as string;
      getData(token, 0)
         .then((res: any) => {
            setAcceptPolicy(res.data.data.consent);
            setPage(1);
         })
         .catch(error => {
            console.log(error);
         });
   }, []);

   return (
      <div className='relative h-full font-bai-jamjuree flex justify-center items-center mt-8'>
         <div className='xl:w-2/3 lg:2/3 md:w-4/5 sm:w-4/5 w-11/12 flex flex-col p-2 lg:p-5 xl:p-5 bg-[#D9D9D9] bg-opacity-20 rounded-lg '>
            <div className='font-bold text-base-black text-center mb-5 text-xl  lg:text-2xl xl:text-2xl'>
               นโยบายข้อมูลส่วนบุคคล
            </div>
            <div className='text-sm bg-white h-96 overflow-y-auto rounded-lg p-6 mb-4 mx-2 lg:mx-3 xl:mx-4'>
               <p className='font-semibold '> นโยบายส่วนบุคคล </p>
               <p className='font-semibold ml-4 mt-2'>1. ข้อมูลเกี่ยวกับโครงการ </p>
               <p className='ml-8 mt-2'>
                  โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ ครั้งที่ 34 หรือ Comcamp34
                  (ซึ่งต่อไปนี้จะเรียกว่า “โครงการ”) เป็นผู้จัดการดำเนินการเว็บไซต์ comcamp.io
                  และเว็บไซต์อื่นที่เกี่ยวข้อง (ซึ่งต่อไปนี้จะเรียกว่า “เว็บไซต์”)
                  นโยบายความเป็นส่วนตัวนี้
                  เพื่อกำหนดความมุ่งมั่นของโครงการต่อความเป็นส่วนตัวของผู้ใช้ของท่าน
                  (ซึ่งต่อไปจะเรียกว่า “ผู้สมัคร” หรือ “ท่าน”)
               </p>
               <p className='font-semibold ml-4 mt-2'>
                  2.ข้อมูลที่ให้ความยินยอมในการเก็บรวบรวมใช้ประมวลผล
               </p>
               <p className='ml-8 mt-2'>
                  โครงการจึงขอ เก็บ รวบรวม ใช้ประมวลผล ข้อมูลส่วนบุคคลของท่าน ภายใต้สิทธิและ
                  เงื่อนไขตามนโยบายส่วนบุคคลฉบับนี้ได้แก่ ข้อมูลส่วนบุคคล ดังต่อไปนี้
               </p>
               <ul className='ml-8'>
                  <li>1.ชื่อ (ชื่อต้น หรือ ชื่อกลาง หรือ ทั้งหมด)</li>
                  <li>2.นามสกุล</li>
                  <li>3.หมายเลขประจำตัวประชาชน</li>
                  <li>4.หมายเลขโทรศัพท์ติดต่อ</li>
                  <li>5.อีเมล</li>
                  <li>6.หมายเลขที่อยู่ไอพี</li>
               </ul>
               <p className='font-semibold ml-4 mt-2'>3. ข้อมูลส่วนบุคคลที่มีความอ่อนไหว</p>
               <p className='ml-8 mt-2'>
                  โครงการจึงขอเก็บข้อมูลส่วนบุคคลที่มีความอ่อนไหวเพื่อวัตถุประสงค์ดังนี้
               </p>
               <ul className='ml-8'>
                  <li>1.สำเนาบัตรประจำตัวประชาชน หรือ สำเนาบัตรนักเรียน</li>
                  <li>
                     2.เอกสารรับรองการเป็นนักเรียนของสถานศึกษา หรือ เอกสารรับรองผลการศึกษา
                     (ปพ.7)อย่างใดอย่างหนึ่ง
                  </li>
                  <li>
                     3. ระเบียนแสดงผลการศึกษาของระดับมัธยมศึกษาตอนปลาย (ปพ.1)
                     หรือแบบรายงานประจำตัวนักเรียนภาคเรียนล่าสุดอย่างใดอย่างหนึ่ง
                  </li>
                  <li>4. เอกสารขออนุญาตผู้ปกครอง</li>
                  <li>5. ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน </li>
               </ul>
               <p className='ml-8'>
                  โดยการเก็บข้อมูลที่มีความอ่อนไหวข้างต้น โดยโครงการมีวัตถปุระสงค์ดังนี้
               </p>
               <ul className='ml-12'>
                  <li>• เพื่อยืนยันว่าผู้สมัครมีตัวตนจริง</li>
                  <li>• เพื่อใช้ประกอบการพิจารณาคุณสมบัติของผู้สมัครตามที่ค่ายกำหนด</li>
               </ul>
               <p className='font-semibold ml-4 mt-2'>4. การประมวลผลข้อมูล </p>
               <p className='ml-8 mt-2'>
                  ให้หัวหน้าและรองหัวหน้าฝ่ายทะเบียนจำนวน 3 คน
                  ทำการตรวจสอบความถูกต้องของข้อมูลผู้สมัครทั้งหมดว่าข้อมูลนั้นถูกต้องและผ่านเกณฑ์คุณสมบัติตามที่ค่ายกำหนด
               </p>
               <p className='font-semibold ml-4 mt-2'>5.ระยะการเก็บรักษาข้อมูลส่วนบุคคล </p>
               <p className='ml-8 mt-2'>
                  โครงการจะไม่เก็บรักษาข้อมูลส่วนบุคคลของผู้สมัคร
                  เกินกว่าระยะเวลาที่กฎหมายกำหนดและระยะเวลา
                  การเรียกร้องสิทธิหรืออายุความฟ้องร้องดาเนินคดีในทางแพ่ง (10 ปี )
                  กรณีข้อมูลส่วนบุคคลที่มีความอ่อนไหวทางโครงการจะทำลาย ลบ ให้ระยะเวลา 1
                  เดือนหรือเร็วกว่านั้นนับตั้งแต่วันจบโครงการ
               </p>
               <p className='font-semibold ml-4 mt-2'>6.การคุ้มครองข้อมูลส่วนบุคคล </p>
               <p className='ml-8 mt-2'>
                  โครงการจะเก็บรักษาข้อมูลของผู้สมัครไว้เป็นอย่างดีโดยเก็บไว้ในรูปแบบข้อมูลอิเล็กทรอนิกส์โดยโครงการ
                  มีมาตรการรักษาความปลอดภัยของระบบอิเล็กทรอนิกส์ทำหน้าที่เก็บรักษาข้อมูลประมวลผลข้อมูลอย่าง
                  เหมาะสม และมีมาตรการในการป้องกัน การละเมิดข้อมูลส่วนบุคคล โดยโครงการ
                  ได้กำหนดนโยบาย วิธีปฏิบัติ เช่น มาตรการป้องกัน มิให้เจ้าหน้าที่นำข้อมูลผู้สมัคร
                  ออกจากระบบของโครงการ
                  มาตรการรักษาความปลอดภัยของระบบฐานข้อมูลอิเล็กทรอนิกส์ของโครงการกำหนดข้อตกลงอย่างเคร่งครัดกับคู่สัญญาเกี่ยวกับความคุ้มครอง
                  ข้อมูลส่วนบุคคลของผู้สมัคร และข้อบังคับ
                  สำหรับเจ้าหน้าที่และบุคลากรในการรักษาความลับของข้อมูลส่วนบุคคลของผู้สมัคร
               </p>
               <p className='font-semibold ml-4 mt-2'>
                  7.การติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล
               </p>
               <p className='ml-8 mt-2'>
                  หากท่านมีข้อสงสัย หรือต้องการสอบถามเกี่ยวกับ
                  นโยบายและการคุ้มครองข้อมูลส่วนบุคคลของโครงการ หรือประสงค์จะสอบถามเกี่ยวกับ
                  การใช้สิทธิของเจ้าของข้อมูลในการดำเนินการอย่างหนึ่งอย่างใดกับ
                  ข้อมูลส่วนบุคคลของท่านซึ่งโครงการ ได้เก็บรวบรวมใช้
                  ท่านสามารถติดต่อได้ที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล สถานที่ติดต่อ อีเมล
                  (คุณเวฟ) pongpon.buts@kmutt.ac.th (หัวหน้าฝ่ายการรับสมัคร)
               </p>
            </div>

            <div className='flex flex-col px-4'>
               <div className='flex flex-row items-center '>
                  <input
                     name='policy'
                     type='checkbox'
                     className='form-check-input appearance-none rounded-md h-5 w-5 cursor-pointer border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white'
                     onClick={
                        acceptPolicy === true
                           ? () => setAcceptPolicy(false)
                           : () => setAcceptPolicy(true)
                     }
                  />
                  <p className='text-base-black ml-2 font-bold sm:text-sm md:text-sm lg:text-base xl:text-base text-xs'>
                     ยินยอมข้อตกลงนโยบายข้อมูลส่วนบุคคล
                  </p>
               </div>
            </div>

            <button
               className='mt-4 py-2 text-lg text-white disabled:text-white/50 bg-red1 hover:bg-red2 disabled:bg-red3 rounded-lg '
               onClick={async () => {
                  const token = sessionStorage.getItem("token") as string;
                  const res = await updateData(token, 0, {});
                  setPage(1);
               }}
               disabled={acceptPolicy === false}
            >
               ยอมรับ
            </button>
         </div>
      </div>
   );
};
