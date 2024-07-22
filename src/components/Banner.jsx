// Imports des styles
import "../Styles/Banner.scss"

function Banner({ bannerbackground , bannertext }) {
    return (
        <div className="[ banner ] [ flex-row ] [ justify-center ]">
            <div style={{backgroundImage: `url(${bannerbackground})`}} className="[ banner--div ] [ flex-row ] [ justify-center ] [ ai-center ]">
                <p className="[ banner--text ] [ tc-white ] [ fw-700 ]">{bannertext}</p>
            </div>
        </div>
    )
}

export default Banner