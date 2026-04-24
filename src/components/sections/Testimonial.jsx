import React from 'react';
import companyLogo1 from '../../assets/images/company-logo-1.svg'
import companyLogo2 from '../../assets/images/company-logo-2.svg'
import companyLogo3 from '../../assets/images/company-logo-3.svg'
import companyLogo4 from '../../assets/images/company-logo-4.svg'
import companyLogo5 from '../../assets/images/company-logo-5.svg'
import companyLogo6 from '../../assets/images/company-logo-6.svg'
import companyLogo7 from '../../assets/images/company-logo-7.svg'
import testimonialFeature from '../../assets/images/testimonial-feature.webp'
import teamMember1 from '../../assets/images/team-member-1.jpg'
import teamMember2 from '../../assets/images/team-member-2.jpg'
import teamMember3 from '../../assets/images/team-member-3.jpg'
import { FaStar } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
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
                    <a href='#contact' className='dark-font-2 flex flex-col justify-center items-center text-xs'>
                        <span>NEXT CAN BE YOU</span>
                        <span>LET'S TALK</span>
                    </a>
                </div>

                <div className='w-full max-h-lvh  overflow-hidden'>
                    <img src={testimonialFeature} className='w-full h-full object-cover object-bottom rounded-[20px]' />
                </div>
            </section>

            <section className='section-sm inter-font'>
                {/* Title */}
                <h3>USER FEEDBACKS</h3>

                <div className="hr-divider"></div>

                <div className='text-center md:text-left md:grid grid-cols-3 mb-5'>
                    <div></div>
                    <div className='big-font md:text-4xl funnel-font dark-font md:col-span-2 leading-10'>
                        Accelerating growth, and unlocking new potential.
                        <span className='members-img-container'>
                            <img src={teamMember1} />
                            <img src={teamMember2} />
                            <img src={teamMember3} />
                        </span>
                        Let’s build your brand—together.
                    </div>
                </div>

                {/* Carousel */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {/* Card 1 */}
                    <SwiperSlide>
                        <div className='flex flex-col gap-1 testimonial-card'>
                            <div className="white-card small-hover">
                                <p>Nicolas K. Ellington</p>
                                <p>IT Specialist</p>
                            </div>
                            <div className='white-card grid gap-5 big-hover'>
                                <span className='flex gap-2'>
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                </span>
                                <p>
                                    "As we continued to use their tool and found more use cases, our feature requests quickly found thier way into thier backlog."
                                </p>
                                <p>"GREAT DESIGN SOLUTIONS"</p>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* Card 2 */}
                    <SwiperSlide>
                        <div className='flex flex-col gap-1 testimonial-card'>
                            <div className='white-card grid gap-5 big-hover'>
                                <span className='flex gap-2'>
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                </span>
                                <p>
                                    "As we continued to use their tool and found more use cases, our feature requests quickly found thier way into thier backlog."
                                </p>
                                <p>"GREAT DESIGN SOLUTIONS"</p>
                            </div>
                            <div className="white-card small-hover">
                                <p>Julian T. Beaumont</p>
                                <p>IT Specialist</p>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* Card 3 */}
                    <SwiperSlide>
                        <div className='flex flex-col gap-1 testimonial-card'>
                            <div className="white-card small-hover">
                                <p>Felipe D. Hawthome</p>
                                <p>IT Specialist</p>
                            </div>
                            <div className='white-card grid gap-5 big-hover'>
                                <span className='flex gap-2'>
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                </span>
                                <p>
                                    "As we continued to use their tool and found more use cases, our feature requests quickly found thier way into thier backlog."
                                </p>
                                <p>"GREAT DESIGN SOLUTIONS"</p>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* Card 4 */}
                    <SwiperSlide>
                        <div className='flex flex-col gap-1 testimonial-card'>
                            <div className='white-card grid gap-5 big-hover'>
                                <span className='flex gap-2'>
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                </span>
                                <p>
                                    "As we continued to use their tool and found more use cases, our feature requests quickly found thier way into thier backlog."
                                </p>
                                <p>"GREAT DESIGN SOLUTIONS"</p>
                            </div>
                            <div className="white-card small-hover">
                                <p>Javier C. Emerson</p>
                                <p>IT Specialist</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    );
};
export default Testimonial;