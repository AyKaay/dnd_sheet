import { useState } from "react";

function Initiative() {
    const [hp, setHp] = useState<number>(0);
    const [thp, setThp] = useState<number>(0); // temp hp

    const handleHPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // React.ChangeEvent<HTMLInputElement: only change events from HTMLInputElement can be passed to this function
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setHp(value);
        }
    };

    const handleTHPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // React.ChangeEvent<HTMLInputElement: only change events from HTMLInputElement can be passed to this function
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setThp(value);
        }
    };

    return (
        <>
            <h3>Inspiration Points:</h3>
            <label>HP: </label>
            <input type="number" value={hp} onChange={handleHPChange}></input>
            <label>THP: </label>
            <input type="number" value={thp} onChange={handleTHPChange}></input>
        </>
    );
}

export default Initiative;
