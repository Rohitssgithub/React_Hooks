import React, { useRef, useEffect, useState } from 'react'

const UseRef = () => {
    const myElementRef = useRef(null);
    let [name, setname] = useState('')
    const handlechange = (e) => {
        setname(e.target.value)
    }
    console.log('invoke')
    useEffect(() => {
        console.log(myElementRef.current.value)
        console.log(name)
    });

    return (
        <>
            <input ref={myElementRef} />
            <input type="text" onChange={handlechange} />
        </>
    )
}

export default UseRef


// const UseRef = () => {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);
//     let inputref = useRef(null)

//     useEffect(() => {
//         count.current = count.current + 1;
//     });
//     return (
//         <>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             // ref={inputref}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }

// export default UseRef