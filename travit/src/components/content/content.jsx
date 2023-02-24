import { Checkbox } from 'semantic-ui-react';

function Content() {

  return (
  <div className="content" style={{textAlign: "center", marginBottom: '100px', fontStyle: '-moz-initial'}}>
    <h1>Welcome to Travit</h1>
    <section>
      <div>Travit is your all-in-one solution for planning your trips.</div>
      <div><Checkbox checked style={{marginBottom: '10px', marginTop: '10px'}} label='Travel suggestions at your finger-tips based on your unique preferences, budget, and travel history.' /></div>
      <div><Checkbox checked style={{marginBottom: '10px'}} label='Save time on researching destinations and get all the information you need in one place.'/></div>
      <div><Checkbox checked style={{marginBottom: '10px'}} label='Find the best deals on flights, hotels, and other leisure activities in your location'/></div>
      <div><Checkbox checked style={{marginBottom: '10px'}} label='Reliable and trustworthy reviews and ratings from the community of Travit users, just like you.'/></div>
    </section>
  </div>
  );
}

export { Content };