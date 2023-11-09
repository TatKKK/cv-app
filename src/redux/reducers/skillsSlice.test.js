import skillsReducer, { fetchSkills, toggleForm } from './skillsSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('skillsReducer', () => {
  const initialState = {
    skillsIsOpen: false,
    data: { skills: [] },
    status: 'loading',
  };

  it('should handle initial state', () => {
    expect(skillsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle toggleForm', () => {
    const actual = skillsReducer(initialState, toggleForm());
    expect(actual.skillsIsOpen).toEqual(!initialState.skillsIsOpen);
  });

  // Mock fetch API for testing async actions
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, skill: 'Test Skill' }]),
    })
  );

  /*it('handles fetchSkills.fulfilled', async () => {
    const store = configureStore({ reducer: { skills: skillsReducer } });
    await store.dispatch(fetchSkills());
    const state = store.getState().skills;
    expect(state.data).toEqual([{ id: 1, skill: 'Test Skill' }]);
    expect(state.status).toBe('success');
  });
*/

});
