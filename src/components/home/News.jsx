import React from "react";
import { newsHeading } from "../../editable-stuff/configurations.json";



const News = () => {


  return (
    <div id="news" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
      
            <h1 className="display-4 mb-5 text-center">{newsHeading}</h1>
            <p className="lead text-center"></p>
        </div>
  

<section>
<h2 className="lead text-center">Check out this interview our Lead Organizer, Cal Tiger, did with 83 Degrees Media</h2>
    <p className="lead text-center">April 8, 2020</p>
     <h3 className="lead text-center"><a href="https://www.83degreesmedia.com/innovationnews/Tampa-Bay-techies-to-help-covid19-global-hackathon-040820.aspx?fbclid=IwAR1LYagu288iB4mQrqoma765ZbyTnGSGQpvfuF-BUyIiQzynHk63cIQYeH4"  target="_blank" rel="noopener noreferrer">Global COVID-19 hackathon seeks Tampa Bay Area techies</a></h3>
</section>

<section>
    <h2 className="lead text-center">Forbes Magazine Article on Lessons from Estonia</h2>
    <p className="lead text-center">March 15, 2020</p>
    <h3 className="lead text-center"><a href="https://www.forbes.com/sites/robertwolcott/2020/03/15/hack-the-crisis-6-lessons-from-estonias-coronavirus-crisis-response/#138f26dc4fca" target="_blank" rel="noopener noreferrer">
        Hack-The-Crisis: 6 Lessons From Estonia’s Coronavirus Crisis Response</a></h3>
</section>

<section>
    <h2 className="lead text-center">Forbes Magazine Article by Pipedrive CTO</h2>
    <p className="lead text-center">March 19, 2020</p>
    <h3 className="lead text-center"><a href="https://www.forbes.com/sites/forbestechcouncil/2020/05/19/why-estonia-is-the-worlds-leader-when-it-comes-to-hacking-the-current-health-crisis/#633005e02af3" target="_blank" rel="noopener noreferrer">
        Why Estonia Is The World's Leader When It Comes To Hacking The Current Health Crisis</a></h3>
</section>

<section>
    <h2 className="lead text-center">Forbes CIO Insights on Covid-19 Crisis</h2>
    <p className="lead text-center">April 8, 2020</p>
    <h3 className="lead text-center"><a href="https://www.forbes.com/sites/vijaygurbaxani/2020/04/08/cios-think-like-hackers-during-covid-19/#36fa3eba54f2" target="_blank" rel="noopener noreferrer">
        Why CIOs Must Think Like Hackers In The Covid-19 Crisis—And After It</a></h3>
</section>

<section>
    <h2 className="lead text-center">Forbes Article on Superhuman Energy During Crisis</h2>
    <p className="lead text-center">April 12, 2020</p>
    <h3 className="lead text-center"><a href="https://www.forbes.com/sites/robertwolcott/2020/04/12/superhuman-energy-of-crisis--purpose-as-catalyst-serendipity-as-resource/#38a29d8443c4" target="_blank" rel="noopener noreferrer">
        Superhuman Energy Of Crisis— Purpose As Catalyst, Serendipity As Resource</a></h3>
</section>

<section>
    <h2 className="lead text-center">Forbes Article by Professor Dan Conway, Phd</h2>
    <p className="lead text-center">Sept 6, 2018</p>
    <h3 className="lead text-center"><a href="https://www.forbes.com/sites/cognitiveworld/2018/09/06/are-you-playing-the-right-game/#763341d24241" target="_blank" rel="noopener noreferrer">
        Are You Playing The Right Game?</a></h3>
</section>

    </div>
  );
};

export default News;
