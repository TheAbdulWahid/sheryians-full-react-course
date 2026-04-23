import { Bookmark } from "lucide-react";
const Card = (props) => {
    return (
        <div id="card">
            <div className="card-top">
                <div className="top-left">
                    <div className="org-icon">
                        <img src={props.logo} alt="Organization Icon" />
                    </div>
                </div>
                <div className="top-right">
                    <div className="bookmark">
                        <span>Save</span>
                        <Bookmark color="black"/>
                    </div>
                </div>
            </div>
            <div className="card-middle">
                <div className="org-info">
                    <h3 className="org-title">{props.company} <span className="time-elapse">{props.posted}</span></h3>
                    
                </div>
                <h2 className="job-title">{props.title}</h2>
                <div className="skills-container">
                    {props.level.map((level)=>{
                        return <span className="skill">{level}</span>
                    })}
                </div>
            </div>
            <div className="card-bottom">
                <div className="bottom-left">
                    <h3 className="salary">{props.salary}</h3>
                    <span className="job-location">{props.location}</span>
                </div>
                <div className="bottom-right">
                    <a href="#" className="apply-btn">Apply Now</a>
                </div>
            </div>
        </div>
    );
}

export default Card;