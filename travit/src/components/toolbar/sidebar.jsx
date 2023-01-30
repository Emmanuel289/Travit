import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebardata';
import { SubMenu } from './submenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 1rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  background-color: black;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
              <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
              </NavIcon>
              <h1
                style={{ textAlign: "center",
                         marginLeft: "50px",
                         color: "white" }}
              >
                Travit
              </h1>
            </Nav>
            <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to="#">
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        </>
      );
    };

export { Sidebar };

