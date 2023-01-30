import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
      title: "About Us",
      path: "/home",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
   
      subNav: [
        {
          title: "Our Aim",
          path: "/home/aim",
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: "Our Vision",
          path: "/home/vision",
          icon: <IoIcons.IoIosPaper />,
        },
      ],
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <FaIcons.FaPhone />,
    },
  ];