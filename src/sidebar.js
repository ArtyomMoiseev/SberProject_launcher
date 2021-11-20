import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}
                    >
                        Sidebar
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns" >Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Tables</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Analytics</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                {/*<CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu >
                        <NavLink exact to="/app1" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/app2" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Tables</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/app3" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/app4" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Analytics
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>*/}

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;