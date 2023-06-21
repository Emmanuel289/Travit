import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
      title: "Login",
      path: "/login",
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
