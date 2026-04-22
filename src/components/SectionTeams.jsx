import Card from './Card.jsx';

const Team = () => {
    return (
        <div id="team-section">
            <div className="container">
                <div className="section-content">
                    <h2 className="section-title">Job List</h2>
                    <div className="section-cards">
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        <Card username="Abdul Wahid" phone="tel:0123456789" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team;