import Header from './layouts/Header';
import Footer from './layouts/FooterLayout';
import HeroSection from './sections/HeroSection';
import PlanetVideo from './sections/PlanetVideo';
import PlanetGallery from './sections/PlanetGallery';
import TableSection from './sections/TableSection';
import FormSection from './sections/FormSection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PlanetVideo />
        <PlanetGallery />
        <TableSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
}

export default App;