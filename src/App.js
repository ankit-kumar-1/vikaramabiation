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

const slides = [
  "https://vikramaviation.com/image/slider_img1.jpg",
  "https://vikramaviation.com/image/slider_img4.jpg",
  "https://vikramaviation.com/image/slider_img5.jpg"
];

const trainingList = [
  "https://vikramaviation.com/image/training_1.jpg",
  "https://vikramaviation.com/image/training_2.jpg",
  "https://vikramaviation.com/image/training_3.jpg"
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