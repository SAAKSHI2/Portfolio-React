import "../css/experience.css";

const CompanyDetails=({logo,duration,title,location,skills})=>{
    return (
        <div className="companyDetails">
             <div className="details">
                <div className="logo">
                 <img src={logo} alt="companyLogo" />
                </div>
                <div className="about">
                    <p style={{fontWeight:"bold"}}>{title}</p>
                    <p style={{color:"rgb(96, 95, 95)"}}>{duration}</p>
                    <p style={{color:"rgb(96, 95, 95)"}}>{location}</p>
                    <p >Worked on : <span style={{color:"rgb(244, 170, 32)"}}>{skills}</span></p>

                </div>
                
                
             </div>
            
        </div>
        
    )
}
export default CompanyDetails;