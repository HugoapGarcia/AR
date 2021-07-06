import React from 'react';

const BasicSceneComponent = () => {

   

    return (
        <>
            <a-scene arjs="debugUIEnabled: false; sourceType: image" renderer="logarithmicDepthBuffer: true;">
                <a-assets>
                    <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" crossOrigin="anonymous" alt="groundTexture" />
                    <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" crossOrigin="anonymous" alt="skyTexture" />
                    <a-mixin id="voxel"
                        geometry="primitive: box; height: 0.5; width: 0.5; depth: 0.5"
                        material="shader: standard"
                        random-color
                        snap="offset: 0.25 0.25 0.25; snap: 0.5 0.5 0.5"></a-mixin>
                </a-assets>

                <a-cylinder id="ground" src="#groundTexture" radius="30" height="0.1"></a-cylinder>

                <a-sky id="background" src="#skyTexture" theta-length="90" radius="30"></a-sky>

                <a-entity mixin="voxel" position="-1 0 -5"></a-entity>
                <a-entity mixin="voxel" position="0 0 -5"></a-entity>
                <a-entity mixin="voxel" position="0 1 -5">
                    <a-animation attribute="rotation" to="0 360 0" repeat="indefinite"></a-animation>
                </a-entity>
                <a-entity mixin="voxel" position="1 0 -5"></a-entity>
            </a-scene>

        </>
    )
}

export { BasicSceneComponent };