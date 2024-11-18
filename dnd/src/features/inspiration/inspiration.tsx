import { useState } from "react";

function CharInspiration() {
    const [inspo, setInspo] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // React.ChangeEvent<HTMLInputElement: only change events from HTMLInputElement can be passed to this function
        const value = parseInt(e.target.value) || 0;
        setInspo(value);
    }
    return(
        <>
            <h3>Inspiration Points:</h3>
            <input type="number" value={inspo} onChange={handleChange}></input>
            <h4>{inspo}</h4>
        </>
    )
}

export default CharInspiration;