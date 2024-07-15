import { useParams } from "react-router-dom"
import { locationList } from "../data/logements";
import "../Styles/HousingSheet.scss"
import Collapse from '../components/Collapse';
import Slideshow from "../components/SlideShow";

function HousingSheet() {

    const { locationTitle } = useParams();
    const location = locationList.find((location) => location.title === locationTitle)

    let fullstarnumber =Number(location.rating)
    let emptystarnumber = 5-Number(location.rating)
    let listetoile = [];

    for (let i = 0; i < fullstarnumber; i++) {
            listetoile.push(<p><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path fill="#ff6060" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></p>)
        }
    for (let i = 0; i < emptystarnumber; i++) {
            listetoile.push(<p><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path fill="#e3e3e3" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></p>)
    }

    return (
        <div className="sheet--content">
            <div className="carrousel">
                <Slideshow image={location.pictures} />
            </div>
            <div className="sheet--datas">
                <div className="sheet--infos">
                    <div className="sheet--leftcolumn">
                        <div className="title--div">
                            <p className="sheet--title">{location.title}</p>
                            <p className="sheet--localisation">{location.location}</p>
                        </div>
                        <div className="tags--div">
                            {location.tags.map((tag) =>
                            <p className="sheet--tag">{tag}</p>)}
                        </div>
                    </div>
                    <div className="sheet--rightcolumn">
                        <div className="sheet--hostinfos">
                            <p className="sheet--hostname">{location.host.name}</p>
                            <img className="sheet--hostpicture" src={location.host.picture} alt="Propriétaire"></img>
                        </div>
                        <div className="sheet--rating">
                            {listetoile}
                        </div>
                    </div>
                </div>
                <div className="sheet--collapsesection">
                    <div className="collapse"><Collapse collapseTitle={"Description"} collapseContent={location.description} /></div>
                    <div className="collapse"><Collapse collapseTitle={"Équipement"} collapseContent={location.equipments.map((equipment) => <p>{equipment}</p>)} /></div>
                </div>
            </div>
        </div>
    )
}

export default HousingSheet