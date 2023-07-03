import React from 'react';
import img1 from '../assets/portfolio1.png'
import img2 from '../assets/portfolio2.png'
import img3 from '../assets/portfolio3.png'
import img from '../assets/screen.png'
import '../computents/Project.css'
const Project = () => {
    return (
        <div id='projects'>
         
            <h2 className=' text-5xl  font-bold mt-[-120px] pb-7'>My Projects</h2>
        
            
        
			<div className="grid md:grid-cols-4 gap-4">
         
<div className=" shadow-orange-300 shadow-2xl  b-4 content">
<div className="screen">
    <div className='hover-bg'>  </div>
       <div className='details'>
       <h2 className=' text-3xl font-bold' >Name</h2>
       <h2 className=' text-3xl font-bold' >My Project</h2>
       </div>
		<img src={img1} alt="" />
       <div className='project-button'>
        <div className="wrapper">
              <a href="https://summer-camp-auth.web.app/#slide1"><span>Preview</span></a>
           </div>
     </div>			
		</div>
</div>

<div className=" shadow-orange-300 shadow-2xl  b-4 content">
<div className="screen">
    <div className='hover-bg'>  </div>
       <div className='details'>
       <h2 className=' text-3xl font-bold' >Name</h2>
       <h2 className=' text-3xl font-bold' >My Project</h2>
       </div>
		<img src={img2} alt="" />
       <div className='project-button'>
        <div className="wrapper">
              <a href="https://curd-assignment-2eb5d.web.app/"><span>Preview</span></a>
           </div>
     </div>			
		</div>
</div>

<div className=" shadow-orange-300 shadow-2xl  b-4 content">
<div className="screen">
    <div className='hover-bg'>  </div>
       <div className='details'>
       <h2 className=' text-3xl font-bold' >Name</h2>
       <h2 className=' text-3xl font-bold' >My Project</h2>
       </div>
		<img src={img3} alt="" />
       <div className='project-button'>
        <div className="wrapper">
              <a href="https://recipes-assignment-auth.web.app/home"><span>Preview</span></a>
           </div>
     </div>			
		</div>
</div>

<div className=" shadow-orange-300 shadow-2xl  b-4 content">
<div className="screen">
    <div className='hover-bg'>  </div>
       <div className='details'>
       <h2 className=' text-3xl font-bold' >Name</h2>
       <h2 className=' text-3xl font-bold' >My Project</h2>
       </div>
		<img src={img} alt="" />
       <div className='project-button'>
        <div className="wrapper">
              <a href="#"><span>Preview</span></a>
           </div>
     </div>			
		</div>
</div>

	</div>
		

        </div>
    );
};

export default Project;