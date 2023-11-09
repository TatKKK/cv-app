import { validate } from './validate'; 

describe('validate', () => {
    it('should report error when name is missing', () => {
        const values = { range: 50 };
        expect(validate(values)).toEqual({ name: "Skill name is a required field" });
    });

    it('should report error when range is missing', () => {
        const values = { name: 'Skill1' };
        expect(validate(values)).toEqual({ range: "Skill range is a required field" });
    });

    it('should report error when range is less than 10', () => {
        const values = { name: 'Skill1', range: 9 };
        expect(validate(values)).toEqual({ range: "Skill range must be greater than or equal to 10" });
    });

    it('should report error when range is greater than 100', () => {
        const values = { name: 'Skill1', range: 101 };
        expect(validate(values)).toEqual({ range: "Skill range must be less than or equal to 100" });
    });

    it('should report error when range is not a number', () => {
        const values = { name: 'Skill1', range: 'a' };
        expect(validate(values)).toEqual({ range: "Skill range must be a 'number' type" });
    });

    it('should pass validation for valid inputs', () => {
        const values = { name: 'Skill1', range: 50 };
        expect(validate(values)).toEqual({});
    });
});
