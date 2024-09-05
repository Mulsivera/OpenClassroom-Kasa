// Imports des bibliothèques externes
import { Link } from "react-router-dom";

// Imports des styles
import "../Styles/Card.scss"

function Card({ locationCover , locationId , locationTitle }) {
    return (
        <Link to={`/location/${locationId}`}>
            <div style={{ background: `url(${locationCover})`, backgroundSize: 'cover' }} className="[ card ] [ flex-column ] [ justify-end ]">
                <p className="[ card__title ] [ text-color-white ] [ font-weight-700 ]">{locationTitle}</p>
            </div>
        </Link>
    )
}

export default Card
