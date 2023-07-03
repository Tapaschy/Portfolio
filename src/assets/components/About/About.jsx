import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element name='about'>
            <div className='md:bg-[#EAEDF2]' id='about'>
                <div className='container mx-auto md:pt-20 md:pb-32'>

                    <h1 className='text-4xl uppercase pt-10 mb-10 font-bold max-w-fit pb-2 border-b-4 border-primary'>About me</h1>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-8  justify-items-center items-center'>
                        <div className=' w-96 border-8 border-white relative'>
                            <img src="https://i.ibb.co/BGgwKjP/IMG-20191124-132833-Bokeh.jpg" alt="" />
                            <div className='absolute top-10 list-none bg-white'>
                                <li className=' bg-primary text-3xl border-white border-4'><Link to='https://www.facebook.com/Tapasimp.b' target='_blank' className=''><FaFacebookF className='text-white p-1' /></Link></li>
                                <li className=' bg-primary text-3xl border-white border-4'><Link to='https://github.com/Tapaschy' target='_blank' className=''><FaGithub className='text-white p-1' /></Link></li>
                                <li className=' bg-primary text-3xl border-white border-4'><Link to='https://www.linkedin.com/in/tapas-chowdhury-64144b280/' target='_blank' className=''><FaLinkedinIn className='text-white p-1' /></Link></li>

                            </div>
                        </div>
                        <div className=' '>
                            <h2 className='text-4xl font-semibold pb-3'>I'M Tapas Chowdhury</h2>
                            <p>Highly skilled React front-end developer with a strong passion for creating exceptional user interfaces. Proficient in building robust and scalable web applications. Continuously staying updated with the latest industry trends and technologies. Committed to delivering top-quality code and outstanding user experiences. Experienced in collaborating with cross-functional teams to achieve project goals. Dedicated to self-improvement and constantly enhancing skills through continuous learning and exploration. Excited to contribute to innovative projects and make a positive impact in the field of web development.</p>
                            <div className='md:flex justify-between pt-3'>
                                <div>
                                    <p> <span className='font-semibold'>Degree</span> | Bechelor of Science</p>
                                    <p> <span className='font-semibold'>Location</span> | Chattogram,Bangladesh.</p>
                                    <p> <span className='font-semibold'>Degree</span> | Bechelor of Science</p>
                                </div>
                                <div>
                                    <p> <span className='font-semibold'>Email</span> | Tapaschy12@gmail.com</p>
                                    <p> <span className='font-semibold'>Phone</span> | +8801812381152</p>
                                    <p> <span className='font-semibold'>Freelance</span> | Available</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Element>

    );
};

export default About;