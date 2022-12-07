const Employee = require('../classes/employee');
const employeeTest = new Employee ('Lily', '54121', 'lily@dell.com');

describe('employeeTest', () => {
    // Test for constructor values
    it('should input the given employee values within the constructor values', () => {
        expect(Employee.name).toBe('Lily');
        expect(Employee.id).toBe('54121');
        expect(Employee.email).toBe('lily@dell.com');
      });
    // Test for getName() function
    it('should return the employee name from getName() function', () => {
        expect(Employee.getName()).toBe('Lily');
      });
    // Test for getId() function
    it('should return the employee id from getId() function', () => {
        expect(Employee.getId()).toBe('54121');
      });
    // Test for getEmail() function
    it('should return the employee email from getEmail() function', () => {
        expect(Employee.getEmail()).toBe('lily@dell.com');
      });
    // Test for getRole() function
    it('should return the employee status from getRole() function', () => {
        expect(Employee.getRole()).toBe('Employee');
      });
})