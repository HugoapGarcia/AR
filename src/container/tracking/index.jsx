
import React, { Component } from 'react';

import { NavComponent, TrackMarker, SocialMediaComponent } from '../../components/common';

class TrackingContainer extends Component {

    // eslint-disable-next-line 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <NavComponent />
                <TrackMarker />
                <SocialMediaComponent />
            </>

        );
    }
}

export default TrackingContainer;