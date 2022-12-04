const Employee = require('../classes/employee');
const employeeTest = new Employee ('Lily', '54121', 'lily@dell.com');

describe('employeeTest', () => {
    // Test for constructor values
    it('should input the given employee values within the constructor values', () => {
        expect(employee.name).toBe('Lily');
        expect(employee.id).toBe('54121');
        expect(employee.email).toBe('lily@dell.com');
      });
    // Test for getName() function
    it('should return the employee name from getName() function', () => {
        expect(employee.getName()).toBe('Lily');
      });
    // Test for getId() function
    it('should return the employee id from getId() function', () => {
        expect(employee.getId()).toBe('54121');
      });
    // Test for getEmail() function
    it('should return the employee email from getEmail() function', () => {
        expect(employee.getEmail()).toBe('lily@dell.com');
      });
    // Test for getRole() function
    it('should return the employee status from getRole() function', () => {
        expect(employee.getRole()).toBe('Employee');
      });
})