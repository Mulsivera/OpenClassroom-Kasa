import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import HousingSheet from '../pages/Housing-sheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/fiche-logement" element={<HousingSheet />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
