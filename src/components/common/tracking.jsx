import React from 'react';

// eslint-disable-next-line 
import { AFrameRenderer, Marker } from '../../helpers';

const TrackMarker = () => {

    return (
        // <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
        //     <Marker parameters={{ preset: 'hiro' }}>

        //         <a-box color="blue" material="opacity: 1;" position="0 0.09 0" scale="0.4 0.8 0.8">
        //             <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
        //         </a-box>

        //     </Marker>
        // </AFrameRenderer>
        <a-scene arjs="sourceType:webcam">
            <a-marker preset="hiro">
                <a-box color="blue" material="opacity: 1;" position="0 0.09 0" scale="0.4 0.8 0.8">
                    <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
                </a-box>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    )
}

export { TrackMarker };