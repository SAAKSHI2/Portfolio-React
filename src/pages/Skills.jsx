import "../css/skills.css";
import ImageShowingSkillSet from "../components/ImageShowingSkillSet";
import SkillSet from "../components/SkillSet";

const Skills=()=>{
    return (
        <div className="skills" >
            <div className="all">
                
               <SkillSet/>
               <ImageShowingSkillSet/>

                
            </div>
        </div>
    )
}
export default Skills;