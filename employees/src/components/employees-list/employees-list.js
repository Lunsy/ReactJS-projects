import EmployeesListItem from "../employees-list-items/employees-list-item";

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    )
}

export default EmployeesList;