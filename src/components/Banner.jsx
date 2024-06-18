import "../Styles/Banner.scss"

function Banner({ bannerbackground , bannertext }) {
    return (
        <div className="banner">
            <div className="banner--div" id={bannerbackground}>
                <p className="banner--text">{bannertext}</p>
            </div>
        </div>
    )
}

export default Banner