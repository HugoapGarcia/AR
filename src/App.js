import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share";
import './index.css';

import { TrackMarker, ModelTrackMarkerComponent, EarthTrackComponent, BasicSceneComponent } from './components/common';
//import { BasicSceneComponent } from './components/common';

function App() {
  return (
    <>
      {/* <TrackMarker/> */}
      {/* <ModelTrackMarkerComponent /> */}
      {/* <EarthTrackComponent/> */}

      <BasicSceneComponent />

      <div className="fb">
        <FacebookShareButton
          url={' https://hugoapgarcia.github.io/AR/'}
          quote={"AR-Experience"}
          hashtag="#AR">
          <FacebookIcon />
        </FacebookShareButton>
      </div>
      <div className="tw">
        <TwitterShareButton
          url={' https://hugoapgarcia.github.io/AR/'}
          title={"AR-Experience"}
          hashtag="#AR">
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <div className="link">
        <LinkedinShareButton
          url={' https://hugoapgarcia.github.io/AR/'}
          title={"AR-Experience"}
          hashtag="#AR">
          <LinkedinIcon />
        </LinkedinShareButton>
      </div>
    </>
  );
}

export default App;
