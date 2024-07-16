
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import OurJobTraining from './components/OurJobTraining';
import OurStory from './components/OurStory';
import ReachUs from './components/ReachUs';
import WhatWeDo from './components/WhatWeDo';


function App() {
  let slides = [
    "https://vikramaviation.com/image/slider_img1.jpg",
    "https://vikramaviation.com/image/slider_img4.jpg",
    "https://vikramaviation.com/image/slider_img5.jpg"
  ]

  let trainingList = [
    "https://vikramaviation.com/image/training_1.jpg",
    "https://vikramaviation.com/image/training_2.jpg",
    "https://vikramaviation.com/image/training_3.jpg"
  ]
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
      </div>
      <div>
        <OurStory />
      </div>

      <div>
        <WhatWeDo />
      </div>
      <div>
        <OurJobTraining trainingList={trainingList} />
      </div>

      <div>
        <ReachUs />
      </div>
    </>
  );
}

export default App;
