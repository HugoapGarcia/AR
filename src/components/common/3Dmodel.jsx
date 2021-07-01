import React from 'react';

import brain from '../assets/models/busterDrone.gltf';


import { AFrameRenderer, Marker } from '../../helpers';

const ModelTrackMarkerComponent = () => {
    console.log('say what :', brain);
    return (
        <AFrameRenderer arToolKit={{ sourceType: 'webcam', trackingMethod: 'best' }} >
            <Marker parameters={{ preset: 'hiro' }}>
                {/* <a-asset-item id="tree" src="https://arjs-cors-proxy.herokuapp.com/https://tests.offtopicproductions.com/ywca.gltf"></a-asset-item> */}

                <a-entity
                    position="0 -1 0"
                    scale="0.05 0.05 0.05"
                    gltf-model="https://arjs-cors-proxy.herokuapp.com/https://tests.offtopicproductions.com/ywca.gltf"
                ></a-entity>

                {/* <a-entity
                    position="0 -1 0"
                    scale="0.05 0.05 0.05"
                    gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                ></a-entity> */}


            </Marker>
        </AFrameRenderer>
    )
}

export { ModelTrackMarkerComponent };