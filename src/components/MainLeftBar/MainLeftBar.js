import { useState } from "react";
import MainLeftBarMenu from '../MainLeftBarMenu/MainLeftBarMenu';

export default function MainLeftBar(props) {

    const [visible, setVisible] = useState(false);
  
    const toggleVisibility = () => setVisible(!visible);
  
    return (
                <nav className="main__nav nav">
                      <div className="nav__logo logo">
                          <img className="logo__image" src={props.logoUrl} alt="logo" />
                      </div>
  
                      <div role="presentation" className="nav__burger burger" onClick={toggleVisibility} onKeyDown={toggleVisibility}>
                      <span className="burger__line" />
                          <span className="burger__line" />
                          <span className="burger__line" />
                      </div>
                      
                      {visible && (<MainLeftBarMenu menuItemMainUrl="http://"
                        menuItemPlayListUrl="http://" menuItemEnterUrl="http://" />
                        )}
                      
                </nav>
    );
  }