import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store'

type Skill = {
  name_skills: string
  skills: Array<String>
};

export type ResumeState = {
  experience: Array<Skill>
};

const initialState: ResumeState = {
  experience: [],
};

export const resumeSlise = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<ResumeState>) => {
      const { payload } = action;
      const keys = Object.keys(payload);
      const values = Object.values(payload);
      for (let i = 0; i <= keys.length - 1; i += 1) {
        state[keys[i]] = values[i];
      }
    },
  },
});

export const { setField } = resumeSlise.actions;
export default resumeSlise.reducer;
