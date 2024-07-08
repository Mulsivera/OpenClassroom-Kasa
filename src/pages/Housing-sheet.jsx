import { useParams } from "react-router-dom"
import { locationList } from "../data/logements";

function HousingSheet() {

    const { locationTitle } = useParams();
    const location = locationList.find((location) => location.title === locationTitle)

    return (
        <div>
            <h1>{location.host.name}</h1>
        </div>
    )
}

export default HousingSheet