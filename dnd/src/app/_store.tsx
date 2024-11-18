import { configureStore } from '@reduxjs/toolkit';
import abilityScoreReducer from '../features/abilityScore/abilityScoreSlice';
import charLevelReducer from '../features/charLevel/charLevelSlice';

const store = configureStore({
    reducer: {
        abilityScore: abilityScoreReducer, 
        charLevel: charLevelReducer,
    },
});

export default store;
