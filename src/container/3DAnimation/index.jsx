
import React, { Component } from 'react';

import { NavComponent, AnimationModelComponent, SocialMediaComponent } from '../../components/common';

class AnimationModelContainer extends Component {

    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <NavComponent />
                <AnimationModelComponent />
                <SocialMediaComponent />
            </>

        );
    }
}

export default AnimationModelContainer;