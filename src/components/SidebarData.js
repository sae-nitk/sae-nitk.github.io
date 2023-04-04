import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    subnavbool: false
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <IoIcons.IoIosPaper />,
    subnavbool: false
  },
  {
    title: 'SMP',
    path: '/smp',
    icon: <IoIcons.IoIosPaper />,
    subnavbool: false
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <IoIcons.IoIosPaper />,
    subnavbool: false
  },
  {
    title2: 'Members',
    path: '#',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnavbool: true,
    subNav: [
      {
        title: 'Current Team',
        path: '/club',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title: 'Alumni',
        path: '/alumni',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title2: 'Projects',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnavbool: true,

    subNav: [
      {
        title: '2021-2022',
        path: '/project-expo-2021-2022',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '2020-2021',
        path: '/project-expo-2020-2021',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '2019-2020',
        path: '/project-expo-2019-2020',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }  
    ]
  },
  {
    title2: 'Magazine',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnavbool: true,

    subNav: [
      {
        title: '2022-2023',
        path: '/magazine-2022-2023',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '2021-2022',
        path: '/magazine-2021-2022',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '2020-2021',
        path: '/magazine-2020-2021',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '2019-2020',
        path: '/magazine-2019-2020',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  
  {
    title: 'Events',
    path: '/events',
    icon: <IoIcons.IoIosPaper />,
    subnavbool: false
  },
];