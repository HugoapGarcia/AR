import React  from 'react';

import earthImage from '../assets/img/earth.png';

// eslint-disable-next-line 
import { AFrameRenderer, Marker } from '../../helpers';


const EarthTrackComponent = () => {

    return (
        // <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
        //     <Marker parameters={{ preset: 'hiro' }}>

        //         <a-assets-item img id="earthImage" src={earthImage} />

        //         <a-sphere src="#earthImage" radius="1" segments-height="53">
        //             <a-animation
        //                 attribute="rotation"
        //                 dur="3000"
        //                 from="1 -90 90"
        //                 to="360 -90 90"
        //                 easing="linear"
        //                 repeat="indefinite" />
        //         </a-sphere>

        //     </Marker>
        // </AFrameRenderer>
        <a-scene arjs="sourceType:webcam">
            <a-assets>
                <img id="earthImage" src={earthImage} alt="earthImage"/>
            </a-assets>
            <a-marker preset="hiro">

                <a-sphere src="#earthImage" radius="1" segments-height="53">
                    <a-animation
                        attribute="rotation"
                        dur="3000"
                        from="1 -90 90"
                        to="360 -90 90"
                        easing="linear"
                        repeat="indefinite" />
                </a-sphere>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    )
}

export { EarthTrackComponent };