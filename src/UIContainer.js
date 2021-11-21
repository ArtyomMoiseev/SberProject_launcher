import React, {Component} from "react";
import './container.css'
import Shop from './apps/shop/root.component';
import Music from './apps/app/src/root.component';

let s = React.createElement(Shop);
let m = React.createElement(Music)

class UIContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {elm: React.createElement("h1",{}, [m])}
    }

    show(elm) {
        this.setState({elm: Shop})
    }

    render() {
        return this.state.elm;
    }
}

export default UIContainer;