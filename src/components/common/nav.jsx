import React, { useEffect } from 'react';
import '../assets/css/index.scss';

import { Link } from 'react-router-dom';

const NavComponent = () => {

    useEffect(() => {
        var element = document.getElementById("arjs-video");
        if (element) element.parentNode.removeChild(element);
       
    })

    return (
        <>
            <div className="nav">
                <Link to="/"><button>Tracking Square</button></Link><br/><br/>
                <Link to="/earth"><button>Tracking Earth-Image</button></Link><br/><br/>
                <Link to='/model'><button>Tracking 3D-Model</button></Link><br/><br/>
                <a href='/#/basicScene'><button>3D-Scene</button></a>
            </div>
        </>
    )
}

export { NavComponent };