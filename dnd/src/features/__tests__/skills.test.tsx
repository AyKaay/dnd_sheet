import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Skill } from '../skills/skillsData';
import CharSkill from '../skills/skills';
import abilityScoreReducer from '../abilityScore/abilityScoreSlice';

// Define a mock updateSkill function
const mockUpdateSkill = jest.fn();

describe('CharSkill Component', () => {
    it('displays the correct totalSkillBonus for dexterity-based skill with expertise', () => {
        // Set initial state with dexterity at 12
        const initialState = {
            abilityScore: { str: 10, dex: 12, con: 10, int: 10, wis: 10, cha: 10 },
        };

        // Set up a mock skill data
        const mockSkillData1: Skill = {
            isProficient: true,
            isExpertise: true,
            modifier: 0,
            value: 0,
            notes: '',
            baseAbility: 'dex',
            proficiencyBonus: 0,
            temporaryBonus: 0
        };

        const store = configureStore({
            reducer: { abilityScore: abilityScoreReducer },
            preloadedState: initialState,
        });

        render(
            <Provider store={store}>
                <CharSkill
                    skillName="stealth"
                    skillData={mockSkillData1}
                    updateSkill={mockUpdateSkill}
                    AbilityName="dex"
                />
            </Provider>
        );

        // Expect totalSkillBonus to be 5 in the input field
        const inputElement = screen.getByRole('spinbutton'); // The role for <input type="number">
        expect(inputElement).toHaveValue(5);
    });

    it('displays the correct totalSkillBonus for wisdom skills with no proficiency or expertise', () => {
        const initialState = {
            abilityScore: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
        };

        const mockSkillData2: Skill = {
            isProficient: false,
            isExpertise: false,
            modifier: 0,
            value: 0,
            notes: '',
            baseAbility: 'wis',
            proficiencyBonus: 0,
            temporaryBonus: 0
        };

        const store = configureStore({
            reducer: { abilityScore: abilityScoreReducer },
            preloadedState: initialState,
        });

        render(
            <Provider store={store}>
                <CharSkill
                    skillName="perception"
                    skillData={mockSkillData2}
                    updateSkill={mockUpdateSkill}
                    AbilityName="wis"
                />
            </Provider>
        )

        const inputElement2 = screen.getByRole('spinbutton');
        expect(inputElement2).toHaveValue(2);
    })
});
