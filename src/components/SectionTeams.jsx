import Card from './Card.jsx';

const Team = () => {
    const jobData = [
        {
            company: "Amazon",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            posted: "5 days ago",
            title: "Senior UI/UX Designer",
            type: "Part-Time",
            level: ["Senior Level", "Lead Level", "Manager", "Expert", "Principal"],
            salary: "$120/hr",
            location: "Mumbai, India"
        },
        {
            company: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            posted: "2 days ago",
            title: "Product Designer",
            type: "Full-Time",
            level: ["Mid Level", "Senior Level", "Lead Level", "Manager", "Expert"],
            salary: "$95/hr",
            location: "Bangalore, India"
        },
        {
            company: "Meta",
            logo: "https://pngimg.com/uploads/meta/meta_PNG4.png",
            posted: "1 week ago",
            title: "UX Researcher",
            type: "Contract",
            level: ["Senior Level", "Lead Level", "Principal", "Expert", "Manager"],
            salary: "$110/hr",
            location: "Remote"
        },
        {
            company: "Apple",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            posted: "3 days ago",
            title: "UI Designer",
            type: "Full-Time",
            level: ["Junior Level", "Mid Level", "Senior Level", "Lead Level", "Expert"],
            salary: "$80/hr",
            location: "Hyderabad, India"
        },
        {
            company: "Netflix",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            posted: "6 days ago",
            title: "Senior Product Designer",
            type: "Full-Time",
            level: ["Senior Level", "Lead Level", "Principal", "Manager", "Expert"],
            salary: "$130/hr",
            location: "Remote"
        },
        {
            company: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            posted: "4 days ago",
            title: "Interaction Designer",
            type: "Part-Time",
            level: ["Mid Level", "Senior Level", "Lead Level", "Manager", "Expert"],
            salary: "$100/hr",
            location: "Delhi, India"
        },
        {
            company: "Adobe",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
            posted: "1 day ago",
            title: "UX Designer",
            type: "Full-Time",
            level: ["Mid Level", "Senior Level", "Lead Level", "Principal", "Expert"],
            salary: "$105/hr",
            location: "Remote"
        },
        {
            company: "Spotify",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
            posted: "2 weeks ago",
            title: "Product Designer",
            type: "Contract",
            level: ["Senior Level", "Lead Level", "Manager", "Principal", "Expert"],
            salary: "$115/hr",
            location: "Stockholm, Sweden"
        },
        {
            company: "Airbnb",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
            posted: "3 days ago",
            title: "UX/UI Designer",
            type: "Full-Time",
            level: ["Senior Level", "Lead Level", "Principal", "Manager", "Expert"],
            salary: "$125/hr",
            location: "Remote"
        },
        {
            company: "Uber",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
            posted: "5 days ago",
            title: "Visual Designer",
            type: "Part-Time",
            level: ["Junior Level", "Mid Level", "Senior Level", "Lead Level", "Expert"],
            salary: "$85/hr",
            location: "San Francisco, USA"
        }
    ];
    return (
        <div id="team-section">
            <div className="container">
                <div className="section-content">
                    <h2 className="section-title">Job List</h2>
                    <div className="section-cards">
                        {jobData.map((props,index) => {
                            return <Card key={index} logo={props.logo} company={props.company} posted={props.posted} title={props.title} type={props.type} level={props.level} salary={props.salary} location={props.location} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team;