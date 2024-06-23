import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/Mioneer.png'
const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">
                    {/* <Image src={Logo} alt='What we do' width={100} height={100}  className='IMageLOGO' /> */}
                    <h2 style={{color:'#fff'}}>Mioneer<span>

                    </span></h2>

                    <p class="footer-links">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </p>

                    <p class="footer-company-name">Mioneer  © 2024</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>contact@Mioneer.in</span><span>+917620691360</span>Haryana In</p>
                    </div>

                    {/* <div>
                        <i class="fa fa-phone"></i>
                        <p>+1 (470) 699-8973</p>
                    </div> */}

                    <div>
                        <i class="fa fa-envelope"></i>

                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        Mioneer Private Limited thrives on AI technology, driving innovation across industries. With a focus on excellence, it delivers cutting-edge solutions for business growth and operational efficiency.   
                    </p>

                    <div class="footer-icons">


                    </div>

                </div>

            </footer>


        </div>
    )
}

export default Footer
