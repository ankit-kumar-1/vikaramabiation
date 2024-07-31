import React, { useEffect, useRef } from 'react';
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import OurJobTraining from './components/OurJobTraining';
import OurStory from './components/OurStory';
import ReachUs from './components/ReachUs';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
import './App.css';
import sliderImg1 from './img/slider7.jpeg';
import sliderImg4 from './img/slider8.jpeg';
import sliderImg5 from './img/slider9.jpeg';
import training1 from './img/training7.jpeg';
import training2 from './img/training8.jpeg';
import training3 from './img/training9.jpeg'

const slides = [
  sliderImg1,
  sliderImg4,
  sliderImg5
];

const trainingList = [
  training1,
  training2,
  training3
];

const App = () => {
  const location = useLocation();
  const homeRef = useRef(null);

  useEffect(() => {
    if (location.pathname === '/') {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      window.scrollTo({
        top: -navbarHeight,
        behavior: 'smooth'
      });
    }
  }, [location]);

  return (
    <>
      <div ref={homeRef}></div>
      <Navbar />
      <div className="navbar-offset">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const Home = () => (
  <>
    <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
    <OurStory />
    <WhatWeDo />
    <OurJobTraining trainingList={trainingList} />
    <ReachUs />
  </>
);

const ScrollToComponent = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location]);

  return (
    <>
      <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
      <div id="about-us"><OurStory /></div>
      <div id="what-we-do"><WhatWeDo /></div>
      <div id="ame-training"><OurJobTraining trainingList={trainingList} /></div>
      <div id="reach-us"><ReachUs /></div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:section",
        element: <ScrollToComponent />
      }
    ]
  }
]);

export default appRouter;