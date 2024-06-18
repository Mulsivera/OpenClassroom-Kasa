import { locationList } from "../data/logements";
import "../Styles/LocationList.scss"
import Card from "./card";

function LocationList() {
    console.log(locationList)
    return (
        <div className="locationList">
            <div className="locationList--div">
                <div className="locationList--list">
                    {locationList.map((location) =>
                    <Card locationCover={location.cover} locationId={location.id} locationTitle={location.title}/>)}
                </div>
            </div>
        </div>
    )

}

export default LocationList