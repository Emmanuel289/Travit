import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
      title: "Sign in",
      path: "/signin",
      icon: <AiIcons.AiFillLock />,
    },
    {
      title: "Sign up",
      path: "/signup",
      icon: <AiIcons.AiFillPlusCircle/>,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <FaIcons.FaPhone />,
    },
  ];