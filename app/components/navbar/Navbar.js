"use client"
import React from 'react'
import style from './Navbar.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import user from '../../assets/user.svg'
import logo from '../../assets/Mioneer.svg'
const Navbar = () => {
  const router = useRouter()
  return (
    <div className={style.onav}>
    {/* // <div className={style.logo}>
    // <Image className={style.logoSoluyionAI} src={logo} ></Image>
    //    </div>
    //      <div className={style.menu}>
    //           <ul >
    //              <li onClick={()=>router.push('/')}>Home</li>
    //               <Link href='/About'><li>About</li></Link>
    //               <Link href='/Contact'><li>Contact</li></Link>
    //               <Link href='/service'><li>Services</li></Link>
                
    //           </ul>
    //           </div> */}
              <nav class="nav">
  <input type="checkbox" id="nav-check"></input>
  <div class="nav-header">
    <div class="nav-title">
    <div className={style.logo}>
     <Image className={style.logoSoluyionAI} src={logo} ></Image>
        </div>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <ul className="nav-list">
    <li><Link href='/'>Home</Link></li>
    <li> <Link href='/About'>About</Link></li>
    <li><Link href='/service'>Services</Link></li>  
    {/* <li><Link href='/Contact'>Contact</Link></li>  */}
  </ul>
</nav>
      
    </div>
  )
}

export default Navbar
