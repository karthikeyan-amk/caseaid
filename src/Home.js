import React from 'react'
import { Link } from 'react-router-dom';

import secondscreen from './assets/Home/2ndpic.jpeg';
import thirdscreen from './assets/Home/3rdpic.png';
import fourthscreen from './assets/Home/4thpic.jpeg';

function Home() {

  return (
    <>
    <div className='flex flex-col min-h-screen bg-cover bg-[url(./assets/Home/bg.png)] p-[20px] justify-center items-center'>
      <div className='text-xl font-bold'>TEAM ALCHEMIST</div>
      <div className='flex flex-col gap-[20px]'>
        <div className='text-3xl font-bold'> AI-Powered<br/>Case Prediction:<br/></div>
        <div className='text-2xl font-medium'>Development of e-portal for facilitating Case Management<br/>Hearing of various types of cases</div>
      </div>
    </div>

    <div className='flex min-h-screen justify-center items-center  bg-white p-[20px]'>
      <div className='flex flex-col w-3/5 justify-center items-center text-center gap-[20px]'>
        <div className='text-[40px] font-bold'>
        Legal Research Assistance
        </div>
        <div className='text-[18px]'>
        Legal professionals can use this AI system to efficiently conduct legal research by finding relevant judgments and precedents quickly, saving time and effort.
        </div>
        <Link to="/caseaid/advocate" className='bg-[#003C64] rounded-lg w-[150px] h-[40px] text-white text-center p-[5px]'>Advocate</Link>
      </div>
      <div className='w-2/5 justify-center items-center '>
       <img className='w-[380px] rounded-lg' src={secondscreen} alt='Law'/>
      </div>

    </div>

    <div className='flex min-h-screen justify-center items-center  bg-white p-[20px]'>
      <div className='w-2/5 justify-center items-center '>
       <img className='w-[380px] rounded-lg' src={thirdscreen} alt='Law'/>
      </div>
      <div className='flex flex-col w-3/5 justify-center items-center text-center gap-[20px]'>
        <div className='text-[40px] font-bold'>
        Predictive Analytics
        </div>
        <div className='text-[18px]'>
        By analyzing patterns in previous judgments and their outcomes, AI can provide insights into the likely outcome of a current case, aiding clients in strategic decision-making.
        </div>
        <Link to="/caseaid/client" className='bg-[#003C64] rounded-lg w-[150px] h-[40px] text-white text-center p-[5px]'>Client</Link>
      </div>
    </div>
    
    <div className='flex min-h-screen justify-center items-center  bg-white p-[20px]'>
      <div className='flex flex-col w-3/5 justify-center items-center text-center gap-[20px]'>
        <div className='text-[40px] font-bold'>
        Case Prioritization
        </div>
        <div className='text-[18px]'>
        Courts can prioritize cases based on their similarity to previous cases, expediting the judicial process.
        </div>
        <Link to="/caseaid/judge" className='bg-[#003C64] rounded-lg w-[150px] h-[40px] text-white text-center p-[5px]'>Judge</Link>
      </div>
      <div className='w-2/5 justify-center items-center '>
       <img className='w-[380px] rounded-lg' src={fourthscreen} alt='Law'/>
      </div>

    </div>
    </>
  )
}

export default Home