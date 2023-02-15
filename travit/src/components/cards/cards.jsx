import { Checkbox } from 'semantic-ui-react';
function Content() {

  return (
  <div className="content" style={{textAlign: "left", marginLeft: '250px', marginBottom: '100px', fontStyle: '-moz-initial'}}>
    <section>
      <h3>Travit is your all-in-one solution for planning your trips.</h3>
    <Checkbox style={{marginBottom: '10px', marginTop: '10px'}} toggle label='Travel suggestions at your finger-tips based on your unique preferences, budget, and travel history.' />
    <Checkbox style={{marginBottom: '10px'}} toggle label='Save time on researching destinations and get all the information you need in one place.' />
    <Checkbox style={{marginBottom: '10px'}} toggle label='Find the best deals on flights, hotels, and other leisure activities in your location' />
    <Checkbox style={{marginBottom: '10px'}} toggle label='Reliable and trustworthy reviews and ratings from the community of Travit users, just like you.' />
    </section>
   
  </div>
  );
}

export { Content };