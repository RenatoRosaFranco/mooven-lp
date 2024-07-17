import React from 'react';
import './style.scss';

import Hero from '../../Components/Hero/Index';
import Newsletters from '../../Components/Newsletters/Index';
import Plans from '../../Components/Plans/Index';
import About from '../../Components/About/Index';
import Contact from '../../Components/Contact/Index';

const HomePage = () => {
  return (
    <section id="home-page">
      <Hero />
      <About />
      <Plans />
      <Newsletters />
      <Contact />
    </section>
  )
}

export default HomePage;