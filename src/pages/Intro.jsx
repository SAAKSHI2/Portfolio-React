import "../css/intro.css";
import Typewriter from "typewriter-effect";

const Intro=()=>{

    const handleClick=()=>{

        window.open("https://drive.google.com/file/d/1_bJpIL9IHTvP_0FrRAUzdcyBEI5t7esJ/view?usp=sharing","_blank");

    }

    return (
        <div className="intro">

            <div className="inside-intro">
            <div className="i-left">
                <div className="i-left-name">
                     <span>Hi There!</span>
                     <span>I'm <span id="name">Saakshi</span></span>
                     <span> 
                         <Typewriter
                            options={{
                            strings: ['Software Developer', 'Full Stack Developer'],
                            autoStart: true,
                            loop: true,
                            delay: 150, // Delay between typing each character
                            }}
                         />
                     </span>
                     <button onClick={handleClick}>Download Resume</button>
                </div>

              

            </div>
            <div className="i-right">
                <img src="/images/person.png" alt="userImg" />

            </div>


            </div>
           
        </div>

    )
}
export default Intro;