
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const form = useRef();
   
 const handleChange = ()=>{
  console.log('sdff');
 }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1521wdl', 'template_o03x28o', form.current, 'jY-mu-ZDr4tMK44s6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>

        <div className="container mx-auto ">
        <h2 className=' text-5xl  font-bold mt-[-120px] pb-7'>Contact me</h2>
      <div className="max-w-md mx-auto bg-white rounded p-4 shadow-md">
   
       <form ref={form} onSubmit={sendEmail}>
       <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              // onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="user_email"
              placeholder="johndoe@example.com"
              
              // onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message here"
          
              
            />
          </div>

          <div className="flex justify-center">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:out focus:shadow-outline"
              type="submit"
             value='send'
            
            />
          </div>
  
    </form>
    </div>
    </div>
    </div>
  );
};

export default ContactForm;