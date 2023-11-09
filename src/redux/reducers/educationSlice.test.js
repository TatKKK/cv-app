import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './educationSlice';
import thunk from 'redux-thunk';
import { fetchEducation } from './educationSlice';




describe('fetchEducation thunk', () => {
  
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ education: [{ id: 1, name: 'Test Education' }] }),
    })
  );

  /*it('should update the state correctly on success', async () => {
    const store = configureStore({ reducer: { education: educationReducer }, middleware: [thunk] });

    await store.dispatch(fetchEducation());
    const state = store.getState().education;

    expect(state.status).toBe('success');
    expect(state.data).toEqual([{ id: 1, name: 'Test Education' }]);
  });
*/
  it('should update the state correctly on failure', async () => {
    fetch.mockRejectedValue(new Error('Network response was not ok.'));

    const store = configureStore({ reducer: { education: educationReducer }, middleware: [thunk] });

    await store.dispatch(fetchEducation());
    const state = store.getState().education;

    expect(state.status).toBe('failure');
    
  });
});

