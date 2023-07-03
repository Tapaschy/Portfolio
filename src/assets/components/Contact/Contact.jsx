import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import email from "../../../contact-email.json";
import { Element } from 'react-scroll';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5zahwhm', 'template_ngtivyt', form.current, '55mjVOsee2QK4CLJh')
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Message send !!!',
                    showConfirmButton: false,
                    timer: 1500
                  });
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Element name='contact'>
            <div className='container mx-auto' id='contact'>
                <h1 className='text-4xl uppercase pt-20 mb-10 font-bold max-w-fit pb-2 border-b-4 border-primary '>Contact</h1>
                <div className='grid md:grid-cols-3 grid-cols-1  gap-3 justify-items-center mb-20'>
                    <div className='col-span-2 mt-10'>
                        <h1 className='uppercase font-semibold mb-4'>say something</h1>
                        <div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='md:flex gap-3  mb-5'>
                                    <input type="text" placeholder="Name" required name="from_name" className='input input-primary mb-4 md:mb-0 input-bordered w-full ' />
                                    <input type="email" placeholder="Email" required name="from_email" className='input input-primary input-bordered w-full' />
                                </div>
                                <textarea name="message" placeholder="Message" className='textarea w-full textarea-primary' required />
                                <input type="submit" className='btn btn-primary ' value="Send" />
                            </form>
                        </div>
                    </div>
                    <div className='col-span-1 w-60 align-middle justify-center order-first md:order-last'><Lottie animationData={email} loop={true} /></div>
                </div>
            </div>
        </Element>
    );
};

export default Contact;