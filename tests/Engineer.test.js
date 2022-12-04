const Engineer = require('../classes/engineer');
const engineerTest = new Engineer ('Josie', '54122', 'josie@dell.com', 'josie54122');

describe('engineerTest', () => {
    // Test for constructor values
    it('should input the given engineer values within the constructor values', () => {
        expect(engineer.name).toBe('Josie');
        expect(engineer.id).toBe('54122');
        expect(engineer.email).toBe('josie@dell.com');
        expect(engineer.github).toBe('josie54122');
      });
    // Test for getName() function
    it('should return the engineer name from getName() function', () => {
        expect(engineer.getName()).toBe('Josie');
      });
    // Test for getId() function
    it('should return the engineer id from getId() function', () => {
        expect(engineer.getId()).toBe('54122');
      });
    // Test for getEmail() function
    it('should return the engineer email from getEmail() function', () => {
        expect(engineer.getEmail()).toBe('josie@dell.com');
      });
    // Test for getGitHub() function
    it('should return the engineer github account from getGitHub() function', () => {
        expect(engineer.getGitHub()).toBe('josie54122');
      });
    // Test for getRole() function
    it('should return the engineer status from getRole() function', () => {
        expect(engineer.getRole()).toBe('Engineer');
      });
})