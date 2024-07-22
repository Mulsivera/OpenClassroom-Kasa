// Imports des modules internes
import { locationList } from "../data/logements";
import Card from "./card";

// Imports des styles
import "../Styles/LocationList.scss"

function LocationList() {

    return (
        <div className="[ locationList ] [ flex-row ] [ justify-center ]">
            <div className="[ locationList--div ] [ bc-grey ]">
                <div className="[ locationList--list ] [ flex-row ] [ justify-center ]">
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