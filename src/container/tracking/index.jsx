
import React, { Component } from 'react';

import { TrackMarker } from '../../components/common';

class TrackingContainer extends Component {

    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <TrackMarker />
            </>

        );
    }
}

export default TrackingContainer;