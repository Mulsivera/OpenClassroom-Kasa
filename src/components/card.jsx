// Imports des bibliothèques externes
import { Link } from "react-router-dom";

// Imports des styles
import "../Styles/Card.scss"

function Card({ locationCover , locationTitle }) {
    return (
        <Link to={`/location/${locationTitle}`}>
            <div style={{ background: `url(${locationCover})`,}} className="[ Card ] [ flex-column ] [ justify-end ]">
                <p className="[ Card--title ] [ tc-white ] [ fw-700 ]">{locationTitle}</p>
            </div>
        </Link>
    )
}

export default Card
