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
                <Link to="/"><button>Tracking Square</button></Link>
                <Link to="/earth"><button>Tracking Earth-Image</button></Link>
                <Link to='/model'><button>Tracking 3D-Model</button></Link>
                <Link to='/animation'><button>Tracking 3D-Animation</button></Link>
                <Link to='/basicScene'><button>3D-Scene</button></Link>
            </div>
        </>
    )
}

export { NavComponent };