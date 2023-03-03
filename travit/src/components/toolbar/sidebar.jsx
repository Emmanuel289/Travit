import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebardata';
import { SubMenu } from './submenu';
import { IconContext} from 'react-icons/lib';

const title = 'Travit';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
      setSidebar(!sidebar);
    }

    const sidebarNavStyle = {
      width: '150px',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: sidebar ? "0": "-100%",
      transition: '400ms',
      zIndex: 10,
      backgroundColor: '#0053db',
    }

    return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="title">{title}</div>
            <div className="nav">
              <NavLink className="nav-link" to="#">
                {<div>{sidebar ? <AiIcons.AiOutlineClose  onClick={showSidebar} />: <FaIcons.FaBars onClick={showSidebar} />}</div>}
              </NavLink>
            </div>
            <nav 
              className="sidebar" 
              style={sidebarNavStyle}
              >
              <div className="sidebar-wrap">
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </div>
            </nav>
          </IconContext.Provider>
        </>
      );
    };
    
export { Sidebar };