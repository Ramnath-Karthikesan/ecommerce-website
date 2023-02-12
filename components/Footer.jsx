import React from 'react'
import { AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'> 
      <p>2023 Atto Headphone All rights reserved</p>
      <p>Developed by Ramnath 👨‍💻</p>
      <p className='icons'>
        <a href='https://www.linkedin.com/in/ramnath-karthikesan-ba44b31ab/' target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/Ramnath-Karthikesan" target="_blank"><AiOutlineGithub /></a>
      </p>
    </div>
  )
}

export default Footer