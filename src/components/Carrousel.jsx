// Imports des bibliothèques externes
import { useState } from "react"

// Imports des styles
import "../Styles/Carrousel.scss"

function Carrousel ({image}) {

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
        setCount(slidenumber === 0 ? image.length - 1  : slidenumber - 1);
    }

    return (
    <div style={styleBackground.container} className="[ carrousel ] [ flex-column-reverse ] [ mobile-justify-center ]">
      <p className="[ carrousel__slidenumber ] [ text-align-center ] [ font-weight-500 ] [ text-color-white ] [ mobile-none ]">{slidenumber + 1}/{image.length}</p>
      <div className="[ carrousel__navbuttons ] [ flex-row ] [ justify-between ]">
            <p onClick={prevSlide} className="[ carrousel--chevron ] [ text-color-white ]">&#8249;</p>
            <p onClick={nextSlide} className="[ carrousel--chevron ] [ text-color-white ]">&#8250;</p>
        </div>
    </div>
    )
}

export default Carrousel