// Intern Class is looking for:
//  * `name`
//  * `id`
//  *  `email
// **  `school 
//  *  `getName()`
//  *  `getId()`
//  *  `getEmail()`
// **  `getSchool()`
//  *  `getRole()`&mdash; overrides Employee returns `'Intern'`

const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return Intern.name;
    }
}