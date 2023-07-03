import React from 'react';

const Skills = () => {
    return (
        <div className='container mx-auto mt-20 mb-20' id='skills'>
            <h1 className='text-4xl uppercase  mb-10 font-bold max-w-fit pb-2 border-b-4 border-primary'>My skills</h1>
            <div className='flex flex-wrap gap-3'>
            <span class="  border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">HTML5</span>
            <span class="  border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">CSS3</span>
            <span class="  border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">Bootstrap</span>
            <span class=" border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">TailwindCSS</span>
            <span class=" border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">JavaScript</span>
            <span class=" border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">React</span>
            <span class=" border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">Firebase</span>
            <span class=" border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">Express</span>
            <span class=" border-2 border-primary rounded-md px-5 py-3 text-lg text-primary font-semibold">MongoDB</span>
            </div>
        </div>
    );
};

export default Skills;