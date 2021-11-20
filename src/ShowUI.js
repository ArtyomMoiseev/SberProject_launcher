import React from 'react';

class ShowUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {services: this.getServices, tempServices: this.getServices};
    }

    componentDidMount() {
        this.getServices();
        this.timer = setInterval(() => this.getServices(), 3000);
    }

    componentWillUnmount() {
        this.timer = null;
    }

    getServices = () => {
        this.setState({...this.state, isFetching: true})
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => response.json())
            .then(json => {
                var array = [];
                for (var elem of json) {
                    array.push(elem)
                }
                return array;
            })
            .then(result => this.setState({services: result,
                isFetching: false}))
            .catch(e => console.log(e));
    }


    render() {
        return (
            <div className="books">
                {this.state.services && this.state.services.map((index) => {
                    return (<div key={index}>index</div>);
                })}
            </div>
        );
    }
}

export default ShowUI;