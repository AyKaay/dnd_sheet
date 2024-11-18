import { useState } from "react";

function Initiative() {
    const [init, setInit] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // React.ChangeEvent<HTMLInputElement: only change events from HTMLInputElement can be passed to this function
        const value = parseInt(e.target.value) || 0;
        setInit(value);
    }
    return(
        <>
            <h3>Inspiration Points:</h3>
            <input type="number" value={init} onChange={handleChange}></input>
            <h4>{init}</h4>
        </>
    )
}

export default Initiative;