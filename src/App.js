
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import OurStory from './components/OurStory';


function App() {
  let slides = [
    "https://vikramaviation.com/image/slider_img1.jpg",
    "https://vikramaviation.com/image/slider_img4.jpg",
    "https://vikramaviation.com/image/slider_img5.jpg"
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

    </>
  );
}

export default App;
