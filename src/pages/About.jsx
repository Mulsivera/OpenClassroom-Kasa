import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import { Aboutlist } from '../data/about';

function About() {
    return(
        <div>
            <Banner bannerbackground={"BackgroundAbout"} bannertext={""} />
            <div className="aboutlist--div">
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