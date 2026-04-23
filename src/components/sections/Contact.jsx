import React from 'react';
import { AiTwotoneMessage } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

const Contact = () => {
    return (
        <section>
            <div>
                <h3>GET IN TOUCH</h3>
                <p>Tell us about your project—whether it’s a website, SEO, or marketing.</p>

                <h4>
                    <span><AiTwotoneMessage /></span>
                    TALK TO US
                </h4>
                <p>Work and general inqueries +123 456 789 00</p>

                <h4>
                    <span><IoLocationSharp /></span>
                    POST ADDRESS
                </h4>
                <p>123 Banani, Dhaka, Bangladesh</p>
            </div>

            <div>
                <form action="">
                    <p>Have a project in mind?</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-black/20" />
                        <input type="email" placeholder="Business Email" className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-black/20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-black/20">
                            <option value="" disabled className='hidden'>Budget</option>
                            <option>$1000</option>
                            <option>$2000</option>
                            <option>$3000</option>
                            <option>$4000</option>
                            <option>$5000</option>
                        </select>
                        <select className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-black/20"> <option value="" disabled className='hidden'>Services</option>
                            <option>Game Design</option>
                            <option>Product Design</option>
                            <option>Web Design</option>
                        </select>
                    </div>

                    <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-md outline-none resize-none focus:ring-2 focus:ring-black/20" ></textarea>
                </form>
            </div>
        </section>
    );
};

export default Contact;