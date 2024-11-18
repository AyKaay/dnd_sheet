import { RootState } from "@reduxjs/toolkit/query";
import ProficiencyBonus from "../proficiencyBonus/proficiencyBonus";
import { Skill } from "./skillsData";

type CharSkillProps = {
    skillName: string;
    skillData: Skill;
    updateSkill: (name: string, updatedSkill: Skill) => void;
}

// Take an ability from Ability Score Store (Str, Dex, etc) and return an ability modifier (-1, +2, etc)
function AbilityProf(AbilityName: string){
    const chosenAbility:string = AbilityName;

    // @ts-expect-error: Rootstate other types arguments unused for now
    const abilityScore = useSelector((state: RootState) => state.abilityScore);
    const abilityMod: number = Math.floor((abilityScore[chosenAbility as keyof typeof abilityScore] - 10) / 2);

    return abilityMod;
}

// skillname: (stealth, nature, etc); AbilityName: (str, dex, int, etc); skillData: (Skill);
function CharSkill({ skillName, skillData, updateSkill }: CharSkillProps, AbilityName: string) { 
    
    const abilityMod = AbilityProf(AbilityName);
    const addProfBonus = ProficiencyBonus();

    const totalSkillBonus = abilityMod + (addProfBonus * (skillData.isExpertise ? 2 : 1));

    // ```` State Change ```` \\

    const handleProficiencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedSkill = { ...skillData, isProficient: e.target.checked };
        updateSkill(skillName, updatedSkill);
    };
    
    const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedSkill = { ...skillData, isExpertise: e.target.checked };
        updateSkill(skillName, updatedSkill);
    };

    return (
        <div>
            <label>{skillName}</label>
            <input 
                disabled
                type="number" 
                value={totalSkillBonus}
            />
            <label>
                Proficient
                <input 
                    type="checkbox" 
                    checked={skillData.isProficient} 
                    onChange={handleProficiencyChange} 
                />
            </label>
            <label>
                Expertise
                <input 
                    type="checkbox" 
                    checked={skillData.isExpertise} 
                    onChange={handleExpertiseChange} 
                />
            </label>
            <label>Modifier: {skillData.modifier}</label>
        </div>
    );
}

export default CharSkill;