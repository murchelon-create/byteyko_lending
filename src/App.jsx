import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PageNavigation from './components/PageNavigation';
import AboutBreathing from './components/AboutBreathing';
import BreathingIssues from './components/BreathingIssues';
import Symptoms from './components/Symptoms';
import BreathingConsequences from './components/BreathingConsequences';
import ScienceBlock from './components/ScienceBlock';
import AboutMe from './components/AboutMe';
import Reviews from './components/Reviews';
import BreathingTest from './components/BreathingTest';
import Products from './components/Products';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';
import PopupNotifications from './components/PopupNotifications';
import ProductComparison from './components/ProductComparison';
import StickyCTA from './components/StickyCTA';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PageNavigation />
      <BreathingIssues />
      <Symptoms />
      <BreathingConsequences />
      <ScienceBlock />
      <AboutBreathing />
      <AboutMe />
      <Reviews />
      <BreathingTest />
      <ProductComparison />
      <Products />
      <FAQ />
      <ScrollToTop />
      <PopupNotifications />
      <StickyCTA />
    </div>
  );
}

export default App; 