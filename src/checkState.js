import React from 'react';
import {
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
let List = require("collections/list");
class CheckState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {serviceId: new List(),serviceName: new List(), serviceStatus: new List()};
    }

    async componentDidMount() {
        try {
            setInterval(async () => {
                const res = await fetch('http://localhost:8080/services/getStatuses').then(response => response.json());

                this.setState({serviceId: new List(),serviceName: new List(), serviceStatus: new List()});
                let servicesId = new List();
                let servicesName = new List();
                let servicesStatus = new List();
                for (let e of res) {
                    servicesId.add(e['serviceId']);
                    servicesName.add(e['serviceName']);
                    servicesStatus.add(e['serviceStatus']);
                }
                this.setState({serviceId: servicesId,serviceName: servicesName, serviceStatus: servicesStatus});
//console.log(this.state.serviceId.toArray()[2]);
            }, 300);
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const list = [];
        for (let i =0; i < this.state.serviceName.length; i++) {
            if (this.state.serviceStatus.toArray()[i] == "RUNNING") {
                list.add(React.createElement(NavLink, {to: this.state.serviceId.toArray()[i]}, [<CDBSidebarMenuItem
                    icon="columns">{this.state.serviceName.toArray()[i]}</CDBSidebarMenuItem>]))
            }
        }
        return list;
    }
}

export default CheckState;