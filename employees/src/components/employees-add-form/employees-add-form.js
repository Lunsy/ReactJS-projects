import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        const trimmedName = name.trim();
        const numericSalary = +salary;

        if (trimmedName.length <= 3) {
            this.setState({ error: 'Имя должно быть длиннее 3 символов!' });
            return;
        }

        if (numericSalary <= 500) {
            this.setState({ error: 'Зарплата должна быть выше $500!' });
            return;
        }

        this.props.onAdd(trimmedName, numericSalary);
        this.setState({ name: '', salary: '', error: '' });
    }

    render() {
        const { name, salary, error } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>

                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>

                {/* Контейнер под сообщение */}
                <div className="error-container">
                    {error && <div className="alert alert-warning">{error}</div>}
                </div>
            </div>
        );
    }
}

export default EmployeesAddForm;
