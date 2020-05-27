import React from "react";
import {
  aboutHeading,
  aboutDescription,
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  return (
    <div id="aboutme">
      <div className="container container-fluid p-5">
        <div className="row">
          <div>
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
          </div>
          <div>
            <div className="lead text-center">
            <iframe
              width="420"
              height="315" 
              src="https://www.youtube.com/embed/watch?v=tHbSPvHxm_E"
            ></iframe>
</div>
            <h3 className="lead text-center">Evangelizing the Global Hack and Hackathons in General</h3>
            <p className="lead text-center">
              Please take time to listen to Steve Jurvetson, who was one of our
              keynote speakers at "Hack the Crisis" recently (April 9-11). Steve
              is Managing Director at Draper Fisher Jurvetson, a Silicon Valley
              VC firm. He is currently a board member for SpaceX & Tesla. Pls
              listen to what Steve has to say about on the future of work, the
              economy, sustainability, entrepreneurship and how we can fight the
              Covid-19 Crisis.{" "}
            </p>
            <div>
            <h4 className="lead text-center">Contact:</h4>
            <h4 className="lead text-center">Cal Tiger, Organizer</h4>
            <h4 className="lead text-center">
              <a href="mailto:caltiger727@gmail.com">caltiger727@gmail.com</a>
            </h4>
            <h4 className="lead text-center">
              Whatsapp:<a href="tel:7275658954"> 727-565-8954</a>
            </h4>
          </div>
          <div className="lead text-center">
            <h4>Hackathon Dates: June 18-21, 2020</h4>
            <h4>Virtual: Via Zoom</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
