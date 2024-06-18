function Card({ locationCover , locationTitle}) {
    function logauclick() {
        console.log("Vous avez cliquer sur la carte qui a pour titre " + locationTitle)
    }
    return (
        <div style={{ background: `url(${locationCover})`,
        }} className="locationList--card" onClick={logauclick}>
        <p className="locationList--title">{locationTitle}</p>
        </div>
    )
}

export default Card