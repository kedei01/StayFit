import React, { createContext, useState } from 'react';


const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
    const [finished, setFinished] = useState([]);
    const [exercises, setExercises] = useState(0);
    const [cals, setCals] = useState(0);
    const [mins, setMins] = useState(0);
    return (
        < FitnessItems.Provider value = {{ finished, setFinished, exercises, setExercises, cals, setCals, mins, setMins }
}
        >
    { children }
        </FitnessItems.Provider >
    )
}
export { FitnessContext, FitnessItems }

