import './home.css';
import { Slider } from './slider';
import { images } from '../../../assets/images/yyc_images'

function Home() {

  return (
    <div>
        <h3 className="header-text">Welcome to Travit</h3>
        <Slider images={images}/>
      <div className="container">
        <h3 className="headline">Enrich Your Travel Experience</h3>
      <div className="wrapper">
        <div className="grid bg1">
          <h3>Travel Recommendations</h3>
          <span><p>Travel suggestions tailored to your unique preferences and budget</p></span>
        </div>
        <div className="grid bg2">
          <h3>Relevant Information</h3>
          <span><p>Save time on researching destinations and get all the information you need</p></span>
        </div>
        <div className="grid bg3">
          <h3>Get the Best Deals</h3>
          <span><p>Find the best deals on flights, hotels, and other leisure activities in your location</p></span>
        </div>
        <div className="grid bg4">
          <h3>Engage With The Community</h3>
          <span><p>Reliable reviews and ratings from the community of Travit users</p></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export { Home };