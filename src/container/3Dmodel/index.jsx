
import React, { Component } from 'react';

import { NavComponent, ModelTrackMarkerComponent, SocialMediaComponent } from '../../components/common';

class ModelTrackingContainer extends Component {

    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <NavComponent />
                <ModelTrackMarkerComponent />
                <SocialMediaComponent />
            </>

        );
    }
}

export default ModelTrackingContainer;