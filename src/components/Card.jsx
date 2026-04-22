import { Bookmark } from "lucide-react";
const Card = () => {
    return (
        <div id="card">
            <div className="card-top">
                <div className="top-left">
                    <div className="org-icon">
                        <img src="https://i.pinimg.com/736x/29/f6/41/29f641b507ccb60bb7a62a830b988736.jpg" alt="Organization Icon" />
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
                    <h3 className="org-title">Amazon</h3>
                    <span className="time-elapse">5 days ago</span>
                </div>
                <h2 className="job-title">Senior UI/UX Designer</h2>
                <div className="skills-container">
                    <span className="skill">Part-Time</span>
                    <span className="skill">Senior Level</span>
                    <span className="skill">Senior Level</span>
                    <span className="skill">Senior Level</span>
                </div>
            </div>
            <div className="card-bottom">
                <div className="bottom-left">
                    <h3 className="salary">$120/hr</h3>
                    <span className="job-location">Mumbai, India</span>
                </div>
                <div className="bottom-right">
                    <a href="#" className="apply-btn">Apply Now</a>
                </div>
            </div>
        </div>
    );
}

export default Card;