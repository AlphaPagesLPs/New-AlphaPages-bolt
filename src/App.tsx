import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Portfolio />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
