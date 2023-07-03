import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import '../computents/Contact.css'
 const pdf_file = 'http://localhost:5173/myResume.pdf'


const Contact = () => {

const downloadResume =(url)=>{
const fileName =url.split('/').pop()
const aTag = document.createElement('a')
aTag.href=url
aTag.setAttribute('download', fileName)
document.body.appendChild(aTag)
aTag.click()
}

    const phoneNumber = '+8801725746856';
    return (
        <div className='  text-slate-50 pt-5'>
           
            
<div className='contact-button'>
<a href="#"><ReactWhatsapp number="+8801725746856" message="Hello World!!!" >WhatsApp</ReactWhatsapp></a>
    <a className=' border-2' href='https://www.facebook.com/iqbal.5600'> facebook</a>
    <a className=' border-2' href='https://www.linkedin.com/in/iqbal-hussain-7b58b1200/'>LinkedIn</a>
</div>
    <div className='contact-button'>
    
    <a onClick={()=>{downloadResume(pdf_file)}}>CV download</a>
    </div>
    <div className='contact-button'>
    <a href={`tel:${phoneNumber}`}  className=' border-8'>
    Call Me
    </a>
   
    </div>
    
        </div>
    );
};

export default Contact;