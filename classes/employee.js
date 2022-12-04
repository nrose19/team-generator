// Employee Class is looking for:
//  * `name`
//  * `id`
//  *  `email
//  *  `getName()`
//  *  `getId()`
//  *  `getEmail()`
//  *  `getRole()`&mdash;returns `'Employee'`

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return Employee.name;
    }
}

module.exports = Employee;