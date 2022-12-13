class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }

    set name(value) {
        if (value.length < 2) {
            alert("name should be longer");
            return;
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set age(value) {
        if (value < 18) {
            alert("you must be over 18")
            return;
        }
        this._age = value;
    }

    get age() {
        return this._age;
    }

    set salary(value) {
        if (value < 0) {
            alert("salary cannot be negative number");
            return;
        }
        this._salary = value;
    }

    get salary() {
        return this._salary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this._lang = lang;
    }

    set lang(value) {
        if (value.length === 0) {
            alert("Are you not a programmer?");
            return;
        }
        this._lang = value;
    }

    get lang() {
        return this._lang;
    }

    get salary() {
        return this._salary * 3;
    }
}

let a = new Employee("anastasiia", 22, 11000000000);
let b = new Programmer("asy", 22, 1000000, "JavaScript");
let c = new Programmer("vitalii", 40, Number.MAX_SAFE_INTEGER, "Javascript/Typescript, Java, Swift, C++");
let d = new Programmer("Karina", 25, 1000, "");

console.log(a)
console.log(b)
console.log(c)
console.log(d)
