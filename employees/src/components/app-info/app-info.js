import './app-info.css';
const AppInfo = ({ increasedCount, employeesCount }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании L</h1>
            <h2>Общие число сотрудников: {employeesCount}</h2>
            <h3>Премию получат: {increasedCount}</h3>
        </div>
    );
}

export default AppInfo;