   
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import {  FcHome, FcAreaChart, FcManager, FcDebian } from 'react-icons/fc';
import { GiPolarStar } from 'react-icons/gi';
// import {  } from 'react-icons/'

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <FcHome />, //<i className='bx bx-home'></i>,  //npm install react-icons --save //https://react-icons.github.io/react-icons
        to: '/',
        section: ''
    },
    {
        display: 'Getting Started',
        icon: <GiPolarStar/>,
        to: '/index',
        section: 'started'
    },
    {
        display: 'Report',
        icon: <FcAreaChart />,
        to: '/report',
        section: 'report'
    },
    {
        display: 'User',
        icon: <FcManager />,
        to: '/user',
        section: 'user'
    },
    {
        display: 'About',
        icon: <FcDebian />,
        to: '/about',
        section: 'about'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Account Details
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            {/* <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div> */}
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;