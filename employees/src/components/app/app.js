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
                { name: 'John Cena', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Dave Batista', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Dwayne Johnson', salary: 5000, increase: false, rise: false, id: 3 },
            ],
            term: '',
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
                rise: false,
                id: maxId
            };

            const newArr = [...data, newItem]; // иммутабельное добавление

            return {
                data: newArr,
                maxId: maxId + 1
            };
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        });
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    render() {
        const {data, term} = this.state;
        const employeesCount = this.state.data.length;
        const increasedCount = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);
        
        return (
            <div className="app">
                <AppInfo
                    employeesCount={employeesCount}
                    increasedCount={increasedCount}
                />
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;