import React from 'react';
import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import UIContainer from "./UIContainer";

class App extends React.Component {
    updateData = (value) => {
        this.setState({currentId: value});
        console.log(this.state.currentId);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Sidebar updateData={this.updateData}/>
                    <UIContainer />
                </div>
            </Router>
        );
    }
}

export default App;
