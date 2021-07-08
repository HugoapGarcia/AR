import React from 'react';

import animation from '../assets/models/fenix/fenix.glb';

const AnimationModelComponent = () => {

    return (
        <>
            <a-scene arjs="sourceType:webcam">
                <a-marker preset="hiro">
                    <a-entity
                        grab
                        position="0 1 0"
                        // gltf-model="https://cdn.glitch.com/1061d524-9d0f-4b25-97fd-48ebd0fce63c%2Fsceneglb.glb?1546534633849"
                        gltf-model={animation}
                        scale="0.01 0.01 0.01" animation-mixer="clip:Take 001; loop:2; timeScale: 1.2; crossFadeDuration: 1"
                    ></a-entity>
                </a-marker>
            </a-scene>
        </>
    )
}

export { AnimationModelComponent };