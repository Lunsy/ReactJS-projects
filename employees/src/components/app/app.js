import AppInfo from '../app-info/app-info';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                {/* SearchPanel component will go here */}
            </div>
            <div className="app-list">
                {/* AppList component will go here */}
            </div>
        </div>
    );
}

export default App;