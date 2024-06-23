'use client'
import React from 'react'
import Image from 'next/image'
import style from './HomeView.module.css'
import AOS from 'aos';
import { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import WhatWedo from '../../assets/whatwedo.svg'
import Channel from '../../assets/channel.svg'
import Reliable from '../../assets/Reliable.svg'
import Endless from '../../assets/Endless.svg'
import Unique from '../../assets/unique.svg'
import AI from '../../assets/AI1.jpg'
import AI2 from '../../assets/AI2.jpg'
import AI3 from '../../assets/AI3.jpg'
import { useRouter } from 'next/navigation';
const HomeView = () => {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration in milliseconds
            // Only animate once on scroll
        });
    }, []);

const router = useRouter();


    const data = [
        { id: 1, title: 'Chatbots' },
        { id: 2, title: 'Image Recognition' },
        { id: 3, title: 'Predictive Analytics' },
        { id: 4, title: 'NLP' },
        { id: 5, title: 'Sentiment Analysis' },
        { id: 6, title: 'Virtual Assistants ' },
        { id: 7, title: 'Voice Recognition' },
    ];

    // State and Ref for managing the marquee effect







    return (
        <div className='AllSection'>
            <div className={style.section1}>
                <div className={style.TextBox}>
                    <div className={style.textSectionParent}>
                    <div className={style.textsection}>
                        <div className={style.textSectionH1}><h1>Trust</h1></div>
                        <div>
                        <div className="content1">
                            <h2>Innovate</h2>
                            <h2>Innovate</h2>
                        </div>
                        </div>
                        <div>
                       
                    </div>
                    </div>
                    <div className={style.text2}><h1>Trive. Succeed.</h1></div>
                    <div className={style.Buttonsection}>
                    <button className={style.button}  onClick={()=>router.push('/service')}>Get Started</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className={style.section1_1}>
                <div className='Home'>
                    <div className='HomeChild'>
                        {/* Repeat the content for continuous scrolling */}
                        {[...Array(1000).keys()].map((index) => (
                            <div key={index} className='HomeChildItem'>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    {
                                        data.map((item) => (
                                            <div key={item.id} className={style.Item} >
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.section2}>
                <div className={style.sectionChild}>
                    <div className={style.sectionChild2}>
                        <div>
                            <p className={style.TextHeading}> What we Do</p>
                            <div className={style.ImageContainer}>
                                <Image className={style.Image} src={WhatWedo} alt='What we do' width={400} height={300} />
                            </div>
                            <div className={style.TextBox2}>
                                <h5 className={style.TextBoxchild1}>
                                    Unlock the potential of AI with Mioneer. We specialize in delivering cutting-edge AI solutions tailored to your business needs. From customer service automation to unbiased HR recruitment and bespoke AI applications, we harness the power of AI to drive innovation and efficiency. Our team of experts, with over 100 years of collective experience in AI, is dedicated to helping businesses thrive in today's digital landscape. Partner with Mioneer to elevate your business to new heights with the transformative capabilities of artificial intelligence. Contact us today to explore how AI can revolutionize your business.
                                </h5>
                            </div>
                        </div>
                        <div className={style.CardParent}>
                            <div className={style.Card} data-aos={"fade-right"}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
                                    <div className={style.ImageContainer}>
                                        <Image src={Channel} alt='What we do' width={100} height={100} className={style.Image} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h3 className={style.textColorParent}>Under excellent support</h3>
                                        <p className={style.textColor} >Experience exceptional support tailored to your needs. Our dedicated team is committed to providing you with top-notch assistance. Contact us today for unparalleled service.</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.Card} data-aos={"fade-right"}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
                                    <div className={style.ImageContainer}>
                                        <Image src={Reliable} alt='What we do' width={100} height={100} className={style.Image} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h3 className={style.textColorParent}>Under reliable experts</h3>
                                        <p className={style.textColor} >Rely on our team of experts for dependable solutions. With years of experience and proven results, we're here to meet your needs. Contact us today for reliable service.</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.Card} data-aos={"fade-left"}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
                                    <div className={style.ImageContainer}>
                                        <Image src={Endless} alt='What we do' width={100} height={100} className={style.Image} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h3 className={style.textColorParent}>Under endless possibilities</h3>
                                        <p className={style.textColor} >Discover endless possibilities with us. Our innovative solutions and tailored approaches open doors to new opportunities. Let's explore the boundless potential together. Contact us now. </p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.Card} data-aos={"fade-left"}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
                                    <div className={style.ImageContainer}>
                                        <Image src={Unique} alt='What we do' width={100} height={100} className={style.Image} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h3 className={style.textColorParent}>Unique Technologies</h3>
                                        <p className={style.textColor} >Explore our unique technologies designed to propel your business forward. With cutting-edge innovations and tailored solutions, we empower you to stand out in today's competitive landscape. Discover more now.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="section3" >
                <div className={style.Sec3Child}>
                    <div className={style.SectionImage}>
                    <div class="composition">
                        <Image src={AI} alt="Nature 1" className="composition__photo composition__photo--p1" />
                        <Image src={AI2} alt="Nature 2" className="composition__photo composition__photo--p2" />
                        <Image src={AI3} alt="Nature 3" className="composition__photo composition__photo--p3"  />
                    </div>
                </div>
                    <div className={style.TextBoxOfHome}>
                        <p>
                            Explore the power of AI tools, developed with ingenuity, brilliance, quality and <span>joy</span></p>
                        <button className={style.button} onClick={()=>router.push('/Aicustomer')}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView
