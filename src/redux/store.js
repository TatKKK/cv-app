import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './reducers/skillsSlice';
import educationReducer from './reducers/educationSlice';

const store = configureStore({
    reducer: {
        skills: skillsReducer,
        education: educationReducer,
    }
});

export default store;

