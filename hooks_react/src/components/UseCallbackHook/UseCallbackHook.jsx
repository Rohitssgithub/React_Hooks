import React, { useCallback, useState } from 'react';
import Todo from './Todo';


const UseCallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);



    const increment = () => {
        setCount(count + 1);
    };
    const addTodo = useCallback(() => {
        setTodos([...todos, "New Todo"]);
    }, [todos]);

    // const addTodo = () => {
    //     setTodos([...todos, "New Todo"]);
    // }

    return (
        <>
            <h1>UseCallBackHook</h1>

            <Todo todos={todos} addTodo={addTodo} />

            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}


export default UseCallBack

