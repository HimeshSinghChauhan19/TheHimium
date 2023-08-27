import React, { useState } from "react";

import FsLightbox from "fslightbox-react";
import {Link} from 'react-router-dom';

function Portfolio(props) {
  const [toggler,] = useState(false);
  const {title, subtitle, largeImageUrl, url} = props.content;
  
  

  return (
    <div className={props.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"}>
      {/* <div className="mi-portfolio-image">
        <img src={imageUrl} alt={title} />
        <ul>
          {!largeImageUrl ? null : <li>
            <button onClick={() => handleToggler(!toggler)}>
              <Icon.ZoomIn/>
            </button>
          </li>}
          { url ? <li>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <Icon.Link/>
            </a>
          </li> : null}
        </ul>
      </div> */}

      
      {!url ? <h5>{title}</h5> : <h5>
        <Link style={{'text-decoration':'none'}}  rel="noopener noreferrer" target="_blank" to={url}>
          {title}
        </Link>
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
