const BackgroundImage = ({ height }) => {
    
    return (
      // <img
      //   className= "card-img"
      //   height={height}
      //   alt="background"
      //   src="/images/backk.jpg"
      // />

      
      <video preload = "auto" autoPlay  muted  loop>
      <source src = "/video/Online_shopping.mp4" type = "video/mp4" />    
      </video> 
    );
  };

  export {BackgroundImage};