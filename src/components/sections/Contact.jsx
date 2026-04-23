import React from 'react';
import { AiTwotoneMessage } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

const Contact = () => {
    return (
        <section id='contact' className='section-sm inter-font black-card grid md:grid-cols-2 gap-5'>
            {/* Content */}
            <div>
                {/* title */}
                <h3>GET IN TOUCH</h3>
                <p className='text-2xl md:text-4xl funnel-font my-5'>Tell us about your project—whether it’s a website, SEO, or marketing.</p>

                <div className='dark-font-3 grid gap-5'>
                    <div>
                        <h4 className='flex items-center gap-2 text-white'>
                            <span><AiTwotoneMessage /></span>
                            <span>TALK TO US</span>
                        </h4>
                        <p>Work and general inqueries +123 456 789 00</p>
                    </div>

                    <div>
                        <h4 className='flex items-center gap-2 text-white'>
                            <span><IoLocationSharp /></span>
                            <span>POST ADDRESS</span>
                        </h4>
                        <p>123 Banani, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className='white-card dark-font'>
                <form action="" className='grid gap-5'>
                    <p className='funnel-font text-center text-2xl'>Have a project in mind?</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="YOUR NAME" />
                        <input type="email" placeholder="BUSINESS EMAIL" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select>
                            <option value="" className='hidden'>BUDGET</option>
                            <option>$1000</option>
                            <option>$2000</option>
                            <option>$3000</option>
                            <option>$4000</option>
                            <option>$5000</option>
                        </select>
                        <select> <option value=""  className='hidden'>SERVICES</option>
                            <option>Game Design</option>
                            <option>Product Design</option>
                            <option>Web Design</option>
                        </select>
                    </div>

                    <textarea placeholder="MESSAGE" rows="4" ></textarea>

                    <button className='black-card text-white'>SEND</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;