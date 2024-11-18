import { useState } from "react";
import { useDispatch } from "react-redux";
import { setScore } from "./abilityScoreSlice";

function AbilityScore() {
    const dispatch = useDispatch();

    const [scores, setScores] = useState({
        str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
    });

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const numericValue = parseInt(value) || 0;

        setScores({ ...scores, [name]: numericValue });

        dispatch(setScore({ ability: name as keyof typeof scores, value: numericValue }));  
    };
    
    return (
        <div>
            <h3>Ability Scores</h3>
            {Object.keys(scores).map((ability) => (
                <div key={ability}>
                    <label>{ability.toUpperCase()}:</label>
                    <input
                        type="number"
                        name={ability}
                        value={scores[ability as keyof typeof scores]}
                        onChange={handleScoreChange}
                    />

                    {/*@ts-expect-error: label name currently for clarity (unused for now)*/}
                    <label name="ability_mod">
                        { Math.floor((scores[ability as keyof typeof scores] - 10) / 2) }
                    </label> 
                </div>
            ))}
        </div>
    )
}

export default AbilityScore;