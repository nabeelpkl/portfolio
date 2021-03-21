import FsLightbox from "fslightbox-react";
import React, {useState} from "react";
// import * as Icon from "react-feather";
import LineIcon from 'react-lineicons';
import ProgressiveImage from 'react-progressive-image';

function Portfolio(props) {
    const [toggler, setToggler] = useState(false);
    const {title, subtitle, imageUrl, largeImageUrl, url, android, ios} = props.content;

    const handleToggler = (value) => {
        setToggler(value);
    }

    return (
        <div className="mi-portfolio mi-portfolio-visible">
            <div className="mi-portfolio-image">
                {/* <img src={imageUrl} alt={title} /> */}
                <ProgressiveImage
                    src={imageUrl}
                    placeholder="/images/portfolio-image-placeholder.png"
                >
                    {src => <img src={src} alt={title}/>}
                </ProgressiveImage>
                <ul>
                    {url ? <li>
                        <a rel="noopener noreferrer" target="_blank" href={url}
                           style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                            <LineIcon name="website"/>
                        </a>
                    </li> : null}
                    {android ? <li>
                        <a rel="noopener noreferrer" target="_blank" href={android}
                           style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                            <LineIcon name="android"/>
                        </a>
                    </li> : null}
                    {ios ? <li>
                        <a rel="noopener noreferrer" target="_blank" href={ios}
                           style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                            <LineIcon name="apple"/>
                        </a>
                    </li> : null}
                </ul>
            </div>
            {!url ? <h5>{title}</h5> : <h5>
                <a rel="noopener noreferrer" target="_blank" href={url}>
                    {title}
                </a>
            </h5>}
            {subtitle ? <h6>{subtitle}</h6> : null}
            {!largeImageUrl ? null : <FsLightbox
                toggler={toggler}
                sources={largeImageUrl}
            />
            }
        </div>
    );
}

export default Portfolio;
