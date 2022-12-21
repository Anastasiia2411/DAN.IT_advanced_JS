const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
}

let {name, surname, salary = 1000, age = 34} = employee;

employee2 = {
    name: name,
    surname: surname,
    salary: salary,
    age: age,
}

console.log(employee);
console.log(employee2);






