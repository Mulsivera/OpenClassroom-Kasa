// Imports des styles
import "../Styles/Banner.scss"

function Banner({ bannerbackground , bannertext }) {
    return (
        <div className="[ banner ] [ flex-row ] [ justify-center ]">
            <div style={{backgroundImage: `url(${bannerbackground})`}} className="[ banner__div ] [ flex-row ] [ justify-center ] [ align-item-center ]">
                <p className="[ banner__text ] [ text-color-white ] [ font-weight-700 ]">{bannertext}</p>
            </div>
        </div>
    )
}

export default Banner