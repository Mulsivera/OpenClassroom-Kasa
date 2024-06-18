import Banner from '../components/Banner';
import LocationList from '../components/LocationList';

function Home() {
    return (
        <div>
            <Banner bannerbackground={"BackgroundHome"} bannertext={"Chez vous, partout et ailleurs"} />
            <LocationList />
        </div>
    )
}

export default Home