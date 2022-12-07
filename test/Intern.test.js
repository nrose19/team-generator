const Intern = require('../classes/intern');
const internTest = new Intern ('Emma', '54123', 'emma@dell.com', 'University of Washington');

describe('internTest', () => {
    // Test for constructor values
    it('should input the given intern values within the constructor values', () => {
        expect(Intern.name).toBe('Emma');
        expect(Intern.id).toBe('54123');
        expect(Intern.email).toBe('emma@dell.com');
        expect(Intern.school).toBe('University of Washington');
      });
    // Test for getName() function
    it('should return the intern name from getName() function', () => {
        expect(Intern.getName()).toBe('Emma');
      });
    // Test for getId() function
    it('should return the intern id from getId() function', () => {
        expect(Intern.getId()).toBe('54123');
      });
    // Test for getEmail() function
    it('should return the intern email from getEmail() function', () => {
        expect(Intern.getEmail()).toBe('emma@dell.com');
      });
    // Test for getSchool() function
    it('should return the intern school from getSchool() function', () => {
        expect(Intern.getSchool()).toBe('University of Washington');
      });
    // Test for getRole() function
    it('should return the intern status from getRole() function', () => {
        expect(Intern.getRole()).toBe('Intern');
      });
})