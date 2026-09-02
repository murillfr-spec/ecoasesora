import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Offer } from '../components/Offer';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Offer />
      <Stats />
      <About />
      <FAQ />
      <ContactForm />
    </>
  );
};
