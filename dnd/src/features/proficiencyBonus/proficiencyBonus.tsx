import { RootState } from "@reduxjs/toolkit/query";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function ProficiencyBonus() {

    // @ts-expect-error: Rootstate other types arguments unused for now
    const storeCharLevel: number = useSelector((state: RootState) => state.charLevel);

    const profBonus = useMemo(() => {
        if (storeCharLevel >= 1  && storeCharLevel <=  4) return 2;
        if (storeCharLevel >= 5  && storeCharLevel <=  8) return 3;
        if (storeCharLevel >= 9  && storeCharLevel <= 12) return 4;
        if (storeCharLevel >= 13 && storeCharLevel <= 16) return 5;
        if (storeCharLevel >= 17 && storeCharLevel <= 20) return 6;
        return 2; 
    }, [storeCharLevel]);

    return profBonus;
}

export default ProficiencyBonus;