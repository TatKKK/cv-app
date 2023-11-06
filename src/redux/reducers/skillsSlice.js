import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storeSkills } from "../../utilities/storeSkills";
import { getStoredSkills } from "../../utilities/getStoredSkills";

export const fetchSkills = createAsyncThunk(
    'content/fetchSkills',
    async () => {
        try {
            const res = await fetch('/api/skills'); 
            if (!res.ok) {
                throw new Error('Failed to fetch skills');
            }
            const skills = await res.json();
            return skills;
        } catch (error) {
            throw error;
        }
    }
)

export const postSkills = createAsyncThunk(
    'content/postSkills',
    async (data) => {
        try {
            const res = await fetch('/api/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok.');
            }

            const skill = await res.json();
            return skill;
        } catch (error) {
            throw error;
        }
    }
)

const skillSlice = createSlice({
    name: 'skills',
    initialState: {
        skillsIsOpen: false,
        data: {
            skills: getStoredSkills() || [],
        },
        status: 'loading',
    },
    reducers: {
        toggleForm: (state) => {
            state.skillsIsOpen = !state.skillsIsOpen;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSkills.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(fetchSkills.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        builder.addCase(fetchSkills.rejected, (state) => {
            state.status = 'failure';
        })
        builder.addCase(postSkills.fulfilled, (state, action) => {
            state.data.skills.push(action.payload);
            storeSkills(state.data.skills);
        })
    },
});

export const { toggleForm } = skillSlice.actions;

const skillsReducer = skillSlice.reducer;
export default skillsReducer;
