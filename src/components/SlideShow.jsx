import { useState } from "react"
import "../Styles/Carrousel.scss"

function Slideshow ({image}) {

    const [slidenumber, setCount] = useState(0);

    const styleBackground = {
        container: {
        backgroundImage: `url(${image[slidenumber]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}

    const nextSlide = () => {
        setCount(slidenumber >= image.length - 1 ? 0 : slidenumber + 1);
        }

    const prevSlide = () => {
        setCount(slidenumber <= image.lenght - 1 ? 0 : slidenumber - 1);
    }

    return (
    <div style={styleBackground.container} className="carrousel">
      <p className="carrousel--slidenumber">{slidenumber + 1}/{image.length}</p>
      <div className="carrousel--navbuttons">
            <p onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" height="120" width="55" viewBox="0 0 320 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></p>
            <p onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" height="120" width="55" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></p>
        </div>
    </div>
    )
}

export default Slideshow