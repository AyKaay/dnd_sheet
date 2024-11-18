import { useState } from "react";

function HitDice() {
    const [hitDice, setHitDice] = useState(0);
    const [totalDice, setTotalDice] = useState(0);

    return (
        <>
            <h3>Hit Dice</h3>
            <input type="number" value={hitDice} onChange={(e) => setHitDice(parseInt(e.target.value))}></input>
            <input type="number" value={totalDice} onChange={(e) => setTotalDice(parseInt(e.target.value))}></input>
        </>
    )
}

export default HitDice;