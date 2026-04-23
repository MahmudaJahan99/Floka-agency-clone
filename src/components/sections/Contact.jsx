import React from 'react';
import { AiTwotoneMessage } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert('Message sent!');
                formRef.current.reset();
            })
            .catch(() => {
                alert('Failed to send message');
            });
    };

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
                <form ref={formRef} onSubmit={sendEmail} className='grid gap-5'>
                    <p className='funnel-font text-center text-2xl'>Have a project in mind?</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input name="user_name" type="text" placeholder="YOUR NAME" />
                        <input name="user_email" type="email" placeholder="BUSINESS EMAIL" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select name="budget">
                            <option value="" className='hidden'>BUDGET</option>
                            <option value="$1000">$1000</option>
                            <option value="$2000">$2000</option>
                            <option value="$3000">$3000</option>
                            <option value="$4000">$4000</option>
                            <option value="$5000">$5000</option>
                        </select>
                        <select name="service">
                            <option value="" className='hidden'>SERVICES</option>
                            <option value="Game-Design">Game Design</option>
                            <option value="Product-Design">Product Design</option>
                            <option value="Web-Design">Web Design</option>
                        </select>
                    </div>

                    <textarea name="message" placeholder="MESSAGE" rows="4" ></textarea>

                    <button type='submit' className='black-card text-white'>SEND</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;