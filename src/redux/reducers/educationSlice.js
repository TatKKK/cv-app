import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEducation = createAsyncThunk(
    'content/fetchEducation',
    async () => {
        try {
            const response = await fetch('/api/education'); 
            if (response.ok) {
                const education = await response.json();
                return education;
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            throw error;
        }
    }
);

const educationSlice = createSlice({
    name: 'education',
    initialState: {
        data: [],
        status: 'loading',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEducation.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchEducation.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        });
        builder.addCase(fetchEducation.rejected, (state) => {
            state.status = 'failure';
        });
    },
});

const educationReducer = educationSlice.reducer;
export default educationReducer;


