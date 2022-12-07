// Manager Class is looking for:
//  * `name`
//  * `id`
//  *  `email
// **  `officeNumber
//  *  `getName()`
//  *  `getId()`
//  *  `getEmail()`
//  *  `getRole()`&mdash; overrides Employee returns `'Manager'`


const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;