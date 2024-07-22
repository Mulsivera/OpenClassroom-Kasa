// Imports des bibliothèques externes
import { useState } from "react"

// Imports des styles
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
    <div style={styleBackground.container} className="[ carrousel ] [ flex-column-reverse ] [ mobile-justify-center ]">
      <p className="[ carrousel--slidenumber ] [ ta-center ] [ fw-500 ] [ tc-white ] [ mobile-none ]">{slidenumber + 1}/{image.length}</p>
      <div className="[ carrousel--navbuttons ] [ flex-row ] [ justify-between ]">
            <p onClick={prevSlide} className="[ carrousel--chevron ] [ tc-white ]">&#8249;</p>
            <p onClick={nextSlide} className="[ carrousel--chevron ] [ tc-white ]">&#8250;</p>
        </div>
    </div>
    )
}

export default Slideshow