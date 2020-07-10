import React, { useState } from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";

import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import cx from 'classnames';

import "./style.css";

function App() {

    const [toggle, setToggle] = useState(false);

    const classes = cx(
      'pusher',
      'bottom',
      {'dimmed': toggle}
    );

    function toggleMenu() {
      setToggle(!toggle);
    }

    return (
      <div>
        <Header onToggleMenu={toggleMenu}/>

        <div className="ui attached pushable" style={{height: '100vh'}}>
          <Sidebar toggleMenu={toggle}/>
          <div className={classes}>
            <Main />
          </div>
        </div>
      </div>
    );
}

render(<App />, document.getElementById("root"));
