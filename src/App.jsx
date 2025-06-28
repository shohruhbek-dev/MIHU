import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Home from './pages/home';
import News from './pages/news';
import Media from './pages/media';
import Contact from './pages/contact';
import Documents from './pages/documents';
import Uyushma from './pages/uyushma';
import Partners from './pages/hamkorlar';
import UzbekistanMap from './components/UzbekistanMap';
import RegionDetail from './components/regioanDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="yangiliklar" element={<News />} />
        <Route path="media" element={<Media />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hujjatlar" element={<Documents />} />
        <Route path="uyushma" element={<Uyushma />} />
        <Route path="partners" element={<Partners />} />

      </Route>
    </Routes>
  );
}

export default App;
