const Manager = require('../classes/manager');
const managerTest = new Manager ('Nicole', '54124', 'nicole@dell.com', '5412');

describe('managerTest', () => {
    // Test for constructor values
    it('should input the given manager values within the constructor values', () => {
        expect(manager.name).toBe('Nicole');
        expect(manager.id).toBe('54124');
        expect(manager.email).toBe('nicole@dell.com');
        expect(manager.school).toBe('5412');
      });
    // Test for getName() function
    it('should return the manager name from getName() function', () => {
        expect(manager.getName()).toBe('Nicole');
      });
    // Test for getId() function
    it('should return the manager id from getId() function', () => {
        expect(manager.getId()).toBe('54124');
      });
    // Test for getEmail() function
    it('should return the manager email from getEmail() function', () => {
        expect(manager.getEmail()).toBe('nicole@dell.com');
      });
    // Test for getRole() function
    it('should return the manager status from getRole() function', () => {
        expect(manager.getRole()).toBe('Manager');
      });
})