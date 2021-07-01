
import React, { Component } from 'react';

import { ModelTrackMarkerComponent } from '../../components/common';

class ModelTrackingContainer extends Component {

    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <ModelTrackMarkerComponent />
            </>

        );
    }
}

export default ModelTrackingContainer;