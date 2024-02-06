import CompanyDetails from "../components/CompanyDetails";
import "../css/experience.css";
const Experience=()=>{
    return (
        <div className="experience">
             <CompanyDetails 
             title="Software Developer Intern"
             duration = "Jan,2023 - June, 2023"
             location= "Bangaluru, India"
             logo = "/images/experience/Amazon.png"
             skills = "AWS , Amazon S3 , Amazon SQS, Lambda, Firehose, CloudWatchLogs, CDK Resources, Java, Full CD pipeline, Cucumber"
             />
            <CompanyDetails 
             title="Research Intern"
             duration = "Jan,2023 - June, 2023"
             location= "Remote"
             logo = "/images/experience/SamsungPrism.png"
             skills="Researching about Matter specification"
             />

            
        </div>
        
    )
}
export default Experience;