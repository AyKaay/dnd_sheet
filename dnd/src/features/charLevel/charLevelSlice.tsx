import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialLevel: number = 1;

const charLevelSlice = createSlice({
    name: 'charLevel',
    initialState: initialLevel,
    reducers: {
        setLevel(state, action: PayloadAction<number>) {
            return action.payload;
        },
    },
});

export const { setLevel } = charLevelSlice.actions;
export default charLevelSlice.reducer;

