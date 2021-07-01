import React from 'react';

import earthImage from '../assets/img/earth.png';

import { AFrameRenderer, Marker } from '../../helpers';


const EarthTrackComponent = () => {

    return (
        <AFrameRenderer arToolKit={{ sourceType: 'webcam' }} >
            <Marker parameters={{ preset: 'hiro' }}>

                <a-assets-item img id="earthImage" src={earthImage} />

                <a-sphere src="#earthImage" radius="1" segments-height="53">
                    <a-animation
                        attribute="rotation"
                        dur="3000"
                        from="1 -90 90"
                        to="360 -90 90"
                        easing="linear"
                        repeat="indefinite" />
                </a-sphere>

            </Marker>
        </AFrameRenderer>
    )
}

export { EarthTrackComponent };