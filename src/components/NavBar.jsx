 import { useState } from "react";
import "../css/navbar.css";
import ListIcon from '@mui/icons-material/List';
 import { Link, animateScroll as scroll } from 'react-scroll';

 const NavBar=()=>{

    const [show,setShow]= useState(false)
     return(
        <div className="navbar">
            <div className="left-navbar">
                {/* <p>Saakshi</p> */}
                {/* <span>toggle</span> */}
                <img src="/images/about.png" alt="profile_pic" />


            </div>
            <div className="right-navbar">
            <div className="listIcon">
                <ListIcon onClick={()=>setShow(!show)} style={{height:"5vh",width:"5vw"}}/>
                </div>
                <div className="right-navbar-list">
                
                <ul>
                    <li><Link to="intro" smooth={true} duration={80}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={80}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={80}>Skills</Link></li>
                    <li><Link to="project" smooth={true} duration={80}>Project</Link></li>
                    <li><Link to="experience" smooth={true} duration={80}>Experience</Link></li>
                    <li><Link to="contact" smooth={true} duration={80}>Contact</Link></li>
                </ul>

                </div>
                


               <div className="right-navbar-mobile" >

                    <ul style={{display:show?"flex":"none"}}>
                            <li><Link to="intro" smooth={true} duration={80}>Home</Link></li>
                            <li><Link to="about" smooth={true} duration={80}>About</Link></li>
                            <li><Link to="skills" smooth={true} duration={80}>Skills</Link></li>
                            <li><Link to="project" smooth={true} duration={80}>Project</Link></li>
                            <li><Link to="experience" smooth={true} duration={80}>Experience</Link></li>
                            <li><Link to="contact" smooth={true} duration={80}>Contact</Link></li>
                    </ul>  
                    

               </div>
            </div>
 
        </div>

    )
 }
 export default NavBar;