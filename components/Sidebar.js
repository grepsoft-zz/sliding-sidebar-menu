import React, { useEffect } from 'react';
import cn from 'classnames';

function Sidebar(props) {

  const classes = cn(
    'ui', 'sidebar', 'overlay', 'top', 'inverted', 'menu', 'animating',
    {'visible' : props.toggleMenu}
  );


  return(
    <div className={classes}>
    <ul>
      <li className="item link">Item 1</li>
      <li className="item link">Item 2</li>
      <li className="item link">Item 3</li>
      <li className="item link">Item 4</li>
    </ul>
    </div>
  );
}

export default Sidebar;