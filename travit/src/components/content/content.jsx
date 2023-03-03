import './content.css';
function Content() {

  return (
    <div className="container">
      <h2>Travit Enriches Your Travel Experience</h2>
    <div className="wrapper">
      <div className="grid bg1">
        <h2>Create Your Profile</h2>
        <span><p>Setup your profile with an email and password</p></span>
      </div>
      <div className="grid bg2">
        <h2>Travel Recommendations</h2>
        <span><p>Travel suggestions tailored to your unique preferences and budget</p></span>
      </div>
      <div className="grid bg3">
        <h2>Relevant Information For Your Preferred Destinations</h2>
        <span><p>Save time on researching destinations and get all the information you need in one place</p></span>
      </div>
      <div className="grid bg4">
        <h2>Get the Best Deals</h2>
        <span><p>Find the best deals on flights, hotels, and other leisure activities in your location.</p></span>
      </div>
      <div className="grid bg5">
        <h2>Engage With The Community</h2>
        <span><p>Reliable reviews and ratings from the community of Travit users</p></span>
      </div>
    </div>
    </div>
  )
}

export { Content };