import React from "react";

function Recommendations () {
    return (
        <div className="refs-section">
            <h1>Recommendations</h1>
            <div className="refs-cards">
                <div className="refs">
                    <p>"Chucklewood is a dedicated team player who consistently goes above and beyond to support his colleagues. His positive attitude and adaptability make him a valuable asset to any team. He consistently delivers results while maintaining a fun and collaborative work environment."</p>
                </div>
                <div className="refs">
                    <p>"His commitment to excellence is evident in the high-quality work he produces. His meticulous attention to detail and extensive knowledge ensure that projects are completed to the highest standards. As I experienced firsthand when he developed my website, he delivers exceptional results in a timely manner."</p>
                </div>
                <div className="refs">
                    <p>"Chucklewood is a highly motivated individual who is eager to learn and grow. He is not afraid to take on new challenges and is always seeking opportunities to expand his knowledge. His inquisitive nature and ability to adapt quickly make him a valuable asset in any role."</p>
                </div>
            </div>
            <div className="add-refs">
                <h5>Leave a Recommendation</h5>
                <form className="add">
                    <input type="text" className="jina" placeholder="Name(Optional)"></input>
                    <input type="textarea" className="ms" placeholder="Message"></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Recommendations;