import { useState } from "react";

function DeathSaves() {
    const [successes, setSuccesses] = useState<number>(0);
    const [fails, setFails] = useState<number>(0);

    const handleSuccessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Math.min(3, parseInt(e.target.value) || 0));
        setSuccesses(value);
    };

    const handleFailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Math.min(3, parseInt(e.target.value) || 0));
        setFails(value);
    };

    return (
        <>
            <h3>Death Saves:</h3>
            <label>Successes</label>
            <input
                type="number"
                value={successes}
                onChange={handleSuccessChange}
                min="0"
                max="3"
            />
            <label>Fails</label>
            <input
                type="number"
                value={fails}
                onChange={handleFailChange}
                min="0"
                max="3"
            />
        </>
    );
}

export default DeathSaves;