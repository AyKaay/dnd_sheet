import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AbilityScores = {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}

const initialState: AbilityScores = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
};

const abilityScoreSlice = createSlice({
    name: 'abilityScore',
    initialState,
    reducers: {
        setScore(state, action: PayloadAction<{ ability: keyof AbilityScores; value: number }>) {
            const { ability, value } = action.payload;
            state[ability] = value;
        },
    }
});

export const { setScore } = abilityScoreSlice.actions;
export default abilityScoreSlice.reducer;