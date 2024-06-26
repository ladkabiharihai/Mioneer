'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import style from './HomeView.module.css'
import AOS from 'aos';
import { useRouter } from 'next/navigation';
import 'aos/dist/aos.css';
import WhatWedo from '../../assets/whatwedo.svg'
import Channel from '../../assets/channel.svg'
import Reliable from '../../assets/Reliable.svg'
import Endless from '../../assets/Endless.svg'
import Unique from '../../assets/unique.svg'
import AI from '../../assets/AI1.jpg'
import AI2 from '../../assets/AI2.jpg'
import AI3 from '../../assets/AI3.jpg'

const HomeView = () => {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration in milliseconds
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

    return (
        <>
            <Head>
                <title>Mioneer Private Limited - AI-Based SaaS Solutions</title>
                <meta name="description" content="Mioneer Private Limited offers innovative AI-based SaaS solutions to enhance your business operations. Contact us for AI and tech services." />
                <meta name="keywords" content="AI, SaaS, Mioneer Private Limited, tech services, AI solutions" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.mioneer.in/" />
                <meta property="og:title" content="Mioneer Private Limited - AI-Based SaaS Solutions" />
                <meta property="og:description" content="Mioneer Private Limited offers innovative AI-based SaaS solutions to enhance your business operations. Contact us for AI and tech services." />
                {/* <meta property="og:image" content="https://www.solutionai.us/path-to-image.jpg" /> */}
                <meta property="og:url" content="https://www.mioneer.in/" />
                <meta property="og:type" content="website" />
            </Head>
            <div className='AllSection'>
                <div className={style.section1}>
                    <div className={style.TextBox}>
                        <div className={style.textSectionParent}>
                            <div className={style.textsection}>
                                <h1>Trust</h1>
                                <div className="content1">
                                    <h2>Innovate</h2>
                                    <h2>Innovate</h2>
                                </div>
                                <h1>Thrive. Succeed.</h1>
                                <div className={style.Buttonsection}>
                                    <button className={style.button} onClick={() => router.push('/service')}>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.section1_1}>
                    <div className='Home'>
                        <div className='HomeChild'>
                            {[...Array(1000).keys()].map((index) => (
                                <div key={index} className='HomeChildItem'>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        {data.map((item) => (
                                            <div key={item.id} className={style.Item}>
                                                <p>{item.title}</p>
                                            </div>
                                        ))}
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
                                <p className={style.TextHeading}>What we Do</p>
                                <div className={style.ImageContainer}>
                                    <Image className={style.Image} src={WhatWedo} alt='Illustration of what we do at Mioneer Private Limited' width={400} height={300} />
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
                                            <Image src={Channel} alt='Channel support illustration' width={100} height={100} className={style.Image} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <h3 className={style.textColorParent}>Under excellent support</h3>
                                            <p className={style.textColor}>Experience exceptional support tailored to your needs. Our dedicated team is committed to providing you with top-notch assistance. Contact us today for unparalleled service.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.Card} data-aos={"fade-right"}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
                                        <div className={style.ImageContainer}>
                                            <Image src={Reliable} alt='Reliable support illustration' width={100} height={100} className={style.Image} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <h3 className={style.textColorParent}>Under reliable experts</h3>
                                            <p className={style.textColor}>Rely on our team of experts for dependable solutions. With years of experience and proven results, we're here to meet your needs. Contact us today for reliable service.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.Card} data-aos={"fade-left"}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
                                        <div className={style.ImageContainer}>
                                            <Image src={Endless} alt='Endless possibilities illustration' width={100} height={100} className={style.Image} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <h3 className={style.textColorParent}>Under endless possibilities</h3>
                                            <p className={style.textColor}>Discover endless possibilities with us. Our innovative solutions and tailored approaches open doors to new opportunities. Let's explore the boundless potential together. Contact us now.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.Card} data-aos={"fade-left"}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
                                        <div className={style.ImageContainer}>
                                            <Image src={Unique} alt='Unique technologies illustration' width={100} height={100} className={style.Image} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <h3 className={style.textColorParent}>Unique Technologies</h3>
                                            <p className={style.textColor}>Explore our unique technologies designed to propel your business forward. With cutting-edge innovations and tailored solutions, we empower you to stand out in today's competitive landscape. Discover more now.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section3">
                    <div className={style.Sec3Child}>
                        <div className={style.SectionImage}>
                            <div className="composition">
                                <Image src={AI} alt="AI technology example 1" className="composition__photo composition__photo--p1" />
                                <Image src={AI2} alt="AI technology example 2" className="composition__photo composition__photo--p2" />
                                <Image src={AI3} alt="AI technology example 3" className="composition__photo composition__photo--p3" />
                            </div>
                        </div>
                        <div className={style.TextBoxOfHome}>
                            <p>
                                Explore the power of AI tools, developed with ingenuity, brilliance, quality, and accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeView;
