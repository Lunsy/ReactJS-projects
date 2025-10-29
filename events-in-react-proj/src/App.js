import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26,
            position: ''
        }
    }

    nextYear = () => {

        this.setState(state => ({
            years: state.years + 1
        }));
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h1>
                    My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}
                </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность:</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
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