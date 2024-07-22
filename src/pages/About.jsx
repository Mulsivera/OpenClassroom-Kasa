import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import { Aboutlist } from '../data/about';
import "../Styles/About.scss"

import bannerimage from "../assets/banner-about.svg"

function About() {
    
    return(
        <div>
            <Banner bannerbackground={bannerimage} bannertext={""} />
            <div className="[ collapse-list ] [ flex-column ] [ js-coenter ]">
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