
import React, { Component } from 'react';

import { NavComponent, EarthTrackComponent, SocialMediaComponent } from '../../components/common';

class EearthTrackingContainer extends Component {

    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <NavComponent />
                <EarthTrackComponent />
                <SocialMediaComponent />
            </>

        );
    }
}

export default EearthTrackingContainer;