

import React from 'react';
import { SkillBars } from 'react-skills';
const SkillBar  = () => {
    const skillsData= [
        {
          name: 'HTML',
          level: 90,
          color: 'blue',
        },
        {
          name: 'CSS',
          level: 90,
          color: 'green',
        },
        {
            name: 'JavaScripts',
            level: 60,
            color: 'yellow',
          },
          {
            name: 'ReactJs',
            level: 80,
            color: 'pink',
          }
      ]
    return (
      <div id='skills' className='flex  justify-center bg-slate-300 p-10'>
        
          <div className='w-96  grid  '>
          <h2 className=' text-5xl  font-bold mt-[-120px] pb-7'>My skills</h2>
            <SkillBars skills={skillsData} />
        </div>
      </div>
    );
};

export default SkillBar ;











// ...






















