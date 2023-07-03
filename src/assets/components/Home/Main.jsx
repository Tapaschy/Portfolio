import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import { Element } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import Contact from '../Contact/Contact';
import Footer from '../footer/Footer';

const Main = () => {
    return (

        <div className='md:pl-0 md:pr-0 pl-5 pr-5' >
            <Navbar></Navbar>
            <Element name='home'>
                <section className='grid grid-cols-1 md:grid-cols-2  md:pt-32 md:pb-32 pt-14 pb-14 container mx-auto' id='home' >
                    <div className='justify-center text-center'>
                        <h1 className='text-4xl'>Hello There !</h1>
                        <h3 className='text-5xl'>I'm Tapas Chowdhury</h3>
                        <h3 className='text-2xl mt-4 p-3'>I am a {' '}  <span className='uppercase font-semibold text-primary'>
                            <Typewriter
                                words={['Front-end Developer', 'React Developer', 'Mern stack Developer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>

                        </h3>
                        <a href="https://drive.google.com/uc?export=download&id=1EJYZxGcNkiUlXEj0sKYPfHn9nWVMfkvc" className='btn btn-primary mt-5 md:mb-0 mb-8 '>Download Resume</a>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-72 rounded-full border-primary border-8">
                            <img src="https://i.ibb.co/F8c8CxB/300px.jpg" />
                        </div>
                    </div>
                </section>
            </Element>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;