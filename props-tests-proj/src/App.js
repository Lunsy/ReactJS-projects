
import './App.css';

function WhoAmI({ name, surname, link }) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <WhoAmI name={() => { return 'John' }} surname="Smith" link="facebook.com/johnsmith" />
            <WhoAmI name={() => { return 'Alex' }} surname="Johnson" link="facebook.com/alexjohnson" />
            <WhoAmI name={() => { return 'Sarah' }} surname="Williams" link="facebook.com/sarahwilliams" />
        </div>
    );
}

export default App;