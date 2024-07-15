import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import HousingSheet from '../pages/Housing-sheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import "../Styles/Content.scss"
import "../Styles/Global.scss"

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="/location/:locationTitle" element={<HousingSheet />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    )
}

export default App
