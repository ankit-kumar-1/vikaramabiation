import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
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
  return (
    <>
      <Navbar />
      <Outlet />
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
        path: "/about-us",
        element: <OurStory />
      },
      {
        path: "/what-we-do",
        element: <WhatWeDo />
      },
      {
        path: "/ame-training",
        element: <OurJobTraining trainingList={trainingList} />
      },
      {
        path: "/reach-us",
        element: <ReachUs />
      }
    ]
  }
]);


export default appRouter;