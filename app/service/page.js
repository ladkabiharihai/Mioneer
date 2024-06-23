'use client';
import React, { useRef } from 'react'
import servicesSection from '../components/Services/servicesSection'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import undrw from '../assets/undrawrobot.svg'
const page = () => {
  const router = useRouter();
  const targetSectionRef = useRef(null);
  const targetanchorRef = useRef(null);
  // Function to scroll to the target section
  const scrollToTargetSection = () => {
    if (targetSectionRef.current) {
      window.scrollTo({
        top: targetSectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }

  };
  const scrollToTargetanchor = () => {
    if (targetanchorRef.current) {
      window.scrollTo({
        top: targetanchorRef.current.offsetTop,
        behavior: 'smooth'
      });
    }

  }

  return (
    <div className='allSection'>
      <section className="services">
        <div className='textAreaCenter'>
          <h1 className='sectionH1'>Mioneer Services</h1>
          <p className='sectionP'>Generative AI Implementation</p>
          <p className='sectionP1'>Plan, build and implement your generative AI projects to meet your business objectives.</p>
          <button className='sectionButton' onClick={scrollToTargetSection}>Learn More</button>
        </div>


      </section>
      <section className='section1-1' >
        <div className='ImageContainerwithtext'>
          <div className='sectionImageforPara'>
            <Image src={undrw} className='imageParagraph' ></Image>
          </div>
          <div className='sectionforParagraph'>
            <p>At Mioneer, we offer a comprehensive range of AI solutions designed to address the diverse needs of businesses across industries. Our expertise spans a wide range of applications, from customer service automation to unbiased AI HR recruitment. Let's explore how our AI solutions can help your business thrive:
            </p>
            <button style={{ marginTop: '30px' }} className='buttonsection1-1' onClick={scrollToTargetanchor} >Our AI Solutions</button>
          </div>
        </div>


      </section>
      <section className='section5Fr' ref={targetSectionRef}>
        <div className='section5Text'>
          <h1 className='section5H1' onClick={() => router.push('/Aicustomer')}>AI Customer Service Solutions</h1>
          <p className='section5P'>In today's fast-paced digital landscape, providing exceptional customer service is more important than ever. With our AI-driven customer service solutions, businesses can deliver personalized, efficient, and seamless customer experiences that drive satisfaction and loyalty.

            Our AI customer service solutions leverage cutting-edge technologies such as natural language processing (NLP), sentiment analysis, and chatbots to automate routine customer interactions, resolve inquiries in real-time, and provide 24/7 support across multiple channels.</p>
        </div>
        <button style={{ marginTop: '30px' }} className='buttonsection1-1' onClick={()=>router.push('/Aicustomer')}> read more</button>
      </section>

      <section className="services2">
        <div className='sectionImage'>
          <div className='cardServicesSectioncolor1'>
            <div className='cardServices1'>
              <h1 className='cardServicesH'>Chatbot Integration</h1>
              <p> Our AI-powered chatbots are capable of handling a wide range of customer inquiries, from product questions to troubleshooting issues, with speed and accuracy.</p>
            </div>
            <div className='cardServices1'>
              <h1 className='cardServicesH'>Personalization</h1>
              <p>Through advanced NLP algorithms, our AI solutions can analyze customer interactions to understand preferences, anticipate needs, and deliver personalized recommendations.</p>
            </div>
            <div className='cardServices1'>
              <h1 className='cardServicesH'>Omni-channel Support</h1>
              <p>Whether it's through web chat, social media, email, or voice, our AI customer service solutions provide seamless support across all channels, ensuring a consistent and cohesive customer experience.</p>
            </div>
            <div className='cardServices1'>
              <h1 className='cardServicesH'>Efficiency and Scalability</h1>
              <p> By automating routine tasks and inquiries, our AI solutions free up human agents to focus on more complex issues, increasing efficiency and scalability for businesses of all sizes.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='section5Fr' ref={targetSectionRef}>
        <div className='section5Text'>
          <h1 className='section5H1' onClick={() => router.push('/HRSolution')}>HR Solution</h1>
          <p className='section5P'>In today's fast-paced digital landscape, providing exceptional customer service is more important than ever. With our AI-driven customer service solutions, businesses can deliver personalized, efficient, and seamless customer experiences that drive satisfaction and loyalty.

            Our AI customer service solutions leverage cutting-edge technologies such as natural language processing (NLP), sentiment analysis, and chatbots to automate routine customer interactions, resolve inquiries in real-time, and provide 24/7 support across multiple channels.</p>
        </div>
        <button style={{ marginTop: '30px' }} className='buttonsection1-1' onClick={()=>router.push('/HRSolution')  }> read more</button>
      </section>

      <section className='sectionservices3'>
        <div className='imagesectionAndText'>
          <div className='imgSection'>
            <div className='imgSection1'>
            </div>
          </div>
          <div className='textSection'>
            <h1 className='textSectionH1'>Take the next steps</h1>
            <p className='textSectionP'>Our AI customer service and unbiased AI HR recruitment solutions, Mioneer offers a range of bespoke AI solutions tailored to the specific needs and objectives of our clients. Whether you're looking to optimize supply chain management, enhance marketing campaigns, or improve product recommendations, our team of experts can develop custom AI solutions to address your unique challenges and opportunities.</p>
            <br></br>

            <button className='textSectionButton' onClick={() => router.push('/Contact')}>Contact us</button>

          </div>
        </div>

      </section>
      <section className='section4' ref={targetanchorRef}>
        <div className='sectionImage'>
          <div className='cardServicesSectioncolor'>
            <div className='cardServices'>
              <h1 className='cardServicesH'>Fraud Detection</h1>
              <p> Protect your business from fraud and financial loss with AI-driven fraud detection solutions. Our AI algorithms analyze transaction data, user behavior patterns, and anomaly detection techniques to identify suspicious activity and flag potential fraud in real-time, helping businesses mitigate risk and safeguard their assets.</p>
            </div>
            <div className='cardServices'>
              <h1 className='cardServicesH'>Healthcare Diagnostics</h1>
              <p>Improve patient outcomes and healthcare delivery with AI-driven diagnostic solutions. From medical imaging analysis and disease diagnosis to personalized treatment recommendations and patient monitoring, our AI algorithms can assist healthcare professionals in making faster, more accurate diagnoses and treatment decisions, ultimately saving lives and improving quality of care.</p>
            </div>
            <div className='cardServices'>
              <h1 className='cardServicesH'>Supply Chain Optimization</h1>
              <p>Streamline inventory management, logistics planning, and demand forecasting with AI-powered supply chain optimization solutions. By analyzing historical data, market trends, and external factors, our AI algorithms can optimize supply chain processes, reduce costs, and improve efficiency.</p>
            </div>
            <div className='cardServices'>
              <h1 className='cardServicesH'>Marketing Personalization</h1>
              <p> Enhance marketing campaigns and customer engagement with AI-driven personalization solutions. From targeted advertisements and email campaigns to personalized product recommendations and content creation, our AI algorithms can help businesses deliver relevant and timely messages to their target audience, driving conversion and retention.</p>
            </div>
            <div className='cardServices'>
              <h1 className='cardServicesH'>Predictive Maintenance</h1>
              <p>Minimize downtime and maximize asset performance with AI-powered predictive maintenance solutions. By analyzing sensor data, equipment health metrics, and historical maintenance records, our AI algorithms can identify potential equipment failures before they occur, allowing businesses to proactively schedule maintenance and avoid costly disruptions.</p>
            </div>


          </div>
        </div>

      </section>
      <section className='section5For'>
        <div className='section5Text'>
          <h1 className='section5H1'>AI Services</h1>
          <p className='section5P'>No matter the industry or application, Mioneer is dedicated to developing innovative AI solutions that drive real results for our clients. Contact us today to discuss your specific needs and learn how our bespoke AI solutions can help you achieve your business objectives. With Mioneer, the possibilities are endless. Let's transform your vision into reality with the power of AI.</p>
        </div>
      </section>




    </div>
  )
}

export default page
