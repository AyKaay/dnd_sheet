import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import ProficiencyBonus from '../proficiencyBonus/proficiencyBonus';
import { Provider, useSelector } from 'react-redux';
import charLevelReducer from '../charLevel/charLevelSlice';

// Mock the useSelector hook to simulate the state
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

describe('Proficiency Bonus test', () => {
    it('Display the correct proficiency bonus based on the charLevel = 3', () => {
        const INPUT:number = 3;
        const OUTPUT:string = '2';

        (useSelector as unknown as jest.Mock).mockReturnValue(INPUT); // input?

        render(
            <Provider store={configureStore({
                reducer: { charLevel: charLevelReducer },
                preloadedState: { charLevel: INPUT }, // input?
                })}>
                <ProficiencyBonus />
            </Provider>
        );

        const profBonus = screen.getByText(OUTPUT); // outputs
        expect(profBonus).toBeInTheDocument();
    })

    it('Display the correct proficiency bonus based on the charLevel = 5', () => {
        const INPUT:number = 5;
        const OUTPUT:string = '3';

        (useSelector as unknown as jest.Mock).mockReturnValue(INPUT); // input?

        render(
            <Provider store={configureStore({
                reducer: { charLevel: charLevelReducer },
                preloadedState: { charLevel: INPUT }, // input?
                })}>
                <ProficiencyBonus />
            </Provider>
        );

        const profBonus = screen.getByText(OUTPUT); // outputs
        expect(profBonus).toBeInTheDocument();
    })

    it('Display the correct proficiency bonus based on the charLevel = NaN', () => {
        const INPUT:number = NaN;
        const OUTPUT:string = '2';

        (useSelector as unknown as jest.Mock).mockReturnValue(INPUT); // input?

        render(
            <Provider store={configureStore({
                reducer: { charLevel: charLevelReducer },
                preloadedState: { charLevel: INPUT }, // input?
                })}>
                <ProficiencyBonus />
            </Provider>
        );

        const profBonus = screen.getByText(OUTPUT); // outputs
        expect(profBonus).toBeInTheDocument();
    })
})
