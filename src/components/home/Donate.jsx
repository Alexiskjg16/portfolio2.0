import React from "react";


const Donate = () => {


  return (
    <div id="donate" className="jumbotron jumbotron-fluid bg-transparent m-0">
<h1 className="display-4 mb-5 text-center"> Donate</h1>
<h3 className="display-8 mb-5 text-center">
  Please consider donating to our Crowdfunding efforts. Your contribution will
  be used for providing prizes to the winners of the Hackathon. Plus, your
  contributions are fully tax deductible. Our goal is to raise $25,000!
</h3>
<div>
  <section>
  <form className="text-center"
    action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" >
    <input type="hidden" name="cmd" value="_donations" />
    <input type="hidden" name="business" value="ehrbyod@gmail.com" />
    <input type="hidden" name="currency_code" value="USD" />
    <input
      type="image"
      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
      name="submit" title="PayPal - The safer, easier way to pay online!"
      alt="Donate with PayPal button" />
    <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
  </form>
</section>
  <section>
  <h3 className="display-8 mb-5 text-center">
      Or directly at:
      <a href="https://www.paypal.com/donate/?token=suPTGEQbcAIjG4E-2oioCIEhGDU1TNYRdXvU189PFfdWQu8uB5ONRO-ArB1p2QkB40dDJW&country.x=US&locale.x=" target="_blank" rel="noopener noreferrer">https://www.paypal.com/donate/</a>
    </h3>
</section>
<div className="text-center">
 <img src={require("./QRcode.png")} alt="Global Hack" />
 </div>
</div>
    </div>
  );
};

export default Donate;
