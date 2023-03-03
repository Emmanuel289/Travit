function Content() {

  const styles = {
    content: {
      display: 'grid',
      width: 'auto',
      minHeight: '700px',
      boxSizing: 'border-box',
      textAlign: 'center',
      marginBottom: '100px',
      fontStyle: '-moz-initial', 
      backgroundRepeat: 'no-repeat', 
      padding: '0px 80px',
      alignItems: 'center',
    }, 
    box: {
      padding: '0px 80px',
      boxSizing: 'border-box',
      display: 'grid',
      alignItems: 'center',
    },
    'grid-container': {
      'grid-template-columns': '1fr 1fr',
      'grid-auto-rows': '60px',
      'grid-gap': '20px',
      width: '75%',
      display: 'grid',
      '-webkitBoxAlign': 'center',
      alignItems: 'center',
      '-webkitBoxPack': 'justify',
      justifyContent: 'space-between',
      textAlign: 'center'
    },
    'grid bg1': {
      flexBasis: '30%',
      height: '385.71px',
      borderRadius: '5px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      padding: '30px 30px',
      boxSizing: 'border-box',
      display: 'flex',
      '-webkitBoxPack': 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundRepeat: 'no-repeat !important',
      boxShadow: 'rgb(85 85 85 / 40%) 0px 8px 50px',
      animationDuration: '1s',
      background: 'url(/static/media/img1.svg)no-repeat #0d6efd',
      textAlign: 'center',
    },
    'grid bg2': {
      boxShadow: 'rgb(85 85 85 / 40%) 0px 8px 50px',
      animationDuration: '1s',
      animationDelay: '0.2s',
      background: 'url(/static/media/img2.svg) no-repeat 	#00FFFF',
      textAlign: 'center',
    },
    'grid bg3': {
      flexBasis: '30%',
      height: '385.71px',
      borderRadius: '5px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      padding: '0px 30px',
      boxSizing: 'border-box',
      display: 'flex',
      '-webkitbBoxPack': 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundRepeat: 'no-repeat !important',
      boxShadow: 'rgb(85 85 85 / 40%) 0px 8px 50px',
      animationDuration: '1s',
      animationDelay: '0.5s',
      background: 'url(/static/media/img3.svg) no-repeat #4169E1',
      textAlign: 'center',
    }, 

    'grid bg4': {
      flexBasis: '30%',
      height: '385.71px',
      borderRadius: '5px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      padding: '0px 30px',
      boxSizing: 'border-box',
      display: 'flex',
      '-webkitBoxPack': 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundRepeat: 'no-repeat !important',
      boxShadow: 'rgb(85 85 85 / 40%) 0px 8px 50px',
      animationDuration: '1s',
      animationDelay: '0.5s',
      background: 'url(/static/media/img4.svg) no-repeat #00FFFF',
      textAlign: 'center',
    },

    'grid bg5': {
      flexBasis: '30%',
      height: '385.71px',
      borderRadius: '5px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      padding: '0px 30px',
      boxSizing: 'border-box',
      display: 'flex',
      '-webkitBoxPack': 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundRepeat: 'no-repeat !important',
      boxShadow: 'rgb(85 85 85 / 40%) 0px 8px 50px',
      animationDuration: '1s',
      animationDelay: '0.5s',
      background: 'url(/static/media/img5.svg) no-repeat #FF00FF',
      textAlign: 'center',
    },
  } 

  return (
  <div className="content" >
    <div className="box" style={styles.box}>
      <h2 style={{textAlign: 'center'}}>Enrich Your Travel Experience</h2>
      <div className="grid-container" style={styles.grid}>
        <div className="grid bg1" style={styles['grid bg1']}>
          <h2>Create an Account</h2>
          <span><p>Setup your personal account with an email and password</p></span>
        </div>
        <div className="grid bg2" style={styles['grid bg2']}>
          <h2>View Personalized Travel Recommendations</h2>
          <span><p>Get tailored travel suggestions, based on your unique preferences and budget</p></span>
        </div>
        <div className="grid bg3" style={styles['grid bg3']}>
          <h2>Relevant Information For Your Travel Destinations</h2>
          <span><p>Save time on researching destinations and get all the information you need in one place</p></span>
        </div>
        <div className="grid bg4" style={styles['grid bg4']}>
          <h2>Get the Best Deals</h2>
          <span><p>Find the best deals on flights, hotels, and other leisure activities in your location.</p></span>
        </div>
        <div className="grid bg5" style={styles['grid bg5']}>
          <h2>Engage with The Travit Community</h2>
          <span><p>Reliable and trustworthy reviews and ratings from the community of Travit users, just like you.</p></span>
        </div>
      </div>
    </div>
  </div>
  );
}

export { Content };