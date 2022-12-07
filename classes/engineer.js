// Engineer Class is looking for:
//  * `name`
//  * `id`
//  *  `email
// **  `GitHub 
//  *  `getName()`
//  *  `getId()`
//  *  `getEmail()`
// **  `getGitHub()`
//  *  `getRole()`&mdash; overrides Employee returns `'Engineer'`

const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer;