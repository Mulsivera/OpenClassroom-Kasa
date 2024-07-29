// Imports des modules internes
import { locationList } from "../data/logements";
import Card from "./Card";

// Imports des styles
import "../Styles/LocationList.scss"

function LocationList() {

    return (
        <div className="[ locationList ] [ flex-row ] [ justify-center ]">
            <div className="[ locationList__div ] [ background-color-grey ]">
                <div className="[ locationList__list ] [ flex-row ] [ justify-center ]">
                    {locationList.map((location) =>
                    <article key={location.id}>
                    <Card locationCover={location.cover} locationTitle={location.title} locationId={location.id}/>
                    </article>
                    )}                  
                </div>
            </div>
        </div>
    )
}

export default LocationList