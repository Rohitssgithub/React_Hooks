import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'

const UseLayoutEffect = () => {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log('useEffect')
    // }, [])
    // useLayoutEffect(() => {
    //     console.log(`Count has changed to ${count}`);
    // }, [count]);

    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };

    const [width, setWidth] = useState(0);
    const divRef = useRef(null);

    useLayoutEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.clientWidth);
        }
    }, []);
    // useEffect(() => {
    //     if (divRef.current) {
    //         setWidth(divRef.current.clientWidth);
    //     }
    // }, [])
    return (
        <>
            {/* <h1>uselayout</h1>
            <div>
                <p>Count: {count}</p>
                <button onClick={handleIncrement}>Increment</button>
            </div> */}
            <div ref={divRef} style={{ width: '300px', height: '200px', backgroundColor: 'lightblue' }}>
                This is a div element.
            </div>
            <p>Width of the div: {width}px</p>
        </>
    )
}

export default UseLayoutEffect