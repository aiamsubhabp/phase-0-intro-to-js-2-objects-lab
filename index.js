/*// Write your solution in this file!
const employee = {
//name: "Kevin",
//streetAddress: "Maple Ave"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const update = {...employee};
    update[key] = value;
    return update;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const update = {...employee};
    delete update[key];
    return update;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
*/


const employee = {
    name: 'Paul',
    streetAddress: 'rockville pike' 
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]:value
    }

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let employeeUpdate = {...employee};
    delete employeeUpdate[key];
    return employeeUpdate;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;

}