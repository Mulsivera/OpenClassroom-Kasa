import { Link } from "react-router-dom";

function Card({ locationCover , locationTitle }) {
    return (
        <Link to={`/location/${locationTitle}`}>
        <div style={{ background: `url(${locationCover})`,
        }} className="locationList--card">
        <p className="locationList--title">{locationTitle}</p>
        </div>
        </Link>
    )
}

export default Card
