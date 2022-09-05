import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {GiGameConsole} from "react-icons/gi";
import {useSelector} from "react-redux";

const Layout = () => {
    const auth = useSelector(state => state.auth)
    return (
        <>
            <header className="d-flex justify-content-between mt-2">
                <NavLink to='/'><GiGameConsole fontSize={30}/> Game store</NavLink>
                <div className="d-flex gap-3">
                    <NavLink to='/basket'><AiOutlineShoppingCart fontSize={25}/> 0 грн.</NavLink>
                    {/*{!auth ?  <NavLink to='/basket'><AiOutlineShoppingCart fontSize={25}/></NavLink>*/}
                    {/*    :  <NavLink to='/basket'><AiOutlineShoppingCart fontSize={25}/></NavLink>}*/}
                    {auth ?  <NavLink to='/adminPanel'>adminPanel</NavLink> : ''}
                </div>
            </header>
            <Outlet/>
        </>
    );
};

export default Layout;