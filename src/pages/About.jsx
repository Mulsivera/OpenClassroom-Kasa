// Imports des modules internes
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import { Aboutlist } from '../data/about';
import bannerimage from "../assets/banner-about.svg"

// Imports des styles
import "../Styles/About.scss"

function About() {
    
    return(
        <div>
            <Banner bannerbackground={bannerimage} bannertext={""} />
            <div className="[ collapse__list ] [ flex-column ] [ js-coenter ]">
                {Aboutlist.map((about) =>
                <article key={about.id}>
                    <Collapse collapseTitle={about.title} collapseContent={about.content} />
                </article>
            )}
            </div>
        </div>
    )
}

export default About