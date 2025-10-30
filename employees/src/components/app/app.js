import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John Cena', salary: 800, increase: false, id: 1 },
                { name: 'Dave Batista', salary: 3000, increase: true, id: 2 },
                { name: 'Dwayne Johnson', salary: 5000, increase: false, id: 3 },
            ],
            maxId: 4,
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }));
    }

    addItem = (name, salary) => {
        if (!name || !salary) return; // простая валидация

        this.setState(({ data, maxId }) => {
            const newItem = {
                name,
                salary: +salary, // делаем число
                increase: false,
                id: maxId
            };

            const newArr = [...data, newItem]; // иммутабельное добавление

            return {
                data: newArr,
                maxId: maxId + 1
            };
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;