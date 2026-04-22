import React from 'react';
import companyLogo1 from '../../assets/images/company-logo-1.svg'
import companyLogo2 from '../../assets/images/company-logo-2.svg'
import companyLogo3 from '../../assets/images/company-logo-3.svg'
import companyLogo4 from '../../assets/images/company-logo-4.svg'
import companyLogo5 from '../../assets/images/company-logo-5.svg'
import companyLogo6 from '../../assets/images/company-logo-6.svg'
import companyLogo7 from '../../assets/images/company-logo-7.svg'
import testimonialFeature from '../../assets/images/testimonial-feature.webp'

const Testimonial = () => {
    return (
        <section id='testimonial' className='section-sm inter-font grid gap-5'>
            {/* Title */}
            <h3>HAPPY USERS</h3>

            {/* Company logos */}
            <div className="white-card grid grid-cols-2 md:grid-cols-4 md:gap-y-5">
                <div className='company-logo-img'>
                    <img src={companyLogo1} />
                </div>
                <div className='company-logo-img'>
                    <img src={companyLogo2} />
                </div>
                <div className='company-logo-img'>
                    <img src={companyLogo3} />
                </div>
                <div className='company-logo-img'>
                    <img src={companyLogo4} />
                </div>
                <div className='company-logo-img'>
                    <img src={companyLogo5} />
                </div>
                <div className='company-logo-img'>
                    <img src={companyLogo6} />
                </div>
                <div className='company-logo-img'>
                    <img src={companyLogo7} />
                </div>
                <div className='dark-font-2 flex flex-col justify-center items-center text-xs'>
                    <span>NEXT CAN BE YOU</span>
                    <span>LET'S TALK</span>
                </div>
            </div>
            
            <div className='w-full max-h-lvh  overflow-hidden'>
                <img src={testimonialFeature} className='w-full h-full object-cover object-bottom rounded-[20px]' />
            </div>
        </section>
    );
};

export default Testimonial;