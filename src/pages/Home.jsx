import Banner from '../components/Banner';
import LocationList from '../components/LocationList';

import bannerimage from "../assets/banner-home.svg"
function Home() {
    return (
        <div>
            <Banner bannerbackground={bannerimage} bannertext={"Chez vous, partout et ailleurs"} />
            <LocationList />
        </div>
    )
}

export default Home