import React, { useCallback, useMemo, useState } from 'react';
const expenCalculation = (c) => {
    console.log("called");
    for (let i = 0; i < 1000000000; i++) {
        c += 1;
    }
    return c;
}

const UseMemoHook = () => {
    let [count, SetCount] = useState(0);
    let [todo, SetTodo] = useState([]);

    let calculation = useMemo(() => expenCalculation(count), [count])
    // let calculation = expenCalculation(count)
    console.log('calculation', calculation)


    let addTodo = () => {
        SetTodo([...todo, 'new data'])
    }


    const increaseCount = () => {
        SetCount(count + 1)
    }
    return (
        <>
            <h1>UseMemoHook</h1>
            {
                todo.map((ele, index) => {
                    return (
                        <p key={index}>{ele}</p>
                    )
                })
            }
            <button onClick={addTodo}>Add Todo</button>

            <p>{count} : count</p>
            <button onClick={increaseCount}>click</button>
            <h2>Calculation</h2>

            <p>{calculation}</p>

        </>
    )
}


export default UseMemoHook