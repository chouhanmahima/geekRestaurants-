import React from 'react'
import './Footer.css';
import FooterImg from './../assets/images/footer-img.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-main'>
        <img className="foot-img" src={FooterImg} alt='Nav-Logo'></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
        <div className='list-1'>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className='social-icons'>
          <FaFacebook className='icon-style'></FaFacebook>
          <FaInstagram className='icon-style'></FaInstagram>
          <FaTwitter className='icon-style'></FaTwitter>
          <FaGithub className='icon-style'></FaGithub>
          <FaDribbble className='icon-style'></FaDribbble>
        </div>
    </div>
  )
}

export default Footer