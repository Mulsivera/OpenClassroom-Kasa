import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import HousingSheet from '../pages/Housing-sheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/fiche-logement" element={<HousingSheet />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routing
