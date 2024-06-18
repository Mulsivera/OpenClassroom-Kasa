function Card({ locationCover , locationId , locationTitle}) {
    return (
        <div style={{ background: `url(${locationCover})`,
        }} className="locationList--card" key={locationId}>
        <p className="locationList--title">{locationTitle}</p>
        </div>
    )
}

export default Card