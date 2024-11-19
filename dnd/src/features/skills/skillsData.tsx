// Define a type for each skill's properties
export interface Skill {
    value: number;
    modifier: number;
    isProficient: boolean;
    isExpertise: boolean;
    notes: string;
    baseAbility:
        | "str"
        | "dex"
        | "con"
        | "int"
        | "wis"
        | "cha";
    proficiencyBonus: number;
    temporaryBonus: number;
}

// Define a type for the overall skills data structure
export interface SkillsData {
    acrobatics: Skill;
    animalHandling: Skill;
    arcana: Skill;
    athletics: Skill;
    deception: Skill;
    history: Skill;
    insight: Skill;
    intimidation: Skill;
    investigation: Skill;
    medicine: Skill;
    nature: Skill;
    perception: Skill;
    performance: Skill;
    persuasion: Skill;
    religion: Skill;
    sleightOfHand: Skill;
    stealth: Skill;
    survival: Skill;
}

export const skillsData: SkillsData = {
    acrobatics: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "dex",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    animalHandling: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "wis",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    arcana: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "int",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    athletics: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "str",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    deception: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "cha",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    history: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "int",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    insight: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "wis",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    intimidation: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "cha",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    investigation: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "int",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    medicine: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "wis",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    nature: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "int",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    perception: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "wis",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    performance: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "cha",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    persuasion: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "cha",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    religion: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "int",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    sleightOfHand: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "dex",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    stealth: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "dex",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
    survival: {
        value: 0,
        modifier: 0,
        isProficient: false,
        isExpertise: false,
        notes: "",
        baseAbility: "wis",
        proficiencyBonus: 0,
        temporaryBonus: 0,
    },
};
