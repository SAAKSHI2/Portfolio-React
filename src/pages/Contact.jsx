import { useState } from "react";
import "../css/contact.css";
const Contact = ()=>{
    const [contact,setContact] = useState({name:"",email:"",phoneNumber:"",description:"",message:""})

    const sendMail = ()=>{
          
        const body = `Name:${contact.name}%20%0D%0AEmail:${contact.email}%20%0D%0APhone Number:${contact.phoneNumber}%20%0D%0ADescription:${contact.description}%20%0D%0AMessage:${contact.message}`;
        const mailtoLink = `mailto:saakshibhandari27@gamil.com?subject=${encodeURIComponent(
          contact.description
        )}&body=${(body)}`;



         window.location.href = mailtoLink;
    }

    const handleClick=(link)=>{
        window.open(link, '_blank');
    }


    const handleChange=(e)=>{
        setContact((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    return (
        <div className="contact">
            <div className="contact-child">
                <div className="Get-In-Touch">
                    <p>Get In Touch</p>
                    
                </div>
            </div>

            <div className="fillForm">
                <form>
                    <input type="text" placeholder="name" name="name" onChange={handleChange}/>
                    <input type="text" placeholder="email" name="email" onChange={handleChange}/>
                    <input type="text" placeholder="phone number" name="phoneNumber" onChange={handleChange}/>
                    <input type="text" placeholder="Description" name="description" onChange={handleChange}/>
                    <textarea rows={10} cols={60} placeholder="write a message...." name="message" onChange={handleChange}/>
                    
                </form>
                <button className="sendMsg" onClick={sendMail}>Send</button>

            </div>

            <div className="social-media" >
                <div onClick={()=>handleClick("https://github.com/SAAKSHI2")}>
                    <p>Github</p>
                    <img src="/images/socialMedia/github.png" alt="github" />
                </div>
                <div onClick={()=>handleClick("https://www.linkedin.com/in/saakshi-b6918720b/")}>
                    <p>LinkedIn</p>
                    <img src="/images/socialMedia/linkedin.png" alt="linkedin" />
                </div>
                <div onClick={()=>handleClick("https://leetcode.com/Saakshi_27/")}>
                    <p>Leetcode</p>
                    <img src="/images/socialMedia/leetcode.png" alt="leetcode" />
                </div>
                  
            </div> 

        </div>
    )
}
export default Contact;