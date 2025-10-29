import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26,
            text: '+++'
        }
    }

    nextYear = () => {

        this.setState(state => ({
            years: state.years + 1
        }));
    }

    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years} </h1>
                <a href={link}>My profile</a>
            </div >
        );
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name='John' surname="Smith" link="facebook.com/johnsmith" />
            <WhoAmI name='Alex' surname="Johnson" link="facebook.com/alexjohnson" />
            <WhoAmI name='Sarah' surname="Williams" link="facebook.com/sarahwilliams" />
        </div>
    );
}

export default App;