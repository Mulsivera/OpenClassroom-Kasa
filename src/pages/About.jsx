import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import { Aboutlist } from '../data/about';
import "../Styles/AboutList.scss"

function About() {
    return(
        <div className="about--page">
            <Banner bannerbackground={"BackgroundAbout"} bannertext={""} />
            <div className="listabout--div">
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