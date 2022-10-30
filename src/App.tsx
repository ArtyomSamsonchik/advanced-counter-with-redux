import React, {useEffect, useState} from 'react';
import s from "./App.module.css";
import {SplitedCounter} from "./components/SplitedCounter/SplitedCounter";
import {getFromStorage, saveToStorage} from "./helpers";
import {JoinedCounter} from "./components/JoinedCounter/JoinedCounter";

type CounterData = {
    minvalue: number
    maxvalue: number
}

function App() {
    const initData = getFromStorage<CounterData>("counter", {minvalue: 0, maxvalue: 5});

    const [minvalue, setMinValue] = useState(initData.minvalue);
    const [maxvalue, setMaxValue] = useState(initData.maxvalue);
    const [count, setCount] = useState(minvalue);

    const [error, setError] = useState(false);
    const [onTuning, setOnTuning] = useState(false);

    useEffect(() => {
        setCount(minvalue);
    }, [minvalue]);

    const incCounter = () => {
        setCount(count + 1);
    }

    const resetCounter = () => setCount(minvalue);

    const updateCounterSettings = () => {
        setOnTuning(false);
        saveToStorage<CounterData>("counter", {minvalue, maxvalue});
    };

    return (
        <div className={s.app}>
            <SplitedCounter minvalue={minvalue}
                            maxvalue={maxvalue}
                            count={count}
                            error={error}
                            setError={setError}
                            onTuning={onTuning}
                            setMinValue={setMinValue}
                            setMaxValue={setMaxValue}
                            setOnTuning={setOnTuning}
                            incCounter={incCounter}
                            resetCounter={resetCounter}
                            updateSettings={updateCounterSettings}
            />
            <JoinedCounter minvalue={minvalue}
                           maxvalue={maxvalue}
                           count={count}
                           error={error}
                           onTuning={onTuning}
                           setMinValue={setMinValue}
                           setMaxValue={setMaxValue}
                           setError={setError}
                           setOnTuning={setOnTuning}
                           incCounter={incCounter}
                           resetCounter={resetCounter}
                           updateSettings={updateCounterSettings}
            />
        </div>
    );
}

export default App;
