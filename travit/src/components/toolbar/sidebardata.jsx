import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
      title: "Home",
      path: "/home",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
      title: "SignIn",
      path: "/signin",
      icon: <AiIcons.AiFillLock />,
    },
    {
      title: "SignUp",
      path: "/signup",
      icon: <AiIcons.AiFillPlusCircle/>,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <FaIcons.FaPhone />,
    },
  ];