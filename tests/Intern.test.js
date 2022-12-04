const Intern = require('../classes/intern');
const internTest = new Intern ('Emma', '54123', 'emma@dell.com', 'University of Washington');

describe('internTest', () => {
    // Test for constructor values
    it('should input the given intern values within the constructor values', () => {
        expect(intern.name).toBe('Emma');
        expect(intern.id).toBe('54123');
        expect(intern.email).toBe('emma@dell.com');
        expect(intern.school).toBe('University of Washington');
      });
    // Test for getName() function
    it('should return the intern name from getName() function', () => {
        expect(intern.getName()).toBe('Emma');
      });
    // Test for getId() function
    it('should return the intern id from getId() function', () => {
        expect(intern.getId()).toBe('54123');
      });
    // Test for getEmail() function
    it('should return the intern email from getEmail() function', () => {
        expect(intern.getEmail()).toBe('emma@dell.com');
      });
    // Test for getSchool() function
    it('should return the intern school from getSchool() function', () => {
        expect(intern.getSchool()).toBe('University of Washington');
      });
    // Test for getRole() function
    it('should return the intern status from getRole() function', () => {
        expect(intern.getRole()).toBe('Intern');
      });
})