'use client'
import React, { useRef } from 'react'
import style from '../Style/Card.module.css'
import Image from 'next/image'
import AI5 from '../assets/Ai6.jpg'
import AI10 from '../assets/ai10.jpg'
import { useRouter } from 'next/navigation'
const page = () => {

const router = useRouter();
    const data = [
        { id: 1, title: 'Mioneer' },
        { id: 2, title: 'Mioneer' },
        { id: 3, title: 'Mioneer' },
        { id: 4, title: 'Mioneer' },
        { id: 5, title: 'Mioneer' },
        { id: 6, title: 'Mioneer' },
        { id: 7, title: 'Mioneer' },
    ];
    const targetSectionRef = useRef(null);

    // Function to scroll to the target section
    const scrollToTargetSection = () => {
        if (targetSectionRef.current) {
            window.scrollTo({
                top: targetSectionRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div >
            <section className="aboutus">
                <div className='AreaCenter'>    
                    <h1 className='sectionH1' style={{color:"#000"}}>About Mioneer</h1>
                    <p className='sectionP' style={{color:"#000"}}>Empowering Businesses with Expert AI Solution</p>
                    <p className='sectionP1' style={{color:"#000"}}>Welcome to Mioneer, your premier partner for cutting-edge artificial intelligence (AI) solutions. With a collective of over 100 years of experience in AI, our team of experts is dedicated to helping businesses harness the power of AI to drive innovation, efficiency, and growth.</p>
                    <button className='sectionButton'  onClick={scrollToTargetSection}>Learn More</button>
                </div>


            </section>
             <section className="about_section1">
                <div className={style.cardss}>
                    <div className={style.container}>
                        <div className={style.box}>
                            <span></span>
                            <div className={style.content1}>
                                <h1>Our Mission</h1>
                                <p> At Mioneer, our mission is simple: to empower businesses with the transformative capabilities of AI. We believe that AI has the potential to revolutionize industries, streamline operations, and enhance customer experiences. Our goal is to provide businesses of all sizes and industries with the tools, expertise, and support they need to unlock the full potential of AI and stay ahead of the competition.</p>
                            </div>
                        </div>
                        <div className={style.box}>
                            <span></span>
                            <div className={style.content1}>
                                <h1>Our Team</h1>
                                <p>Our team is comprised of seasoned AI professionals with diverse backgrounds and expertise in machine learning, natural language processing, computer vision, and more. With a combined experience of over 100 years in AI, we have the knowledge, skills, and resources to tackle even the most complex challenges</p>
                               
                            </div>
                        </div>
                        <div className={style.box}>
                            <span></span>
                            <div className={style.content1}>
                                <h1>Our Approach</h1>
                                <p>At Mioneer, we take a personalized approach to every project we undertake. We understand that every business is unique, with its own set of challenges, objectives, and goals. That's why we take the time to listen to our clients, understand their needs, and tailor our solutions to meet their specific requirements.</p>
                               
                            </div>
                        </div>
                        
                    </div>

                </div>

            </section>

          


           
            <section className='aboutusSection' ref={targetSectionRef}>
                <div className='imagesectionAndText'>
                    <div className='imgSection2'>
                        <div className='imgSection1'>
                        </div>
                    </div>
                    <div className='textSection'>
                        <h1 className='textSectionH1'>Our Commitment to Excellence</h1>
                        <p className='textSectionP'>At Mioneer, we are committed to excellence in everything we do. We pride ourselves on delivering high-quality, innovative solutions that drive real results for our clients. We are dedicated to building long-term partnerships based on trust, transparency, and mutual success.</p>
                        <br></br>
                        <button className='textSectionButton' onClick={() => router.push('/Contact')}>Contact us</button>
                    </div>
                </div>
            </section>
            <section className='sectionForaboutpage'>
                <div className='section5Text'>
                    <h1 className='section6H1'>Affordable AI Solutions for Small and Medium-Sized Businesses | Mioneer</h1>
                    <p className='section5P'>Discover how Mioneer is revolutionizing the landscape of AI solutions for small and medium-sized enterprises (SMEs). Our commitment is to make advanced AI accessible and affordable, empowering businesses like yours to thrive in today's competitive market. Learn more about our tailored approach to AI implementation and how it can drive growth for your SME.</p>
                </div>
            </section>
            <div className='sectionImage'>
          <div className='cardServicesSectioncolor1'>
            <div className='cardServices1'>
              <h1 className='cardServicesH'>Accessibility</h1>
              <p className='p'> Mioneer's mission is to break down barriers to AI adoption for SMEs. Our affordable AI solutions are designed specifically for businesses with modest budgets, ensuring that even companies with limited resources can leverage the power of artificial intelligence to streamline operations, boost productivity, and enhance competitiveness.</p>
            </div>
            <div className='cardServices1'>
              <h1 className='cardServicesH'>Tailored Solutions</h1>
              <p className='p'>We understand that every SME has unique needs and challenges. That's why we offer customized AI solutions that are tailored to fit your specific requirements and objectives. Whether you're looking to automate repetitive tasks, optimize processes, or gain valuable insights from your data, our team will work closely with you to develop a solution that meets your needs and delivers measurable results</p>
            </div>
            <div className='cardServices1'>
              <h1 className='cardServicesH'>Scalability</h1>
              <p className='p'>As your business grows, so do your AI needs. Our scalable solutions are designed to grow with your business, ensuring that you can continue to benefit from the power of AI as you expand and evolve. Whether you're a small startup or a growing SME, Mioneer has the tools and expertise to support your journey every step of the way.</p>
            </div>
            <div className='cardServices1'>
              <h1 className='cardServicesH'> Expert Support</h1>
              <p className='p'>Implementing AI can be daunting, especially for small and medium-sized businesses with limited technical expertise. That's why Mioneer provides comprehensive support and guidance throughout the implementation process. From initial consultation to ongoing support and maintenance, our team of experts is here to help you succeed with AI.</p>
            </div>
          </div>
          
        </div>
        <section className='sectionForaboutpage'>
                <div className='section5Text'>
                    <h1 className='section6H1'>Mission | Mioneer</h1>
                    <p className='section5P'>At Mioneer, our mission is to empower small and medium-sized businesses with affordable, accessible, and effective AI solutions. By democratizing access to advanced AI technology, we aim to level the playing field and help SMEs compete and thrive in today's digital economy. Whether you're looking to automate processes, improve decision-making, or enhance customer experiences, Mioneer has the expertise and resources to help you achieve your goals. Contact us today to learn more about how our AI solutions can transform your business.</p>
                </div>
            </section>
            <section className='sectionForaboutpage'>
                <div className='section5Text'>
                    <h1 className='section5H1'>Get in Touch</h1>
                    <p className='section5P'>Ready to take your business to the next level with AI? Contact us today to learn more about how Mioneer can help you achieve your goals. With Mioneer, the possibilities are endless. Let's embark on this AI journey together.</p>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='textSectionButton' onClick={() => router.push('/Contact')}>Contact us</button>
                    </div>
                </div>
            </section> 


          

        </div>
    )
}

export default page
