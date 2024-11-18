import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "./charLevelSlice";
import { RootState } from "@reduxjs/toolkit/query";

function CharLevel() {
    const dispatch = useDispatch();
    // @ts-expect-error: Rootstate other types arguments unused for now
    const storeCharLevel: number = useSelector((state: RootState) => state.charLevel); // take level state from store

    const [level, setLevelState] = useState(1);

    const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = parseInt(e.target.value) || 0;
        setLevelState(numericValue);
    };

    const dispatchChange = () => dispatch(setLevel(level));

    return(
        <div>
            <h3>Character Level: </h3>
            <label>{storeCharLevel}</label>

            <input
                type="number"
                value={level}
                onChange={handleLevelChange}
            />
            <button type="submit" onClick={dispatchChange}>Submit</button>
        </div>
    )
}

export default CharLevel;