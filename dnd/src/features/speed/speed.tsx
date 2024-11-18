import { useState } from "react";

function Speed() {
    const [speed, setSpeed] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // React.ChangeEvent<HTMLInputElement: only change events from HTMLInputElement can be passed to this function
        const value = parseInt(e.target.value) || 0;
        setSpeed(value);
    }
    return(
        <>
            <h3>Inspiration Points:</h3>
            <input type="number" value={speed} onChange={handleChange}></input>
            <h4>{speed}</h4>
        </>
    )
}

export default Speed;