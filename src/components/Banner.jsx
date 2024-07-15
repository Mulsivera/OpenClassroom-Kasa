import "../Styles/Banner.scss"

function Banner({ bannerbackground , bannertext }) {
    return (
        <div className=" banner [ f-row ] [ jc-center ]">
            <div style={{backgroundImage: `url(${bannerbackground})`}} className="banner--div [ f-row ] [ jc-center ] [ ai-center ]">
                <p className="banner--text [ tc-white ] [ fw-700 ]">{bannertext}</p>
            </div>
        </div>
    )
}

export default Banner