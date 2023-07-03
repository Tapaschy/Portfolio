import React from 'react';
import { FaArrowRight, FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='md:bg-[#EAEDF2]' id='portfolio'>
            <div className='container mx-auto md:pt-20 md:pb-32'>
                <h1 className='text-4xl uppercase pt-10 mb-10 font-bold max-w-fit pb-2 border-b-4 border-primary'>LATEST WORKS</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure className="relative max-w-full h-96 overflow-hidden rounded-lg">
                            <div className="h-full w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img src="https://i.ibb.co/Mgk6QqW/music-fairy-web-app.png" alt="Shoes" />
                            </div>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title uppercase">Music Fairy</h2>
                            <p>Music instrument learning school built with react,Firebase and MongoDB</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => window.my_modal_4.showModal()} className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
                            </div>
                            {/* You can open the modal using ID.showModal() method */}
                            {/* <button className="btn" onClick={() => window.my_modal_4.showModal()}>open modal</button> */}
                            <dialog id="my_modal_4" className="modal">
                                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                                    <img className='h-auto w-full' src="https://i.ibb.co/vLM6Wcm/music-fairy-web-app.png" alt="" />
                                    <h3 className="font-bold text-lg">MUSIC FAIRY</h3>
                                    <p>Music instrument learning school built with react,Firebase and MongoDB</p>
                                    <h3 className="font-bold text-lg">Feature</h3>
                                    <ol>
                                        <li> Students can login and booked classes.And After payment they can enrolled class.</li>
                                        <li>Instructor can add classes ,update classes.</li>
                                        <li>Admin can manage user role and approve class and deny class.</li>
                                    </ol>
                                    <h3 className="font-bold text-lg">Technology</h3>
                                    <div>
                                        <ul className='technology flex flex-wrap gap-1'>
                                            <li>React</li>
                                            <li>Firebase</li>
                                            <li>MongoDB</li>
                                            <li>Node</li>
                                            <li>Express</li>
                                            <li>Payment system</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className='flex gap-3 mt-3'>
                                            <li className='btn btn-primary btn-sm'><Link to="https://music-fairy.web.app/" target="_blank">Live site</Link></li>
                                            <li className='btn btn-primary btn-sm'><Link to="https://github.com/Tapaschy/Music-school" target="_blank">Client site</Link></li>
                                            <li className='btn btn-primary btn-sm'><Link to="https://github.com/Tapaschy/Music-school-server" target="_blank">Server site</Link></li>
                                        </ul>
                                    </div>
                                    <div className="modal-action">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>

                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure className="relative max-w-full h-96 overflow-hidden rounded-lg">
                            <div className="h-full w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img src="https://i.ibb.co/vX1K47s/disneytoy-f78ff-web-app-1.png" alt="Shoes" />
                            </div>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">DISNEY TOY WORLD</h2>
                            <p>Toy site where user can see Various Toys and see details about Toys.</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => window.my_modal_6.showModal()} className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
                            </div>
                            <dialog id="my_modal_6" className="modal">
                                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                                    <img className='h-auto w-full' src="https://i.ibb.co/mTZBL68/disneytoy-f78ff-web-app-1.png" alt="" />
                                    <h3 className="font-bold text-lg">DISNEY TOY WORLD</h3>
                                    <p>Toy site where user can see Various Toys and see details about Toys</p>
                                    <h3 className="font-bold text-lg">Feature</h3>
                                    <ol>
                                        <li> Toys site with slider and Toy section.</li>
                                        <li>User can login after login They can add Toys and delete Toys.</li>
                                        <li>Sorted Toys based on Category.</li>
                                    </ol>
                                    <h3 className="font-bold text-lg">Technology</h3>
                                    <div>
                                        <ul className='technology flex flex-wrap gap-1'>
                                            <li>React</li>
                                            <li>Firebase</li>
                                            <li>MongoDB</li>
                                            <li>Node</li>
                                            <li>Express</li>
                                            <li>React router dom</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className='flex gap-3 mt-3'>
                                            <li className='btn btn-primary btn-sm'><Link to="https://disneytoy-f78ff.web.app/" target="_blank">Live site</Link></li>
                                            <li className='btn btn-primary btn-sm'><Link to="https://github.com/Tapaschy/Toy-site-client" target="_blank">Client site</Link></li>
                                            <li className='btn btn-primary btn-sm'><Link to="https://github.com/Tapaschy/Toy-site-server.git" target="_blank">Server site</Link></li>
                                        </ul>
                                    </div>
                                    <div className="modal-action">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure className="relative max-w-full h-96 overflow-hidden rounded-lg">
                            <div className="h-full w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img src="https://i.ibb.co/dB6HnX0/food-melodies-b902a-web-app.png" alt="Shoes" />
                            </div>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title uppercase">Food melodies</h2>
                            <p>Food site based on popular chef and their recipes</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => window.my_modal_5.showModal()} className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
                            </div>
                            <dialog id="my_modal_5" className="modal">
                                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                                    <img className='h-auto w-full' src="https://i.ibb.co/JvmCwQ9/food-melodies-b902a-web-app.png" alt="" />
                                    <h3 className="font-bold text-lg">Food melodies</h3>
                                    <p> Food site based on popular chef and their recipes</p>
                                    <h3 className="font-bold text-lg">Feature</h3>
                                    <ol>
                                        <li> Home page with navbar with user profile.</li>
                                        <li>Chef details section show with total recipes and details recipes.</li>
                                        <li>Have login with email and password and google and github login.</li>
                                    </ol>
                                    <h3 className="font-bold text-lg">Technology</h3>
                                    <div>
                                        <ul className='technology flex flex-wrap gap-1'>
                                            <li>React</li>
                                            <li>Firebase</li>
                                            <li>Bootstrap</li>
                                            <li>React router dom</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className='flex gap-3 mt-3'>
                                            <li className='btn btn-primary btn-sm'><Link to="https://food-melodies-b902a.web.app/" target="_blank">Live site</Link></li>
                                            <li className='btn btn-primary btn-sm'><Link to="https://github.com/Tapaschy/Food-melodies" target="_blank">Client site</Link></li>
                                            <li className='btn btn-primary btn-sm'><Link to="https://github.com/Tapaschy/Food-melodies-server" target="_blank">Server site</Link></li>
                                        </ul>
                                    </div>
                                    <div className="modal-action">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Projects;