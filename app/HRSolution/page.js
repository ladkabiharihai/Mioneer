'use client'
import React from 'react'
import style from '../Style/HrSolution.module.css'
import Image from 'next/image'
import hrImage from '../assets/hrBackground.svg'
import pp from '../assets/pp.png'
import robot from '../assets/a.jpg'

const page = () => {
    return (
        <div>
            <section className={style.section1hrsolution}>
                <div className={style.section12}>
                    <div className={style.textSection}>
                        <h1>The Ultimate AI HR Solution</h1>
                        <h3>Streamline Your Recruitment Process with Samarth:</h3>
                        <p>Welcome to Samarth, your all-in-one AI HR recruitment solution designed to revolutionize the way you hire top talent. Say goodbye to tedious resume screening and manual candidate evaluations. With Samarth, you can effortlessly source, filter, interview, and recommend candidates from popular job boards, including Indeed and LinkedIn. Let's explore how Samarth can streamline your recruitment process and help you build a winning team.</p>
                    </div>
                    <div className={style.imageSection}>
                        <Image src={hrImage} className={style.imageHr1}></Image>
                    </div>
                </div>
            </section>
            <section className={style.section2hrsolution}>
                <div className={style.textareaofsection2}>
                    <h1>The Power of Samarth</h1>
                    <p>Samarth harnesses the latest advancements in artificial intelligence to automate and optimize every aspect of the recruitment process. From sourcing candidates to conducting interviews, Samarth's intelligent algorithms ensure that you find the best talent quickly and efficiently. With Samarth by your side, you can save time, reduce bias, and make data-driven hiring decisions with confidence.</p>
                </div>
                <h1 className={style.h1}>How Samarth Works</h1>
                <div className={style.imageSectionof}>
                    <div className={style.cardbackground}>
                        <div>
                            <Image src={pp} width={200} height={200} className={style.image}></Image>
                        </div>
                        <div className={style.textbox}>
                            <h3>Resume Collation</h3>
                            <p>Samarth scans job boards and collects resumes based on your specified criteria, including location, experience, skills, and more.</p>
                        </div>
                    </div>
                    <div className={style.cardbackground}>
                        <div className={style.image1}></div>
                        <div className={style.textbox}>
                            <h3>Automated Screening</h3>
                            <p>Samarth evaluates resumes against predefined job requirements, filtering out unqualified candidates and flagging top matches for further review.</p>
                        </div>
                    </div>
                    <div className={style.cardbackground}>
                        <div>
                            <Image src={robot} width={200} height={200} className={style.image}></Image>
                        </div>
                        <div className={style.textbox}>
                            <h3>Candidate Recommendations</h3>
                            <p>After analyzing interview performance and other factors, Samarth generates detailed candidate reports and recommendations for your consideration.</p>
                        </div>
                    </div>
                    <div className={style.cardbackground}>
                        <div className={style.image4}></div>
                        <div className={style.textbox}>
                            <h3>AI-Powered Interviews</h3>
                            <p>Samarth conducts virtual interviews with shortlisted candidates, asking customized questions and assessing their responses in real-time.</p>
                        </div>
                    </div>
                </div>
                <h1 className={style.h1}>Benefits of Using Samarth</h1>
                <div className='sectionImage'>
                    <div className='cardServicesSectioncolor1'>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Time Savings</h1>
                            <p>By automating repetitive tasks and streamlining the recruitment process, Samarth helps you save time and focus on high-value activities.</p>
                        </div>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Improved Efficiency</h1>
                            <p>With Samarth's AI-powered capabilities, you can quickly identify and evaluate candidates, reducing time-to-hire and improving overall efficiency.</p>
                        </div>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Enhanced Candidate Experience</h1>
                            <p>Samarth provides a seamless and personalized experience for candidates, making the recruitment process more engaging and transparent.</p>
                        </div>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Data-Driven Decisions</h1>
                            <p>By leveraging data and analytics, Samarth helps you make informed hiring decisions based on objective criteria and performance metrics.</p>
                        </div>
                    </div>
                </div>
                <h1 className={style.h1}>Coming Soon Features</h1>
                <div className='sectionImage'>
                    <div className='cardServicesSectioncolor1'>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>AI-based Video Interview</h1>
                            <p>Eye movement, body language, facial expression, and voice tracking and analysis to provide deeper insights into candidate behavior and suitability.</p>
                        </div>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Automatic Profile Data Submission</h1>
                            <p>Automatically fill out candidate profiles based on uploaded documents, reducing manual data entry and errors.</p>
                        </div>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Background Verification</h1>
                            <p>Seamless integration for background checks, ensuring that all candidates meet your organization's standards before proceeding.</p>
                        </div>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Complete HRMS</h1>
                            <p>End-to-end Human Resource Management System to handle all HR processes from recruitment to retirement.</p>
                        </div>
                        <div className='cardServices1'>
                            <h1 className='cardServicesH'>Payroll</h1>
                            <p>Integrated payroll system to manage employee salaries, deductions, and benefits efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className={style.conclusionSection}>
                    <div className={style.box}>
                        <h1 className={style.textheading}>Conclusion</h1>
                        <p>Samarth Prime is on the way, which will include AI-based Video Interview, Automatic Profile Data Submission, Background Verification, Complete HRMS, and Payroll. Experience unparalleled efficiency, scalability, and customer satisfaction as you embrace AI-driven support solutions. Elevate your customer service game with Mioneer and Samarth Prime today.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
