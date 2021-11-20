import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
} from 'cdbreact';
import './sidebar.css'
import UIContainer from "./UIContainer";
import CheckState from "./checkState";

class Sidebar extends React.Component {
    render() {
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
                            Сервисы
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <CheckState updateState={this.updateData}/>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Хакатон 21
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        );
    }
};

export default Sidebar;