import React from 'react'

// import { SiJoomla } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
import { FaBars } from "react-icons/fa";




const header = () => {
  return (
    <div className='Header'>
        <div className="container">
            <div className="Header_top">
                <div className="Header_top_icon_gpa">
                    <p className="Header_top_text">Bilmer</p>
                    <FaBars className='Header_top_icon'/>
                </div>
                <ul className="Header_list">
                    <li className="Header_item active">
                        <a href="#!" className="Header_link">home</a>
                        <span className="Header_link_span"></span>
                    </li>
                    <li className="Header_item">
                        <a href="#!" className="Header_link">about&nbsp;me</a>
                        <span className="Header_link_span"></span>
                    </li>
                    <li className="Header_item">
                        <a href="#!" className="Header_link">services</a>
                        <span className="Header_link_span"></span>
                    </li>
                    <li className="Header_item">
                        <a href="#!" className="Header_link">portfolio</a>
                        <span className="Header_link_span"></span>
                    </li>
                    <li className="Header_item">
                        <a href="#!" className="Header_link">blog</a>
                        <span className="Header_link_span"></span>
                    </li>
                    <li className="Header_item">
                        <a href="#!" className="Header_link">contact</a>
                        <span className="Header_link_span"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default header
