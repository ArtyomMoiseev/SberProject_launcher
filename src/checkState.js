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
                const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                let f = [
                    {
                        "serviceId": "c4cecea2-5edd-43c0-a4df-8b7b1eecaba9",
                        "serviceName": "One",
                        "serviceStatus": ""
                    },
                    {
                        "serviceId": "b2f0c9a1-040a-4690-820e-3eed57cff5ae",
                        "serviceName": "Two",
                        "serviceStatus": "RUNNING"
                    },
                    {
                        "serviceId": "bbadc8c5-476e-4020-9b98-bf87c9aa0ea3",
                        "serviceName": "Three",
                        "serviceStatus": "RUNNING"
                    },
                    {
                        "serviceId": "677c1d48-57c9-4d8f-b23f-1322eaf5f278",
                        "serviceName": "Four",
                        "serviceStatus": "RUNNING"
                    },
                    {
                        "serviceId": "db62ad5a-e5a6-456e-907c-4fedae6fd0e7",
                        "serviceName": "Five",
                        "serviceStatus": "RUNNING"
                    }
                ]
                this.setState({serviceId: new List(),serviceName: new List(), serviceStatus: new List()});
                let servicesId = new List();
                let servicesName = new List();
                let servicesStatus = new List();
                for (let e of f) {
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
        //return (<NavLink exact to="/app1" activeClassName="activeClicked" n>
        //    <CDBSidebarMenuItem icon="columns">{this.state.serviceName.toArray()[2]}</CDBSidebarMenuItem>
        //</NavLink>);
    }
}

export default CheckState;