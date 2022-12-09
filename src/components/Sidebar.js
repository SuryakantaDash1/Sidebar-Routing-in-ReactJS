import React from 'react'
import { FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Sidebar({children}) {
    const menuItem=[
        {
            path:"/",
            name:"/Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"/About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"/Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"/Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"/Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"/ProductList",
            icon:<FaThList/>
        }
    ]
  return (
    <>
    <div className="container">
        <div className="sidebar">
            <div className="top_section">
                <h1 className="logo">Logo</h1>
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            {
                menuItem.map((item, index)=> (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
    </>
  );
};

export default Sidebar