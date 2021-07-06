
import React, { Component } from 'react';

import { NavComponent, BasicSceneComponent, SocialMediaComponent } from '../../components/common';

class SceneTemplateContainer extends Component {

    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <>
                <NavComponent />
                <BasicSceneComponent />
                <SocialMediaComponent />
            </>

        );
    }
}

export default SceneTemplateContainer;