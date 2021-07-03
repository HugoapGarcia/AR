import React from 'react';
import '../assets/css/index.scss';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const SocialMediaComponent = () => {

    return (
        <>
            <div className="fb">
                <FacebookShareButton
                    url={' https://hugoapgarcia.github.io/AR/'}
                    quote={"AR-Experience"}
                    hashtag="#AR">
                    <FacebookIcon />
                </FacebookShareButton>
            </div>
            <div className="tw">
                <TwitterShareButton
                    url={' https://hugoapgarcia.github.io/AR/'}
                    title={"AR-Experience"}
                    hashtag="#AR">
                    <TwitterIcon />
                </TwitterShareButton>
            </div>
            <div className="link">
                <LinkedinShareButton
                    url={' https://hugoapgarcia.github.io/AR/'}
                    title={"AR-Experience"}
                    hashtag="#AR">
                    <LinkedinIcon />
                </LinkedinShareButton>
            </div>
        </>
    )
}

export { SocialMediaComponent };