import { createElement, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { content } from "../../Content";
import emailjs from '@emailjs/browser';




const Contact = () => {
  const { Contact } = content;
  const form = useRef()

// Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
    "service_6wawslb",
    "template_yftub7f",
    form.current, 
   "BC5OPGEF_VGK79y1Z"
    )
      .then(
        (result) => {
          console.log(result.text);
          // The line below clear the input values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully")
      }, 
      (error) => {
          console.log(error.text);
          toast.error("Email message not sent")
      }
      )
  };



  return (
    <section id="contact" className="bg-green-900 text-white">
      <Toaster />
      <div className="md:container px-5 py-14">
       
        <h2 className="title !text-white" data-aos="fade-down" >{Contact.title}</h2>
        <h2 className="subtitle" data-aos="fade-down">{Contact.subtitle}</h2>
        <br />

        <div className="flex gap-10 md:flex-row flex-col">
          <form 
          ref={form} 
          data-aos="fade-up"
          onSubmit={sendEmail} 
          className="flex-1 flex flex-col gap-5">

            {/* Input Name as same as email Js template values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded" />
            <input
              type="email"
              name="user_email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"

              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded" />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button className="btn self-start
          bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>

          <div className="flex-1 flex flex-col gap-5">
            {
              Contact.social_media.map((content, i) => (
                <div key={i}
                data-aos="fade-down"
                data-aos-dealay={i * 450}

                 className="flex item-center gap-2">
                  <h4 className="text-white">{createElement(content.icon)}</h4>
                  <a className="font-Ppoppins text" href={content.link} target="_blank">{content.text}</a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
