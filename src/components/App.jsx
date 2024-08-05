// Imports des bibliothèques externes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imports des modules internes
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import HousingSheet from '../pages/Housing-sheet';
import Header from './Header';
import Footer from './Footer';

// Imports des styles
import "../Styles/Global.scss"

const App = () => {
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/location/:locationId" element={<HousingSheet />} />
                </Routes>
            <Footer />
        </Router>
    )
}

export default App
