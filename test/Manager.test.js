const Manager = require('../classes/manager');
const managerTest = new Manager ('Nicole', '54124', 'nicole@dell.com', '5412');

describe('managerTest', () => {
    // Test for constructor values
    it('should input the given manager values within the constructor values', () => {
        expect(Manager.name).toBe('Nicole');
        expect(Manager.id).toBe('54124');
        expect(Manager.email).toBe('nicole@dell.com');
        expect(Manager.school).toBe('5412');
      });
    // Test for getName() function
    it('should return the manager name from getName() function', () => {
        expect(Manager.getName()).toBe('Nicole');
      });
    // Test for getId() function
    it('should return the manager id from getId() function', () => {
        expect(Manager.getId()).toBe('54124');
      });
    // Test for getEmail() function
    it('should return the manager email from getEmail() function', () => {
        expect(Manager.getEmail()).toBe('nicole@dell.com');
      });
    // Test for getRole() function
    it('should return the manager status from getRole() function', () => {
        expect(Manager.getRole()).toBe('Manager');
      });
})