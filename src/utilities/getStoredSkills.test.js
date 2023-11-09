import { storeSkills } from './storeskills';
import { getStoredSkills } from './getStoredSkills';


jest.mock('./getStoredSkills', () => ({
  getStoredSkills: jest.fn(),
}));
Storage.prototype.setItem = jest.fn();

beforeEach(() => {
  getStoredSkills.mockClear();
  Storage.prototype.setItem.mockClear();
});


it('should store skills when there are no previously stored skills', () => {
    const skills = ['JavaScript', 'React'];
    getStoredSkills.mockReturnValueOnce(null);
  
    storeSkills(skills);
  
    expect(getStoredSkills).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('skills', JSON.stringify(skills));
  });
  
  it('should merge and store skills with previously stored skills', () => {
    const newSkills = ['TypeScript', 'Vue.js'];
    const storedSkills = ['JavaScript', 'React'];
    getStoredSkills.mockReturnValueOnce(storedSkills);
  
    storeSkills(newSkills);
  
    expect(getStoredSkills).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'skills',
      JSON.stringify([...newSkills, ...storedSkills])
    );
  });
  
