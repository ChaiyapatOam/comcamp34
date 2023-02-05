import ConditionsSection from '@/components/homePage/ConditionsSection';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React,{useEffect} from "react";
import Navbar from '@/components/registrationForm/Navbar';
import LandingSection from '@/components/frontPage/LandingSection';
import FAQSection from '@/components/homePage/FAQSection';
export const FrontPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div className='absolute mx-auto left-0 right-0'>
        <Navbar />
        </div>
           <div className="flex h-screen flex-col">
                <LandingSection/>
                <ConditionsSection/> 
                <FAQSection/>
            </div>
        </>
    );
}