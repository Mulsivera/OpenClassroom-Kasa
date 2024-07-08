import { locationList } from "../data/logements";
import "../Styles/LocationList.scss"
import Card from "./card";

function LocationList() {

    return (
        <div className="locationList">
            <div className="locationList--div">
                <div className="locationList--list">
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