import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
