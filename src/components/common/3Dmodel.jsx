import React from 'react';

// eslint-disable-next-line 
import { AFrameRenderer, Marker } from '../../helpers';

const ModelTrackMarkerComponent = () => {
    
    return (
        <>
            {/* <AFrameRenderer arToolKit={{ sourceType: 'webcam', trackingMethod: 'best' }}>
                <Marker parameters={{ preset: 'hiro' }}> */}
            {/* <a-asset-item id="tree" src="https://arjs-cors-proxy.herokuapp.com/https://tests.offtopicproductions.com/ywca.gltf"></a-asset-item> */}

            {/* <a-entity
                    position="0 -1 0"
                    scale="0.05 0.05 0.05"
                    gltf-model="https://arjs-cors-proxy.herokuapp.com/https://tests.offtopicproductions.com/ywca.gltf" 
                ></a-entity> */}

            {/* <a-entity
                        grab
                        position="0 -1 0"
                        scale="0.05 0.05 0.05"
                        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
                    ></a-entity>
                </Marker>
            </AFrameRenderer> */}
            <a-scene arjs="sourceType:webcam">
                <a-marker preset="hiro">
                    <a-entity
                        grab
                        position="0 -1 0"
                        scale="0.05 0.05 0.05"
                        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
                    ></a-entity>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </>
    )
}

export { ModelTrackMarkerComponent };